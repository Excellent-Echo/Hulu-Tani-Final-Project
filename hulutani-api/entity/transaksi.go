package entity

type Transaksi struct {
	KodeTransaksi    int    `gorm:"PrimaryKey" json:"kode_transaksi"`
	Status           string `json:"status"`
	MetodePembayaran string `json:"metode_pembayaran"`
	TotalPembayaran  int    `json:"total_pembayaran"`
	TanggalTransaksi string `json:"tanggal_transaksi"`
	KodeKeranjang    int    `json:"kode_keranjang"`
	IdPelanggan      int    `json:"id_pelanggan"`
}

type TransaksiInput struct {
	Status           string `json:"status"`
	MetodePembayaran string `json:"metode_pembayaran"`
	TotalPembayaran  int    `json:"total_pembayaran"`
	TanggalTransaksi string `json:"tanggal_transaksi"`
	KodeKeranjang    int    `json:"kode_keranjang"`
}
