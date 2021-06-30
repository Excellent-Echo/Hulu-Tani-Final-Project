package detailtransaksi

import "hulutani-api/entity"

type Service interface {
	SaveNewDetail(input entity.DetailTransaksiInput) (entity.DetailTransaksi, error)
	ShowDetailByKodeTransaksi(kode string) (entity.DetailTransaksi, error)
}

type service struct {
	repo Repository
}

func NewService(repo Repository) *service {
	return &service{repo}
}

func (s *service) SaveNewDetail(input entity.DetailTransaksiInput) (entity.DetailTransaksi, error) {

	var detail = entity.DetailTransaksi{
		KodeTransaksi: input.KodeTransaksi,
		AlamatId:      input.AlamatId,
		KodeKeranjang: input.KodeKeranjang,
	}

	createDetail, err := s.repo.Create(detail)

	if err != nil {
		return createDetail, err
	}
	return createDetail, nil
}

func (s *service) ShowDetailByKodeTransaksi(kode string) (entity.DetailTransaksi, error) {
	detail, err := s.repo.FindByKodeTransaksi(kode)

	if err != nil {
		return detail, err
	}

	return detail, nil
}
