package entity

type DetailTransaksi struct {
	KodeDetailTransaksi int `gorm:"primarykey" json:"kode_detail_transaksi"`
	KodeTransaksi       int `json:"kode_transaksi"`
	AlamatId            int `json:"alamat_id"`
	KodeKeranjang       int `json:"kode_keranjang"`
}

type DetailTransaksiInput struct {
	KodeTransaksi int `json:"kode_transaksi"`
	AlamatId      int `json:"alamat_id"`
	KodeKeranjang int `json:"kode_keranjang"`
}
