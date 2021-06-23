package provinsi

import (
	"errors"
	"hulutani-api/entity"
)

type Service interface {
	GetAllProvinsi() ([]entity.Provinsi, error)
	GetProvinsiByID(id string) (entity.Provinsi, error)
}

type service struct {
	repo Repository
}

func NewService(repo Repository) *service {
	return &service{repo}
}

func (s *service) GetAllProvinsi() ([]entity.Provinsi, error) {
	provinsi, err := s.repo.FindAll()

	if err != nil {
		return provinsi, err
	}

	return provinsi, nil
}

func (s *service) GetProvinsiByID(id string) (entity.Provinsi, error) {
	provinsi, err := s.repo.FindByID(id)

	if err != nil {
		return entity.Provinsi{}, err
	}

	if provinsi.ProvinceId == "" {
		return entity.Provinsi{}, errors.New("provinsi not found")
	}

	return provinsi, nil
}
