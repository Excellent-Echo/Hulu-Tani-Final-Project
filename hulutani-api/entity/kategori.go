package entity

type Kategori struct {
	ID        int    `gorm:"Primarykey" json:"id"`
	Nama      string `json:"nama"`
	Deskripsi string `json:"deskripsi"`
}

type KategoriInput struct {
	Nama      string `json:"nama"`
	Deskripsi string `json:"deskripsi"`
}
