package entity

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

type ProdukInput struct {
	Nama       string `json:"nama"`
	Deskripsi  string `json:"deskripsi"`
	Gambar     string `json:"gambar"`
	Takaran    string `json:"takaran"`
	Harga      int    `json:"harga"`
	Promo      string `json:"promo"`
	Stok       int    `json:"stok"`
	IdKategori int    `json:"id_kategori"`
}

type Harga struct {
	Dari   int `form:"dari"`
	Sampai int `form:"sampai"`
}
