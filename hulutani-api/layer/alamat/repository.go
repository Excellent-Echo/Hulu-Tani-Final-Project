package alamat

import (
	"hulutani-api/entity"

	"gorm.io/gorm"
)


type Repository interface {
	FindAlamatByPelangganId(id_pelanggan string) ([]entity.Alamat, error)
	FindAlamatByAlamatId(id string) (entity.Alamat, error)
	Create(alamat entity.Alamat) (entity.Alamat, error)
	UpdateByID(id string, dataUpdate map[string]interface{}) (entity.Alamat, error)
	DeleteByID(id string) (interface{}, error)
}

type repository struct {
	db *gorm.DB
}

func NewRepository(db *gorm.DB) *repository  {
	return &repository{db}
}

func (r *repository) FindAlamatByPelangganId(id_pelanggan string) ([]entity.Alamat, error) {
	var alamats []entity.Alamat

	if err := r.db.Where("id_pelanggan = ?", id_pelanggan).Find(&alamats).Error; err != nil {
		return alamats, err
	}

	return alamats, nil
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


func (r *repository) DeleteByID(id string) (interface{}, error) {
	if err := r.db.Where("id = ?", id).Delete(&entity.Alamat{}).Error; err != nil {
		return "error", err
	}

	statusDelete := "address has been deleted"
	return statusDelete, nil
}