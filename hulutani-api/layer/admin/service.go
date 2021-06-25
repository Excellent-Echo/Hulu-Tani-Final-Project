package admin

import (
	"errors"
	"fmt"
	"hulutani-api/entity"

	"golang.org/x/crypto/bcrypt"
)


type Service interface {
	LoginAdmin(input entity.AdminLogin) (entity.Admin, error)
}

type service struct {
	repository Repository
}

func NewService(repository Repository) *service {
	return &service{repository}
}

func (s *service) LoginAdmin(input entity.AdminLogin) (entity.Admin, error) {
	admin, err := s.repository.FindByEmail(input.Email)

	if err != nil {
		return admin, err
	}

	if admin.ID == 0 {
		newErr := fmt.Sprintf("admin ID %v not found", admin.ID)
		return admin, errors.New(newErr)
	}

	// pass hashing check
	if err := bcrypt.CompareHashAndPassword([]byte(admin.Password), []byte(input.Password)); err != nil {
		return admin, errors.New("password invalid")
	}

	return admin, nil
}