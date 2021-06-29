package alamat

import (
	"errors"
	"fmt"
	"hulutani-api/entity"
)

type Service interface {
	GetAlamatByPelangganId(id_pelanggan string) ([]entity.Alamat, error)
	GetAlamatByAlamatId(id string) (entity.Alamat, error)
	SaveNewAlamat(id int, input entity.AlamatInput) (entity.Alamat, error)
	UpdateAlamatByAlamatId(id string, dataInput entity.AlamatInput) (entity.Alamat, error)
	DeleteAlamatByAlamatId(id string) (interface{}, error)
}

type service struct {
	repo Repository
}

func NewService(repo Repository) *service {
	return &service{repo}
}

func (s *service) GetAlamatByPelangganId(id_pelanggan string) ([]entity.Alamat, error) {
	alamats, err := s.repo.FindAlamatByPelangganId(id_pelanggan)

	if err != nil {
		return []entity.Alamat{}, err
	}

	return alamats, nil
}

func (s *service) GetAlamatByAlamatId(id string) (entity.Alamat, error) {
	alamat, err := s.repo.FindAlamatByAlamatId(id)

	if err != nil {
		return entity.Alamat{}, err
	}

	if alamat.ID == 0 {
		newError := fmt.Sprintf("alamat id %s not found", id)
		return entity.Alamat{}, errors.New(newError)
	}

	return alamat, nil
}

func (s *service) SaveNewAlamat(id int, input entity.AlamatInput) (entity.Alamat, error) {

	var alamat = entity.Alamat{
		IdPelanggan:            id,
		NamaPenerima:           input.NamaPenerima,
		Provinsi:               input.Provinsi,
		Kota:                   input.Kota,
		AlamatDetail:           input.AlamatDetail,
		NomorHandphonePenerima: input.NomorHandphonePenerima,
		CityId:                 input.CityId,
	}

	createAlamat, err := s.repo.Create(alamat)

	if err != nil {
		return createAlamat, err
	}
	return createAlamat, nil
}

func (s *service) UpdateAlamatByAlamatId(id string, dataInputUpdate entity.AlamatInput) (entity.Alamat, error) {
	var dataUpdate = map[string]interface{}{}

	alamat, err := s.repo.FindAlamatByAlamatId(id)

	if err != nil {
		return entity.Alamat{}, nil
	}

	if alamat.ID == 0 {
		return entity.Alamat{}, errors.New("address id not found")
	}

	if dataInputUpdate.NamaPenerima != "" || len(dataInputUpdate.NamaPenerima) <= 0 {
		dataUpdate["provinsi"] = dataInputUpdate.Provinsi
	}

	if dataInputUpdate.NamaPenerima != "" || len(dataInputUpdate.NamaPenerima) <= 0 {
		dataUpdate["nama_penerima"] = dataInputUpdate.Kota
	}

	if dataInputUpdate.NamaPenerima != "" || len(dataInputUpdate.NamaPenerima) <= 0 {
		dataUpdate["nama_penerima"] = dataInputUpdate.AlamatDetail
	}

	if dataInputUpdate.NamaPenerima != "" || len(dataInputUpdate.NamaPenerima) <= 0 {
		dataUpdate["nama_penerima"] = dataInputUpdate.NomorHandphonePenerima
	}

	if dataInputUpdate.CityId != "" || len(dataInputUpdate.CityId) <= 0 {
		dataUpdate["nama_penerima"] = dataInputUpdate.CityId
	}

	alamatUpdated, err := s.repo.UpdateByID(id, dataUpdate)

	if err != nil {
		return entity.Alamat{}, err
	}

	return alamatUpdated, nil
}

func (s *service) DeleteAlamatByAlamatId(id string) (interface{}, error) {
	alamat, err := s.repo.FindAlamatByAlamatId(id)

	if err != nil {
		return nil, err
	}

	if alamat.ID == 0 {
		newError := fmt.Sprintf("alamat id %s not found", id)
		return nil, errors.New(newError)
	}

	statusDelete, err := s.repo.DeleteByID(id)

	if statusDelete == "error" {
		return nil, errors.New("error deleted in internal server")
	}

	message := fmt.Sprintf("success delete address")
	return message, nil
}
