package alamat

import (
	"errors"
	"fmt"
	"hulutani-api/entity"
)


type Service interface {
	GetAlamatByPelangganId(id_pelanggan string) ([]entity.Alamat, error)
	GetAlamatByAlamatId(id string) (entity.Alamat, error)
	SaveNewAlamat(input entity.AlamatInput) (entity.Alamat, error)
	DeleteAlamatByAlamatId(id string) (entity.Alamat, error)
}

type service struct {
	repo Repository
}

func NewService(repo Repository) *service {
	return &service{repo}
}

func (s *service) GetAlamatByPelangganId(id_pelanggan string) ([]entity.Alamat, error) {
	alamat, err := s.repo.FindAlamatByPelangganId(id_pelanggan)

	if err != nil {
		return []entity.Alamat{}, err
	}
	
	/*if alamat.IdPelanggan == 0 {
		newError := fmt.Sprintf("pelanggan id %s not found", id_pelanggan)
		return []entity.Alamat{}, errors.New(newError)
	}*/

	return alamat, nil

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

func (s *service) SaveNewAlamat(input entity.AlamatInput) (entity.Alamat, error) {

	var alamat = entity.Alamat{  
		IdPelanggan:     		input.IdPelanggan,      
		NamaPenerima:    		input.NamaPenerima,    
		Provinsi:        		input.Provinsi,   
		Kota:            		input.Kota,   
		AlamatDetail:    		input.AlamatDetail,   
		NomorHandphonePenerima: input.NomorHandphonePenerima,
	}

	createAlamat, err := s.repo.Create(alamat)

	if err != nil {
		return createAlamat, err
	}
	return createAlamat, nil
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

	statusDelete, err :=  s.repo.DeleteByID(id)

	if statusDelete == "error" {
		return nil, errors.New("error deleted in internal server")
	}

	message := fmt.Sprintf("success delete address")
	return message, nil
}