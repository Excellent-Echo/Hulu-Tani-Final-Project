package kategori

import (
	"hulutani-api/entity"

	"gorm.io/gorm"
)

type Repository interface {
	FindAll() ([]entity.Kategori, error)
	FindByID(ID string) (entity.Kategori, error)
	Create(kategori entity.Kategori) (entity.Kategori, error)
	UpdateByID(id string, dataUpdate map[string]interface{}) (entity.Kategori, error)
	DeleteByID(id string) (interface{}, error)
}

type repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) FindAll() ([]entity.Kategori, error) {
	var kategori []entity.Kategori

	if err := r.db.Find(&kategori).Error; err != nil {
		return kategori, err
	}
	return kategori, nil
}

func (r *repository) FindByID(ID string) (entity.Kategori, error) {
	var kategori entity.Kategori

	if err := r.db.Where("id = ?", ID).Find(&kategori).Error; err != nil {
		return kategori, err
	}

	return kategori, nil
}

func (r *repository) Create(kategori entity.Kategori) (entity.Kategori, error) {
	if err := r.db.Create(&kategori).Error; err != nil {
		return kategori, err
	}
	return kategori, nil
}

func (r *repository) UpdateByID(id string, dataUpdate map[string]interface{}) (entity.Kategori, error) {
	var kategori entity.Kategori

	if err := r.db.Where("id = ?", id).Find(&kategori).Error; err != nil {
		return kategori, err
	}

	if err := r.db.Model(&kategori).Where("id = ?", id).Updates(dataUpdate).Error; err != nil {
		return kategori, err
	}

	return kategori, nil
}

func (r *repository) DeleteByID(id string) (interface{}, error) {
	if err := r.db.Where("id = ?", id).Delete(&entity.Kategori{}).Error; err != nil {
		return "error", err
	}

	status := "kategori success deleted"

	return status, nil
}
