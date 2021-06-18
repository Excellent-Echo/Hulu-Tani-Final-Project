package produk

import (
	"errors"
	"fmt"
	"hulutani-api/entity"
	"strconv"
)

type Service interface {
	GetAllProduk() ([]entity.Produk, error)
	GetProdukByName(nama string) (entity.Produk, error)
	SaveNewProduk(input entity.ProdukInput) (entity.Produk, error)
	UpdateProdukByID(id string, dataInput entity.ProdukInput) (entity.Produk, error)
	DeleteProdukByID(id string) (interface{}, error)
}

type service struct {
	repo Repository
}

func NewService(repo Repository) *service {
	return &service{repo}
}

func (s *service) GetAllProduk() ([]entity.Produk, error) {
	produk, err := s.repo.FindAll()

	if err != nil {
		return produk, err
	}
	return produk, nil
}

func (s *service) GetProdukByName(nama string) (entity.Produk, error) {
	produk, err := s.repo.FindByName(nama)

	if err != nil {
		return entity.Produk{}, err
	}

	if produk.ID == 0 {
		return entity.Produk{}, errors.New("produk not found")
	}

	return produk, nil
}

func (s *service) SaveNewProduk(input entity.ProdukInput) (entity.Produk, error) {

	var produk = entity.Produk{
		Nama:       input.Nama,
		Deskripsi:  input.Deskripsi,
		Gambar:     input.Gambar,
		Takaran:    input.Takaran,
		Harga:      input.Harga,
		Promo:      input.Promo,
		Stok:       input.Stok,
		IdKategori: input.IdKategori,
	}

	createProduk, err := s.repo.Create(produk)

	if err != nil {
		return createProduk, err
	}
	return createProduk, nil
}

func (s *service) UpdateProdukByID(id string, dataInput entity.ProdukInput) (entity.Produk, error) {
	var dataUpdate = map[string]interface{}{}

	produk, err := s.repo.FindByID(id)

	if err != nil {
		return entity.Produk{}, err
	}

	if produk.ID == 0 {
		return entity.Produk{}, errors.New("produk id not found")
	}

	if dataInput.Nama != "" || len(dataInput.Nama) != 0 {
		dataUpdate["nama"] = dataInput.Nama
	}
	if dataInput.Deskripsi != "" || len(dataInput.Deskripsi) != 0 {
		dataUpdate["deskripsi"] = dataInput.Deskripsi
	}
	if dataInput.Gambar != "" || len(dataInput.Gambar) != 0 {
		dataUpdate["gambar"] = dataInput.Gambar
	}
	if dataInput.Takaran != "" || len(dataInput.Takaran) != 0 {
		dataUpdate["takaran"] = dataInput.Takaran
	}
	if strconv.Itoa(dataInput.Harga) != "" || len(strconv.Itoa(dataInput.Harga)) != 0 {
		dataUpdate["harga"] = dataInput.Harga
	}
	if dataInput.Promo != "" || len(dataInput.Promo) != 0 {
		dataUpdate["promo"] = dataInput.Promo
	}
	if strconv.Itoa(dataInput.Stok) != "" || len(strconv.Itoa(dataInput.Stok)) != 0 {
		dataUpdate["stok"] = dataInput.Stok
	}
	if strconv.Itoa(dataInput.IdKategori) != "" || len(strconv.Itoa(dataInput.IdKategori)) != 0 {
		dataUpdate["id_kategori"] = dataInput.IdKategori
	}

	produkUpdated, err := s.repo.UpdateByID(id, dataUpdate)

	if err != nil {
		return entity.Produk{}, err
	}

	return produkUpdated, nil
}

func (s *service) DeleteProdukByID(id string) (interface{}, error) {

	produk, err := s.repo.FindByID(id)

	if err != nil {
		return nil, err
	}
	if produk.ID == 0 {
		newError := fmt.Sprintf("produk id %s not found", id)
		return nil, errors.New(newError)
	}

	status, err := s.repo.DeleteByID(id)

	if status == "error" {
		return nil, errors.New("error delete in internal server")
	}

	msg := fmt.Sprintf("success delete produk")

	return msg, nil
}
