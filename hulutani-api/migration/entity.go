package migration

type Pelanggan struct {
	ID               int              `gorm:"Primarykey" json:"id"`
	Nama             string           `json:"name"`
	TanggalLahir     string           `json:"tanggal_lahir"`
	NomorHandphone   int              `json:"nomor_handphone"`
	JenisKelamin     string           `json:"jenis_kelamin"`
	Email            string           `gorm:"unique, email" json:"email"`
	Password         string           `gorm:"password" json:"password"`
	KeranjangBelanja KeranjangBelanja `gorm:"foreignkey:IdPelanggan"`
	Alamat           []Alamat         `gorm:"foreignkey:IdPelanggan"`
	Transaksi        []Transaksi      `gorm:"foreignkey:IdPelanggan"`
}

type Admin struct {
	ID       int    `gorm:"Primarykey" json:"id"`
	Nama     string `json:"nama"`
	Email    string `gorm:"unique, email" json:"email"`
	Password string `gorm:"password" json:"password"`
}

type Alamat struct {
	ID                     int    `gorm:"Primarykey" json:"id"`
	NamaPenerima           string `json:"nama_penerima"`
	Provinsi               string `json:"provinsi"`
	Kota                   string `json:"kota"`
	AlamatDetail           string `json:"alamat_detail"`
	NomorHandphonePenerima int    `json:"nomor_handphone_penerima"`
	IdPelanggan            int    `json:"id_pelanggan"`
}

type Kategori struct {
	ID        int      `gorm:"Primarykey" json:"id"`
	Nama      string   `json:"nama"`
	Deskripsi string   `json:"deskripsi"`
	Produk    []Produk `gorm:"foreignkey:IdKategori"`
}

type Produk struct {
	ID         int    `gorm:"Primarykey" json:"id"`
	Nama       string `json:"nama"`
	Deskripsi  string `json:"deskripsi"`
	Takaran    string `json:"takaran"`
	Harga      int    `json:"harga"`
	Promo      string `json:"promo"`
	Stok       int    `json:"stok"`
	IdKategori int    `json:"id_kategori"`
}

type KeranjangBelanja struct {
	IdKeranjang   int       `gorm:"Primarykey"`
	Produk        []Produk  `gorm:"many2many:ProdukKeranjang; association_foreignkey:ID; foreignkey:IdKeranjang"`
	IdPelanggan   int       `json:"id_pelanggan"`
	KodeKeranjang int       `gorm:"index"`
	Transaksi     Transaksi `gorm:"foreignkey:KodeKeranjang"`
}

type Transaksi struct {
	KodeTransaksi    int             `gorm:"PrimaryKey" json:"kode_transaksi"`
	Status           string          `json:"status"`
	MetodePembayaran string          `json:"metode_pembayaran"`
	TotalPembayaran  string          `json:"total_pembayaran"`
	TanggalTransaksi string          `json:"tanggal_transaksi"`
	KodeKeranjang    int             `json:"kode_keranjang"`
	IdPelanggan      int             `json:"id_pelanggan"`
	DetailTransaksi  DetailTransaksi `gorm:"foreignkey:KodeTransaksi"`
}

type DetailTransaksi struct {
	KodeDetailTransaksi int    `gorm:"primarykey" json:"kode_detail_transaksi"`
	KodeTransaksi       int    `json:"kode_transaksi"`
	Alamat              Alamat `gorm:"foreignkey:ID" json:"alamat"`
	KodeKurir           int    `json:"kode_kurir"`
	Ongkir              int    `json:"Ongkir"`
}

type Provinsi struct {
	ProvinceId string `json:"province_id"`
	Province   string `json:"province"`
}

type City struct {
	CityId     string `json:"city_id"`
	ProvinceId string `json:"province_id"`
	Province   string `json:"province"`
	Type       string `json:"type"`
	CityName   string `json:"city_name"`
	PostalCode string `json:"postal_code"`
}
