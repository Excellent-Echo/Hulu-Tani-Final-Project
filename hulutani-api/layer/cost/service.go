package cost

import (
	"encoding/json"
	"fmt"
	"hulutani-api/entity"
	"io/ioutil"
	"net/http"
	"strings"
)

type Service interface {
	GetCost(destination string) (entity.Cost, error)
}

type service struct {
}

func NewService() *service {
	return &service{}
}

func (s *service) GetCost(destination string) (entity.Cost, error) {
	url := "https://api.rajaongkir.com/starter/cost"

	payload := fmt.Sprintf("origin=155&destination=%s&weight=1700&courier=jne", destination)
	payloadd := strings.NewReader(payload)

	req, err := http.NewRequest("POST", url, payloadd)

	if err != nil {
		return entity.Cost{}, err
	}

	req.Header.Add("key", "6cc3f705665734096df11de2a78b022a")
	req.Header.Add("content-type", "application/x-www-form-urlencoded")

	res, err := http.DefaultClient.Do(req)
	if err != nil {
		return entity.Cost{}, err
	}

	defer res.Body.Close()
	body, _ := ioutil.ReadAll(res.Body)

	var datas entity.Cost

	json.Unmarshal(body, &datas)
	// fmt.Println(res)
	// fmt.Println(string(body))
	fmt.Println(datas)
	return datas, nil
}
