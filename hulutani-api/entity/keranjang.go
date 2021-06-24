package entity

type KeranjangBelanja struct {
	IdKeranjang   int `gorm:"Primarykey" json:"id_keranjang"`
	IdProduk      int `json:"id_produk"`
	Quantity      int `json:"quantity"`
	IdPelanggan   int `json:"id_pelanggan"`
	KodeKeranjang int `gorm:"index" json:"kode_keranjang"`
}

type KeranjangInput struct {
	IdProduk string `json:"id_produk"`
	Quantity string `json:"quantity"`
}
