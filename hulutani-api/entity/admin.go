package entity

type Admin struct {
	ID       int    `gorm:"Primarykey" json:"id"`
	Nama     string `json:"nama"`
	Email    string `gorm:"unique, email" json:"email"`
	Role     int    `json:"role"`
	Password string `gorm:"password" json:"-"`
}

type AdminRegister struct {
	Nama     string `json:"nama"`
	Email    string `gorm:"unique, email" json:"email"`
	Password string `gorm:"password" json:"password"`
}

type AdminLogin struct {
	Email    string `json:"email"`
	Password string `json:"password"`
}
