package entity

type Pelanggan struct {
	ID             int    `gorm:"Primarykey" json:"id"`
	Nama           string `json:"nama"`
	TanggalLahir   string `json:"tanggal_lahir"`
	NomorHandphone string `json:"nomor_handphone"`
	JenisKelamin   string `json:"jenis_kelamin"`
	Profil         string `json:"profil"`
	Email          string `gorm:"unique, email" json:"email"`
	Password       string `gorm:"password" json:"-"`
}

type PelangganInput struct {
	Nama           string `json:"nama" binding:"required"`
	TanggalLahir   string `json:"tanggal_lahir" binding:"required"`
	NomorHandphone string `json:"nomor_handphone" binding:"required"`
	JenisKelamin   string `json:"jenis_kelamin" binding:"required"`
	Email          string `gorm:"unique, email" json:"email" binding:"required"`
	Password       string `gorm:"password" json:"password" binding:"required"`
}

type PelangganLogin struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}
