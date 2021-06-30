package entity

type Kontak struct {
	ID             int    `gorm:"primarykey" json:"id"`
	Nama           string `json:"nama"`
	Alamat         string `json:"alamat"`
	JenisKelamin   string `json:"jenis_kelamin"`
	TanggalLahir   string `json:"tanggal_lahir"`
	NomorHandphone string `json:"nomor_handphone"`
}

type KontakInput struct {
	Nama           string `json:"nama"`
	Alamat         string `json:"alamat"`
	JenisKelamin   string `json:"jenis_kelamin"`
	TanggalLahir   string `json:"tanggal_lahir"`
	NomorHandphone string `json:"nomor_handphone"`
}