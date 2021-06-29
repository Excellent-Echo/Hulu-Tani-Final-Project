package entity

type Alamat struct {
	ID                     int    `gorm:"Primarykey" json:"id"`
	IdPelanggan            int    `json:"id_pelanggan"`
	NamaPenerima           string `json:"nama_penerima"`
	Provinsi               string `json:"provinsi"`
	Kota                   string `json:"kota"`
	AlamatDetail           string `json:"alamat_detail"`
	NomorHandphonePenerima string `json:"nomor_handphone_penerima"`
	CityId                 string `json:"city_id"`
}

type AlamatInput struct {
	IdPelanggan            int    `json:"id_pelanggan"`
	NamaPenerima           string `json:"nama_penerima"`
	Provinsi               string `json:"provinsi"`
	Kota                   string `json:"kota"`
	AlamatDetail           string `json:"alamat_detail"`
	NomorHandphonePenerima string `json:"nomor_handphone_penerima"`
	CityId                 string `json:"city_id"`
}
