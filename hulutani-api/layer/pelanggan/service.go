package pelanggan

import (
	"errors"
	"fmt"
	"hulutani-api/entity"

	"golang.org/x/crypto/bcrypt"
)

type Service interface {
	GetPelangganById(id string) (entity.Pelanggan, error)
	SaveNewPelanggan(pelanggan entity.PelangganInput) (entity.Pelanggan, error)
	LoginPelanggan(input entity.PelangganLogin) (entity.Pelanggan, error)
}

type service struct {
	repo Repository
}

func NewService(repo Repository) *service {
	return &service{repo}
}

func (s *service) GetPelangganById(id string) (entity.Pelanggan, error) {
	pelanggan, err := s.repo.FindPelangganById(id)

	if err != nil {
		return entity.Pelanggan{}, err
	}

	if pelanggan.ID == 0 {
		newError := fmt.Sprintf("pelanggan id %s not found", id)
		return entity.Pelanggan{}, errors.New(newError)
	}

	return pelanggan, nil
}

func (s *service) SaveNewPelanggan(pelanggan entity.PelangganInput) (entity.Pelanggan, error) {
	genPassword, err := bcrypt.GenerateFromPassword([]byte(pelanggan.Password), bcrypt.MinCost)

	if err != nil {
		return entity.Pelanggan{}, err
	}

	var newPelanggan = entity.Pelanggan{
		Nama:           pelanggan.Nama,
		TanggalLahir:   pelanggan.TanggalLahir,
		NomorHandphone: pelanggan.NomorHandphone,
		JenisKelamin:   pelanggan.JenisKelamin,
		Profil:         "-",
		Email:          pelanggan.Email,
		Password:       string(genPassword),
	}

	createPelanggan, err := s.repo.Create(newPelanggan)

	return createPelanggan, nil
}

func (s *service) LoginPelanggan(input entity.PelangganLogin) (entity.Pelanggan, error) {
	pelanggan, err := s.repo.FindByEmail(input.Email)

	if err != nil {
		return pelanggan, err
	}

	if pelanggan.ID == 0 {
		newError := fmt.Sprintf("pelanggan id %v not found", pelanggan.ID)
		return pelanggan, errors.New(newError)
	}

	// pengecekan password
	if err := bcrypt.CompareHashAndPassword([]byte(pelanggan.Password), []byte(input.Password)); err != nil {
		return pelanggan, errors.New("password invalid")
	}

	return pelanggan, nil
}
