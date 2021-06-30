package kota

import (
	"hulutani-api/entity"

	"gorm.io/gorm"
)

type Repository interface {
	FindAll() ([]entity.Kota, error)
	FindByID(id string) (entity.Kota, error)
}

type repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) FindAll() ([]entity.Kota, error) {
	var kota []entity.Kota

	if err := r.db.Find(&kota).Error; err != nil {
		return kota, err
	}

	return kota, nil
}

func (r *repository) FindByID(id string) (entity.Kota, error) {
	var kota entity.Kota

	if err := r.db.Where("city_id = ?", id).Find(&kota).Error; err != nil {
		return kota, err
	}

	return kota, nil
}
