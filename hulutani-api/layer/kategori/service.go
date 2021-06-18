package kategori

import (
	"errors"
	"fmt"
	"hulutani-api/entity"
)

type Service interface {
	GetAllKategori() ([]entity.Kategori, error)
	GetKategoriByID(ID string) (entity.Kategori, error)
	SaveNewKategori(input entity.KategoriInput) (entity.Kategori, error)
	UpdateKategoriByID(id string, dataInput entity.KategoriInput) (entity.Kategori, error)
	DeleteKategoriByID(id string) (interface{}, error)
}

type service struct {
	repo Repository
}

func NewService(repo Repository) *service {
	return &service{repo}
}

func (s *service) GetAllKategori() ([]entity.Kategori, error) {
	kategori, err := s.repo.FindAll()

	if err != nil {
		return kategori, err
	}
	return kategori, nil
}

func (s *service) GetKategoriByID(ID string) (entity.Kategori, error) {
	kategori, err := s.repo.FindByID(ID)

	if err != nil {
		return entity.Kategori{}, err
	}

	if kategori.ID == 0 {
		return entity.Kategori{}, errors.New("kategori id not found")
	}

	return kategori, nil
}

func (s *service) SaveNewKategori(input entity.KategoriInput) (entity.Kategori, error) {

	var kategori = entity.Kategori{
		Nama: input.Nama,
	}

	createJob, err := s.repo.Create(kategori)

	if err != nil {
		return createJob, err
	}
	return createJob, nil
}

func (s *service) UpdateKategoriByID(id string, dataInput entity.KategoriInput) (entity.Kategori, error) {
	var dataUpdate = map[string]interface{}{}

	kategori, err := s.repo.FindByID(id)

	if err != nil {
		return entity.Kategori{}, err
	}

	if kategori.ID == 0 {
		return entity.Kategori{}, errors.New("kategori id not found")
	}

	if dataInput.Nama != "" || len(dataInput.Nama) != 0 {
		dataUpdate["nama"] = dataInput.Nama
	}

	kategoriUpdated, err := s.repo.UpdateByID(id, dataUpdate)

	if err != nil {
		return entity.Kategori{}, err
	}

	return kategoriUpdated, nil
}

func (s *service) DeleteKategoriByID(id string) (interface{}, error) {

	kategori, err := s.repo.FindByID(id)

	if err != nil {
		return nil, err
	}
	if kategori.ID == 0 {
		newError := fmt.Sprintf("kategori id %s not found", id)
		return nil, errors.New(newError)
	}

	status, err := s.repo.DeleteByID(id)

	if status == "error" {
		return nil, errors.New("error delete in internal server")
	}

	msg := fmt.Sprintf("success delete kategori")

	return msg, nil
}