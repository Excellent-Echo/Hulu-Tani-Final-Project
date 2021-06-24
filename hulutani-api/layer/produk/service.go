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
	GetProdukById(id string) (entity.Produk, error)
	GetProdukByHarga(harga entity.Harga) ([]entity.Produk, error)
	SaveNewProduk(input entity.ProdukInput) (entity.Produk, error)
	UpdateProdukByID(id string, dataInput entity.ProdukInput) (entity.Produk, error)
	DeleteProdukByID(id string) (interface{}, error)
}

type service struct {
	repo Repository
	// kategoriRepo kategori.Repository
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

func (s *service) GetProdukById(id string) (entity.Produk, error) {
	produk, err := s.repo.FindByID(id)

	if err != nil {
		return entity.Produk{}, err
	}

	if produk.ID == 0 {
		return entity.Produk{}, errors.New("produk not found")
	}

	return produk, nil
}

func (s *service) SaveNewProduk(input entity.ProdukInput) (entity.Produk, error) {
	harga, _ := strconv.Atoi(input.Harga)
	stok, _ := strconv.Atoi(input.Stok)
	idKategori, _ := strconv.Atoi(input.IdKategori)

	var produk = entity.Produk{
		Nama:       input.Nama,
		Deskripsi:  input.Deskripsi,
		Gambar:     input.Gambar,
		Takaran:    input.Takaran,
		Harga:      harga,
		Promo:      input.Promo,
		Stok:       stok,
		IdKategori: idKategori,
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

	harga, _ := strconv.Atoi(dataInput.Harga)
	stok, _ := strconv.Atoi(dataInput.Stok)
	idKategori, _ := strconv.Atoi(dataInput.IdKategori)

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
	if dataInput.Harga != "" || len(dataInput.Harga) != 0 {
		dataUpdate["harga"] = harga
	}
	if dataInput.Promo != "" || len(dataInput.Promo) != 0 {
		dataUpdate["promo"] = dataInput.Promo
	}
	if dataInput.Stok != "" || len(dataInput.Stok) != 0 {
		dataUpdate["stok"] = stok
	}
	if dataInput.IdKategori != "" || len(dataInput.IdKategori) != 0 {
		dataUpdate["id_kategori"] = idKategori
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

func (s *service) GetProdukByHarga(harga entity.Harga) ([]entity.Produk, error) {
	produk, err := s.repo.FindByHarga(harga)

	if err != nil {
		return []entity.Produk{}, err
	}

	return produk, nil
}
