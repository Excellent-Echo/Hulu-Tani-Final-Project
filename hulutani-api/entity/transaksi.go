package entity

import "time"

type Transaksi struct {
	ID               int       `gorm:"primarykey" json:"id"`
	Status           string    `json:"status"`
	Tanggal          time.Time `json:"tanggal"`
	MetodePembayaran string    `json:"metode_pembayaran"`
	IdPelanggan      int       `grom:"id_pelanggan" json:"id_pelanggan"`
	IdProduk         int       `json:"id_produk" gorm:"index"`
	BuktiTransfer    string    `json:"bukti_transfer"`
	Produk           []Produk  `gorm:"many2many:produk_transaksi"`
	IdAlamat         int       `json:"id_alamat"`
	Alamat           Alamat    `gorm:"foreignkey:IdAlamat" json:"alamat"`
	Quantity         int       `json:"quantity"`
	Harga            int       `json:"harga"`
	KodeTransaksi    string    `json:"kode_transaksi"`
}

type ProdukTransaksi struct {
	IdTransaksi int `json:"id_transaksi"`
	IdProduk    int `json:"id_produk"`
}

type TransaksiInput struct {
	Status           string `json:"status"`
	MetodePembayaran string `json:"metode_pembayaran"`
	BuktiTransfer    string `json:"bukti_transfer"`
	IdProduk         int    `json:"id_produk" gorm:"index"`
	IdAlamat         int    `json:"id_alamat"`
	Quantity         int    `json:"quantity"`
	Harga            int    `json:"harga"`
}

type UpdateStatus struct {
	Status string `json:"status"`
}
