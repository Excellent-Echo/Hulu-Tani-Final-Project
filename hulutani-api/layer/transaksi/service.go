package transaksi

import (
	"errors"
	"fmt"
	"hulutani-api/entity"
	"hulutani-api/layer/keranjang"
)

type Service interface {
	GetAllTransaksi(idPelanggan string) ([]entity.Transaksi, error)
	SaveNewTransaksi(delete interface{}, idPelanggan int, input entity.TransaksiInput) (interface{}, entity.Transaksi, error)
	GetTransaksiByKode(kodeTransaksi string) (entity.Transaksi, error)
	UpdateKategoriByKode(kodeTransaksi string, dataInput entity.TransaksiInput) (entity.Transaksi, error)
}

type service struct {
	repo          Repository
	keranjangRepo keranjang.Repository
}

func NewService(repo Repository, keranjangRepo keranjang.Repository) *service {
	return &service{repo, keranjangRepo}
}

func (s *service) GetAllTransaksi(idPelanggan string) ([]entity.Transaksi, error) {
	transaksi, err := s.repo.FindAll(idPelanggan)

	if err != nil {
		return transaksi, err
	}

	return transaksi, nil
}

func (s *service) SaveNewTransaksi(delete interface{}, idPelanggan int, input entity.TransaksiInput) (interface{}, entity.Transaksi, error) {

	var transaksi = entity.Transaksi{
		Status:           input.Status,
		MetodePembayaran: input.MetodePembayaran,
		TotalPembayaran:  input.TotalPembayaran,
		TanggalTransaksi: input.TanggalTransaksi,
		KodeKeranjang:    input.KodeKeranjang,
		IdPelanggan:      idPelanggan,
	}

	createTransaksi, err := s.repo.Create(transaksi)

	deleteKeranjang, err := s.keranjangRepo.DeleteKeranjang(fmt.Sprint(transaksi.KodeKeranjang))

	if err != nil {
		return deleteKeranjang, createTransaksi, err
	}
	return deleteKeranjang, createTransaksi, nil
}

func (s *service) GetTransaksiByKode(kodeTransaksi string) (entity.Transaksi, error) {
	transaksi, err := s.repo.FindByKode(kodeTransaksi)

	if transaksi.KodeTransaksi == 0 {
		return transaksi, errors.New("transaksi not found")
	}

	if err != nil {
		return transaksi, err
	}

	return transaksi, nil
}

func (s *service) UpdateKategoriByKode(kodeTransaksi string, dataInput entity.TransaksiInput) (entity.Transaksi, error) {
	var dataUpdate = map[string]interface{}{}

	transaksi, err := s.repo.FindByKode(kodeTransaksi)

	if err != nil {
		return entity.Transaksi{}, err
	}

	if transaksi.KodeKeranjang == 0 {
		return entity.Transaksi{}, errors.New("transaksi not found")
	}

	if dataInput.Status != "" || len(dataInput.Status) != 0 {
		dataUpdate["status"] = dataInput.Status
	}

	transaksiUpdated, err := s.repo.UpdateByKode(kodeTransaksi, dataUpdate)

	if err != nil {
		return entity.Transaksi{}, err
	}

	return transaksiUpdated, nil
}
