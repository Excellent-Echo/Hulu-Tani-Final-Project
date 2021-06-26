package transaksi

import (
	"errors"
	"hulutani-api/entity"
	"time"
)

type Service interface {
	GetAllTransaksi(idPelanggan string) ([]entity.Transaksi, error)
	SaveNewTransaksi(idPelanggan int, input entity.TransaksiInput) (entity.Transaksi, error)
	SaveNewProdukTransaksi(input entity.ProdukTransaksi) (entity.ProdukTransaksi, error)
	GetTransaksiByKode(kodeTransaksi string) (entity.Transaksi, error)
	UpdateKategoriByKode(kodeTransaksi string, dataInput entity.TransaksiInput) (entity.Transaksi, error)
}

type service struct {
	repo Repository
}

func NewService(repo Repository) *service {
	return &service{repo}
}

func (s *service) GetAllTransaksi(idPelanggan string) ([]entity.Transaksi, error) {
	transaksi, err := s.repo.FindAll(idPelanggan)

	if err != nil {
		return transaksi, err
	}

	return transaksi, nil
}

func (s *service) SaveNewTransaksi(idPelanggan int, input entity.TransaksiInput) (entity.Transaksi, error) {

	var transaksi = entity.Transaksi{
		Status:           input.Status,
		Tanggal:          time.Now(),
		MetodePembayaran: input.MetodePembayaran,
		IdProduk:         input.IdProduk,
		Produk:           input.Produk,
		IdPelanggan:      idPelanggan,
		Harga:            input.Harga,
		Quantity:         input.Quantity,
		KodeTransaksi:    input.KodeTransaksi,
	}

	createTransaksi, err := s.repo.Create(transaksi)

	if err != nil {
		return createTransaksi, err
	}
	return createTransaksi, nil
}

func (s *service) SaveNewProdukTransaksi(input entity.ProdukTransaksi) (entity.ProdukTransaksi, error) {

	var produkTransaksi = entity.ProdukTransaksi{
		IdTransaksi: input.IdTransaksi,
		IdProduk:    input.IdProduk,
	}

	CreateProdukTransaksi, err := s.repo.CreateProdukTransaksi(produkTransaksi)

	if err != nil {
		return CreateProdukTransaksi, err
	}
	return CreateProdukTransaksi, nil
}

func (s *service) GetTransaksiByKode(kodeTransaksi string) (entity.Transaksi, error) {
	transaksi, err := s.repo.FindByKode(kodeTransaksi)

	if transaksi.KodeTransaksi == "" {
		return transaksi, errors.New("transaksi not found")
	}

	if err != nil {
		return transaksi, err
	}

	return transaksi, nil
}

func (s *service) UpdateKategoriByKode(kodeTransaksi string, dataInput entity.TransaksiInput) (entity.Transaksi, error) {
	var dataUpdate = map[string]interface{}{}

	// transaksi, err := s.repo.FindByKode(kodeTransaksi)

	// if err != nil {
	// 	return entity.Transaksi{}, err
	// }

	// if transaksi.KodeKeranjang == 0 {
	// 	return entity.Transaksi{}, errors.New("transaksi not found")
	// }

	if dataInput.Status != "" || len(dataInput.Status) != 0 {
		dataUpdate["status"] = dataInput.Status
	}

	transaksiUpdated, err := s.repo.UpdateByKode(kodeTransaksi, dataUpdate)

	if err != nil {
		return entity.Transaksi{}, err
	}

	return transaksiUpdated, nil
}
