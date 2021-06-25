package admin

import (
	"hulutani-api/entity"

	"gorm.io/gorm"
)


type Repository interface {
	FindByEmail(email string) (entity.Admin, error)
}

type repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) FindByEmail(email string) (entity.Admin, error) {
	var admin entity.Admin

	if err := r.db.Where("email = ?", email).Find(&admin).Error; err != nil {
		return admin, err
	}

	return admin, nil
}