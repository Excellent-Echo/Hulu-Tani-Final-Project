package alamat

import (
	"hulutani-api/entity"

	"gorm.io/gorm"
)


type Repository interface {
	FindAlamatByAlamatId(id string) (entity.Alamat, error)
	Create(alamat entity.Alamat) (entity.Alamat, error)
}

type repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *repository  {
	return &repository{db}
}

func (r *repository) FindAlamatByAlamatId(id string) (entity.Alamat, error) {
	var alamat entity.Alamat

	if err := r.db.Where("id = ?", id).Find(&alamat).Error; err != nil {
		return alamat, err
	}

	return alamat, nil 
}

func (r *repository) Create(alamat entity.Alamat) (entity.Alamat, error) {
	if err := r.db.Create(&alamat).Error; err != nil {
		return alamat, err
	}
	return alamat, nil
}