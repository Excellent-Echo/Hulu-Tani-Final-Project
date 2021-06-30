package provinsi

import (
	"hulutani-api/entity"

	"gorm.io/gorm"
)

type Repository interface {
	FindAll() ([]entity.Provinsi, error)
	FindByID(id string) (entity.Provinsi, error)
}

type repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) FindAll() ([]entity.Provinsi, error) {
	var provinsi []entity.Provinsi

	if err := r.db.Find(&provinsi).Error; err != nil {
		return provinsi, err
	}
	return provinsi, nil
}

func (r *repository) FindByID(id string) (entity.Provinsi, error) {
	var provinsi entity.Provinsi

	if err := r.db.Where("province_id = ?", id).Find(&provinsi).Error; err != nil {
		return provinsi, err
	}

	return provinsi, nil
}
