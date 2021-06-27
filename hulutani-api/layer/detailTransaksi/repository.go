package detailtransaksi

import (
	"hulutani-api/entity"

	"gorm.io/gorm"
)

type Repository interface {
	Create(detail entity.DetailTransaksi) (entity.DetailTransaksi, error)
	FindByKodeTransaksi(kode string) (entity.DetailTransaksi, error)
}

type repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) Create(detail entity.DetailTransaksi) (entity.DetailTransaksi, error) {
	if err := r.db.Create(&detail).Error; err != nil {
		return detail, err
	}

	return detail, nil
}

func (r *repository) FindByKodeTransaksi(kode string) (entity.DetailTransaksi, error) {
	var detail entity.DetailTransaksi

	if err := r.db.Preload("Transaksi").Preload("KeranjangBelanja").Where("kode_transaksi = ?", kode).Find(&detail).Error; err != nil {
		return detail, err
	}

	return detail, nil
}
