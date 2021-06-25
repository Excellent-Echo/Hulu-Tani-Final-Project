package entity

import "time"

type Transaksi struct {
	ID               int       `gorm:"primarykey" json:"id"`
	Status           string    `json:"status"`
	Tanggal          time.Time `json:"tanggal"`
	MetodePembayaran string    `json:"metode_pembayaran"`
	IdPelanggan      int       `grom:"id_pelanggan" json:"id_pelanggan"`
	IdProduk         int       `json:"id_produk" gorm:"index"`
	Produk           []Produk  `gorm:"many2many:produk_transaksi"`
	Quantity         int       `json:"quantity"`
	Harga            int       `json:"harga"`
	KodeTransaksi    string    `json:"kode_transaksi"`
}

type ProdukTransaksi struct {
	IdTransaksi int `json:"id_transaksi"`
	IdProduk    int `json:"id_produk"`
}

type TransaksiInput struct {
	Status           string    `json:"status"`
	Tanggal          time.Time `json:"tanggal"`
	MetodePembayaran string    `json:"metode_pembayaran"`
	IdPelanggan      int       `grom:"id_pelanggan" json:"id_pelanggan"`
	IdProduk         int       `json:"id_produk" gorm:"index"`
	Produk           []Produk  `gorm:"many2many:produk_transaksi"`
	Quantity         int       `json:"quantity"`
	Harga            int       `json:"harga"`
	KodeTransaksi    string    `json:"kode_transaksi"`
}
