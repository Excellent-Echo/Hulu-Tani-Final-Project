package entity

type Kategori struct {
	ID   int    `gorm:"Primarykey" json:"id"`
	Nama string `json:"nama"`
}

type KategoriInput struct {
	Nama string `json:"nama"`
}

type KategoriDetail struct {
	ID      int      `json:"id"`
	Nama    string   `json:"nama"`
	Produks []Produk `json:"produks"`
}
