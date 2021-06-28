package transaksi

import (
	"errors"
	"hulutani-api/entity"
	"time"
)

type Service interface {
	GetAllTransaki() ([]entity.Transaksi, error)
	GetAllTransaksiById(idPelanggan string) ([]entity.Transaksi, error)
	SaveNewTransaksi(idPelanggan int, input entity.TransaksiInput) (entity.Transaksi, error)
	SaveNewProdukTransaksi(input entity.ProdukTransaksi) (entity.ProdukTransaksi, error)
	GetTransaksiByKode(kodeTransaksi string) (entity.Transaksi, error)
	UpdateBuktiTransfer(kodeTransaksi string, dataInput entity.UploadBuktiTransfer) (entity.Transaksi, error)
	UpdateStatusByKode(kodeTransaksi string, dataInput entity.UpdateStatus) (entity.Transaksi, error)
}

type service struct {
	repo Repository
}

func NewService(repo Repository) *service {
	return &service{repo}
}

func (s *service) GetAllTransaki() ([]entity.Transaksi, error) {
	transaksi, err := s.repo.FindAllTransaksi()

	if err != nil {
		return transaksi, err
	}

	return transaksi, nil
}

func (s *service) GetAllTransaksiById(idPelanggan string) ([]entity.Transaksi, error) {
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
		IdAlamat:         input.IdAlamat,
		IdPelanggan:      idPelanggan,
		Harga:            input.Harga,
		Quantity:         input.Quantity,
		KodeTransaksi:    KodeFormat(idPelanggan),
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

func (s *service) UpdateBuktiTransfer(kodeTransaksi string, dataInput entity.UploadBuktiTransfer) (entity.Transaksi, error) {
	var dataUpdate = map[string]interface{}{}

	if dataInput.BuktiTransfer != "" || len(dataInput.BuktiTransfer) != 0 {
		dataUpdate["bukti_transfer"] = dataInput.BuktiTransfer
	}

	transaksiUpdated, err := s.repo.UpdateByKode(kodeTransaksi, dataUpdate)

	if err != nil {
		return entity.Transaksi{}, err
	}

	return transaksiUpdated, nil
}

func (s *service) UpdateStatusByKode(kodeTransaksi string, dataInput entity.UpdateStatus) (entity.Transaksi, error) {
	var dataUpdate = map[string]interface{}{}

	if dataInput.Status != "" || len(dataInput.Status) != 0 {
		dataUpdate["status"] = dataInput.Status
	}

	transaksiUpdated, err := s.repo.UpdateByKode(kodeTransaksi, dataUpdate)

	if err != nil {
		return entity.Transaksi{}, err
	}

	return transaksiUpdated, nil
}
