package pelanggan

import (
	"hulutani-api/entity"

	"gorm.io/gorm"
)

type Repository interface {
	FindPelangganById(id string) (entity.Pelanggan, error)
	Create(pelanggan entity.Pelanggan) (entity.Pelanggan, error)
	FindByEmail(email string) (entity.Pelanggan, error)
}

type repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) FindPelangganById(id string) (entity.Pelanggan, error) {
	var pelanggan entity.Pelanggan

	if err := r.db.Where("id = ?", id).Find(&pelanggan).Error; err != nil {
		return pelanggan, err
	}

	return pelanggan, nil
}

func (r *repository) Create(pelanggan entity.Pelanggan) (entity.Pelanggan, error) {
	if err := r.db.Create(&pelanggan).Error; err != nil {
		return pelanggan, err
	}

	return pelanggan, nil
}

func (r *repository) FindByEmail(email string) (entity.Pelanggan, error) {
	var pelanggan entity.Pelanggan

	if err := r.db.Where("email = ?", email).Find(&pelanggan).Error; err != nil {
		return pelanggan, err
	}

	return pelanggan, nil
}
