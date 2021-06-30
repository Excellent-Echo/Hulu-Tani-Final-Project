package keranjang

import (
	"errors"
	"fmt"
	"hulutani-api/entity"
	"strconv"
)

type Service interface {
	GetKeranjangByIdPelanggan(id string, kodeKeranjang string) (entity.KeranjangBelanja, error)
	SaveNewKeranjang(id int, input entity.KeranjangInput) (entity.KeranjangBelanja, error)
	DeleteKeranjang(kodeKeranjang string) (interface{}, error)
}

type service struct {
	repo Repository
}

func NewService(repo Repository) *service {
	return &service{repo}
}

func (s *service) GetKeranjangByIdPelanggan(id string, kodeKeranjang string) (entity.KeranjangBelanja, error) {
	keranjang, err := s.repo.FindKeranjangbyIdPelanggan(id, kodeKeranjang)

	if keranjang.IdKeranjang == 0 {
		return keranjang, err
	}

	if err != nil {
		return keranjang, err
	}

	return keranjang, nil
}

func (s *service) SaveNewKeranjang(idPelanggan int, input entity.KeranjangInput) (entity.KeranjangBelanja, error) {
	idProduk, _ := strconv.Atoi(input.IdProduk)
	quantity, _ := strconv.Atoi(input.Quantity)

	var keranjang = entity.KeranjangBelanja{
		IdProduk:      idProduk,
		Quantity:      quantity,
		IdPelanggan:   idPelanggan,
		KodeKeranjang: KodeFormat(idPelanggan),
	}

	createKeranjang, err := s.repo.Create(keranjang)

	if err != nil {
		return createKeranjang, err
	}
	return createKeranjang, nil
}

func (s *service) DeleteKeranjang(kodeKeranjang string) (interface{}, error) {

	keranjang, err := s.repo.FindKeranjangByKode(kodeKeranjang)

	if err != nil {
		return nil, err
	}
	if keranjang.IdKeranjang == 0 {
		newError := fmt.Sprintf("keranjang not found")
		return nil, errors.New(newError)
	}

	status, err := s.repo.DeleteKeranjang(kodeKeranjang)

	if status == "error" {
		return nil, errors.New("error delete in internal server")
	}

	msg := fmt.Sprintf("success delete keranjang")

	return msg, nil
}
