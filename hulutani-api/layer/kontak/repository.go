package kontak

import (
	"hulutani-api/entity"

	"gorm.io/gorm"
)


type Repository interface {
	FindAll() ([]entity.Kontak, error)
	Create(kontak entity.Kontak) (entity.Kontak, error)
}

type repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) FindAll() ([]entity.Kontak, error) {
	var kontak []entity.Kontak

	if err := r.db.Find(&kontak).Error; err != nil {
		return kontak, err
	}

	return kontak, nil
}

func (r *repository) Create(kontak entity.Kontak) (entity.Kontak, error) {
	if err := r.db.Create(&kontak).Error; err != nil {
		return kontak, err
	}

	return kontak, nil
}