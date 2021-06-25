package transaksi

import (
	"hulutani-api/entity"

	"gorm.io/gorm"
)

type Repository interface {
	FindAll(idPelanggan string) ([]entity.Transaksi, error)
	Create(produkTransaksi entity.ProdukTransaksi, transaksi entity.Transaksi) (entity.Transaksi, error)
	CreateProdukTransaksi(produkTransaksi entity.ProdukTransaksi) (entity.ProdukTransaksi, error)
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

	if err := r.db.Where("id_pelanggan = ?", idPelanggan).Preload("Produk").Find(&transaksi).Error; err != nil {
		return transaksi, err
	}

	return transaksi, nil
}

func (r *repository) Create(produkTransaksi entity.ProdukTransaksi, transaksi entity.Transaksi) (entity.Transaksi, error) {
	if err := r.db.Create(&transaksi).Error; err != nil {
		return transaksi, err
	}

	if err := r.db.Exec("insert into produk_transaksi (transaksi_id, produk_id) values(?,?)", produkTransaksi.IdTransaksi, produkTransaksi.IdProduk).Error; err != nil {
		return transaksi, err
	}
	return transaksi, nil
}

func (r *repository) CreateProdukTransaksi(produkTransaksi entity.ProdukTransaksi) (entity.ProdukTransaksi, error) {
	if err := r.db.Create(&produkTransaksi).Error; err != nil {
		return produkTransaksi, err
	}

	return produkTransaksi, nil
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
