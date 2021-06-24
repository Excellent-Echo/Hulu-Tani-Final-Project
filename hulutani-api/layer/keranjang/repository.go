package keranjang

import (
	"hulutani-api/entity"

	"gorm.io/gorm"
)

type Repository interface {
	FindKeranjangbyIdPelanggan(id string, kodeKeranjang string) (entity.KeranjangBelanja, error)
	FindKeranjangByKode(kodeKeranjang string) (entity.KeranjangBelanja, error)
	Create(keranjang entity.KeranjangBelanja) (entity.KeranjangBelanja, error)
	DeleteKeranjang(kodeKeranjang string) (interface{}, error)
}

type repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) FindKeranjangbyIdPelanggan(id string, kodeKeranjang string) (entity.KeranjangBelanja, error) {
	var keranjang entity.KeranjangBelanja

	if err := r.db.Where("id_pelanggan = ? and kode_keranjang = ?", id, kodeKeranjang).Find(&keranjang).Error; err != nil {
		return keranjang, err
	}

	return keranjang, nil
}

func (r *repository) FindKeranjangByKode(kodeKeranjang string) (entity.KeranjangBelanja, error) {
	var keranjang entity.KeranjangBelanja

	if err := r.db.Where("kode_keranjang = ?", kodeKeranjang).Find(&keranjang).Error; err != nil {
		return keranjang, err
	}

	return keranjang, nil
}

func (r *repository) Create(keranjang entity.KeranjangBelanja) (entity.KeranjangBelanja, error) {
	if err := r.db.Create(&keranjang).Error; err != nil {
		return keranjang, err
	}

	return keranjang, nil
}

func (r *repository) DeleteKeranjang(kodeKeranjang string) (interface{}, error) {
	if err := r.db.Where("kode_keranjang = ?", kodeKeranjang).Delete(&entity.KeranjangBelanja{}).Error; err != nil {
		return "error", err
	}

	status := "keranjang success deleted"

	return status, nil
}
