package produk

import (
	"hulutani-api/entity"

	"gorm.io/gorm"
)

type Repository interface {
	FindAll() ([]entity.Produk, error)
	FindByName(nama string) (entity.Produk, error)
	FindByID(id string) (entity.Produk, error)
	Create(produk entity.Produk) (entity.Produk, error)
	UpdateByID(id string, dataUpdate map[string]interface{}) (entity.Produk, error)
	DeleteByID(id string) (interface{}, error)
}

type repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *repository {
	return &repository{db}
}

func (r *repository) FindAll() ([]entity.Produk, error) {
	var produk []entity.Produk

	if err := r.db.Find(&produk).Error; err != nil {
		return produk, err
	}
	return produk, nil
}

func (r *repository) FindByName(nama string) (entity.Produk, error) {
	var produk entity.Produk

	if err := r.db.Where("nama = ?", nama).Find(&produk).Error; err != nil {
		return produk, err
	}

	return produk, nil
}

func (r *repository) FindByID(id string) (entity.Produk, error) {
	var produk entity.Produk

	if err := r.db.Where("id = ?", id).Find(&produk).Error; err != nil {
		return produk, err
	}

	return produk, nil
}
func (r *repository) Create(produk entity.Produk) (entity.Produk, error) {
	if err := r.db.Create(&produk).Error; err != nil {
		return produk, err
	}
	return produk, nil
}

func (r *repository) UpdateByID(id string, dataUpdate map[string]interface{}) (entity.Produk, error) {
	var produk entity.Produk

	if err := r.db.Where("id = ?", id).Find(&produk).Error; err != nil {
		return produk, err
	}

	if err := r.db.Model(&produk).Where("id = ?", id).Updates(dataUpdate).Error; err != nil {
		return produk, err
	}

	return produk, nil
}

func (r *repository) DeleteByID(id string) (interface{}, error) {
	if err := r.db.Where("id = ?", id).Delete(&entity.Produk{}).Error; err != nil {
		return "error", err
	}

	status := "produk success deleted"

	return status, nil
}
