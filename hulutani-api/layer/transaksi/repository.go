package transaksi

import (
	"hulutani-api/entity"
	"time"

	"gorm.io/gorm"
)

type Transaksi struct {
	ID               int             `gorm:"primarykey" json:"id"`
	Status           string          `json:"status"`
	Tanggal          time.Time       `json:"tanggal"`
	MetodePembayaran string          `json:"metode_pembayaran"`
	IdPelanggan      int             `grom:"id_pelanggan" json:"id_pelanggan"`
	IdProduk         int             `json:"id_produk" gorm:"index"`
	Produk           []entity.Produk `gorm:"many2many:produk_transaksi"`
	Quantity         int             `json:"quantity"`
	Harga            int             `json:"harga"`
	KodeTransaksi    string          `json:"kode_transaksi"`
}

type Repository interface {
	FindAllTransaksi() ([]entity.Transaksi, error)
	FindAll(idPelanggan string) ([]entity.Transaksi, error)
	Create(transaksi entity.Transaksi) (entity.Transaksi, error)
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

func (r *repository) FindAllTransaksi() ([]entity.Transaksi, error) {
	var transaksi []entity.Transaksi

	if err := r.db.Preload("Produk").Preload("Alamat").Find(&transaksi).Error; err != nil {
		return transaksi, err
	}

	return transaksi, nil
}

func (r *repository) FindAll(idPelanggan string) ([]entity.Transaksi, error) {
	var transaksi []entity.Transaksi

	if err := r.db.Where("id_pelanggan = ?", idPelanggan).Preload("Produk").Preload("Alamat").Find(&transaksi).Error; err != nil {
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

func (r *repository) CreateProdukTransaksi(produkTransaksi entity.ProdukTransaksi) (entity.ProdukTransaksi, error) {
	if err := r.db.Exec("insert into produk_transaksi (transaksi_id, produk_id) values (?,?)", produkTransaksi.IdTransaksi, produkTransaksi.IdProduk).Error; err != nil {
		return produkTransaksi, err
	}

	return produkTransaksi, nil
}

func (r *repository) FindByKode(kodeTransaksi string) (entity.Transaksi, error) {
	var transaksi entity.Transaksi

	if err := r.db.Where("kode_transaksi = ?", kodeTransaksi).Preload("Produk").Preload("Alamat").Find(&transaksi).Error; err != nil {
		return transaksi, err
	}

	return transaksi, nil
}

func (r *repository) UpdateByKode(kodeTransaksi string, dataUpdate map[string]interface{}) (entity.Transaksi, error) {
	var transaksi entity.Transaksi

	if err := r.db.Where("kode_transaksi = ?", kodeTransaksi).Preload("Produk").Preload("Alamat").Find(&transaksi).Error; err != nil {
		return transaksi, err
	}

	if err := r.db.Model(&transaksi).Where("kode_transaksi = ?", kodeTransaksi).Updates(dataUpdate).Error; err != nil {
		return transaksi, err
	}

	return transaksi, nil
}
