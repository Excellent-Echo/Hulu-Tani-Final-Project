package migration

import (
	"time"
)

type Pelanggan struct {
	ID             int         `gorm:"Primarykey" json:"id"`
	Nama           string      `json:"name"`
	TanggalLahir   string      `json:"tanggal_lahir"`
	NomorHandphone string      `json:"nomor_handphone"`
	JenisKelamin   string      `json:"jenis_kelamin"`
	Profil         string      `json:"profil"`
	Email          string      `gorm:"unique" json:"email"`
	Password       string      `gorm:"password" json:"password"`
	Role           int         `json:"role"`
	Transaksi      []Transaksi `gorm:"Foreignkey:IdPelanggan"`
	Alamat         []Alamat    `gorm:"foreignkey:IdPelanggan"`
}

type Admin struct {
	ID       int    `gorm:"Primarykey" json:"id"`
	Nama     string `json:"nama"`
	Role     int    `json:"role"`
	Email    string `gorm:"unique, email" json:"email"`
	Password string `gorm:"password" json:"password"`
}

type Alamat struct {
	ID                     int    `gorm:"Primarykey" json:"id"`
	NamaPenerima           string `json:"nama_penerima"`
	Provinsi               string `json:"provinsi"`
	Kota                   string `json:"kota"`
	AlamatDetail           string `json:"alamat_detail"`
	NomorHandphonePenerima string `json:"nomor_handphone_penerima"`
	IdPelanggan            int    `json:"id_pelanggan"`
	CityId                 string `json:"city_id"`
}

type Kontak struct {
	ID             int    `gorm:"primarykey" json:"id"`
	Nama           string `json:"nama"`
	Alamat         string `json:"alamat"`
	JenisKelamin   string `json:"jenis_kelamin"`
	TanggalLahir   string `json:"tanggal_lahir"`
	NomorHandphone string `json:"nomor_handphone"`
}

type Kategori struct {
	ID     int      `gorm:"Primarykey" json:"id"`
	Nama   string   `json:"nama"`
	Produk []Produk `gorm:"foreignkey:IdKategori"`
}

type Produk struct {
	ID         int    `gorm:"Primarykey" json:"id"`
	Nama       string `json:"nama"`
	Deskripsi  string `json:"deskripsi"`
	Gambar     string `json:"gambar"`
	Takaran    string `json:"takaran"`
	Harga      int    `json:"harga"`
	Promo      string `json:"promo"`
	Stok       int    `json:"stok"`
	IdKategori int    `json:"id_kategori"`
}

type Transaksi struct {
	ID               int       `gorm:"primarykey" json:"id"`
	Status           string    `json:"status"`
	Tanggal          time.Time `json:"tanggal"`
	MetodePembayaran string    `json:"metode_pembayaran"`
	IdPelanggan      int       `grom:"id_pelanggan" json:"id_pelanggan"`
	IdProduk         int       `json:"id_produk"`
	IdAlamat         int       `json:"id_alamat"`
	Quantity         int       `json:"quantity"`
	Harga            int       `json:"harga"`
	Produk           []Produk  `gorm:"many2many:produk_transaksi"`
	Alamat           Alamat    `gorm:"foreignkey:IdAlamat" json:"alamat"`
	BuktiTransfer    string    `json:"bukti_transfer"`
	KodeTransaksi    string    `gorm:"index, unique" json:"kode_transaksi"`
}

type Provinsi struct {
	ProvinceId string `json:"province_id"`
	Province   string `json:"province"`
}

type Kota struct {
	CityId     string `json:"city_id"`
	ProvinceId string `json:"province_id"`
	Province   string `json:"province"`
	Type       string `json:"type"`
	CityName   string `json:"city_name"`
	PostalCode string `json:"postal_code"`
}
