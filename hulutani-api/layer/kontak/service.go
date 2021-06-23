package kontak

import "hulutani-api/entity"

type Service interface {
	GetAllKontak() ([]entity.Kontak, error)
	SaveNewKontak(input entity.KontakInput) (entity.Kontak, error)
}

type service struct{
	repo Repository
}

func NewKontakService(repo Repository) *service{
	return &service{repo}
}

func (s *service) GetAllKontak() ([]entity.Kontak, error) {
	kontak, err := s.repo.FindAll()

	if err != nil {
		return kontak, err
	}

	return kontak, nil
}

func (s *service) SaveNewKontak(input entity.KontakInput) (entity.Kontak, error) {
	var newKontak = entity.Kontak{
		Nama           : input.Nama,
		Alamat         : input.Alamat,
		JenisKelamin   : input.JenisKelamin,
		TanggalLahir   : input.TanggalLahir,
		NomorHandphone : input.NomorHandphone,
	}

	createKontak, err := s.repo.Create(newKontak)

	if err != nil {
		return createKontak, err
	}

	return createKontak, nil
}