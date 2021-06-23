package kota

import (
	"errors"
	"hulutani-api/entity"
)

type Service interface {
	GetAllKota() ([]entity.Kota, error)
	GetKotaByID(id string) (entity.Kota, error)
}

type service struct {
	repo Repository
}

func NewService(repo Repository) *service {
	return &service{repo}
}

func (s *service) GetAllKota() ([]entity.Kota, error) {
	kota, err := s.repo.FindAll()

	if err != nil {
		return kota, err
	}

	return kota, nil
}

func (s *service) GetKotaByID(id string) (entity.Kota, error) {
	kota, err := s.repo.FindByID(id)

	if err != nil {
		return entity.Kota{}, err
	}

	if kota.CityId == "" {
		return entity.Kota{}, errors.New("kota not found")
	}

	return kota, nil
}
