package transaksi

import (
	"hulutani-api/entity"

	"gorm.io/gorm"
)

type Repository interface {
	FindAll(idPelanggan string) ([]entity.Transaksi, error)
	Create(transaksi entity.Transaksi) (entity.Transaksi, error)
	FindByKode(kodeTransaksi string) (entity.Transaksi, error)
	UpdateByKode(kodeTransaksi string, dataUpdate map[string]interface{}) (entity.Transaksi, error)
}

type repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) FindAll(idPelanggan string) ([]entity.Transaksi, error) {
	var transaksi []entity.Transaksi

	if err := r.db.Where("id_pelanggan = ?", idPelanggan).Find(&transaksi).Error; err != nil {
		return transaksi, err
	}

	return transaksi, nil
}

func (r *repository) Create(transaksi entity.Transaksi) (entity.Transaksi, error) {
	if err := r.db.Create(&transaksi).Error; err != nil {
		return transaksi, err
	}
	return transaksi, nil
}

func (r *repository) FindByKode(kodeTransaksi string) (entity.Transaksi, error) {
	var transaksi entity.Transaksi

	if err := r.db.Where("kode_transaksi = ?", kodeTransaksi).Find(&transaksi).Error; err != nil {
		return transaksi, err
	}

	return transaksi, nil
}

func (r *repository) UpdateByKode(kodeTransaksi string, dataUpdate map[string]interface{}) (entity.Transaksi, error) {
	var transaksi entity.Transaksi

	if err := r.db.Where("kode_transaksi = ?", kodeTransaksi).Find(&transaksi).Error; err != nil {
		return transaksi, err
	}

	if err := r.db.Model(&transaksi).Where("kode_transaksi = ?", kodeTransaksi).Updates(dataUpdate).Error; err != nil {
		return transaksi, err
	}

	return transaksi, nil
}
