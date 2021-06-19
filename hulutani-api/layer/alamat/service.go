package alamat

import (
	"errors"
	"fmt"
	"hulutani-api/entity"
)


type Service interface {
	GetAlamatByAlamatId(ID string) (entity.Alamat, error)
	SaveNewAlamat(input entity.AlamatInput) (entity.Alamat, error)
}

type service struct {
	repo Repository
}

func NewService(repo Repository) *service {
	return &service{repo}
}

func (s *service) GetAlamatByAlamatId(ID string) (entity.Alamat, error) {
	alamat, err := s.repo.FindAlamatByAlamatId(ID)

	if err != nil {
		return entity.Alamat{}, err
	}

	if alamat.ID == 0 {
		newError := fmt.Sprintf("alamat id %s not found", ID)
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