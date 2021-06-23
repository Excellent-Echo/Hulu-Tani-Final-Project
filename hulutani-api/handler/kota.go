package handler

import (
	"encoding/json"
	"fmt"
	"hulutani-api/entity"
	"hulutani-api/helper"
	"hulutani-api/layer/kota"
	"io/ioutil"
	"net/http"

	"github.com/gin-gonic/gin"
)

type kotaHandler struct {
	service kota.Service
}

func NewKotaHandler(service kota.Service) *kotaHandler {
	return &kotaHandler{service}
}

func FetchDataKota() entity.RajaOngkirKota {
	client := &http.Client{}

	req, err := http.NewRequest("GET", "https://api.rajaongkir.com/starter/city", nil)
	req.Header.Add("key", "6cc3f705665734096df11de2a78b022a")

	if err != nil {
		panic(err)
	}

	resp, err := client.Do(req)
	if err != nil {
		panic(err)
	}

	byteData, err := ioutil.ReadAll(resp.Body)
	fmt.Println(resp.Body)

	if err != nil {
		panic(err)
	}
	// fmt.Println(byteData)
	var datas entity.RajaOngkirKota

	json.Unmarshal(byteData, &datas)
	// fmt.Println(datas)
	return datas

}

func StoreKotaDB() {
	db, err := connect()

	if err != nil {
		fmt.Println(err.Error())
		return
	}
	defer db.Close()

	datas := FetchDataKota()

	for _, data := range datas.Rajaongkir.Kota {
		_, err := db.Exec("insert into kota (city_id, province_id, province, type, city_name, postal_code) values(?, ?, ?, ?, ?, ?)", data.CityId, data.ProvinceId, data.Province, data.Type, data.CityName, data.PostalCode)
		if err != nil {
			continue
		}
		fmt.Println(data)
		fmt.Println("insert success")
	}

}

// GetAllKota godoc
// @Summary Get all Kota data
// @Description Get all Kota data
// @Tags Kota
// @Accept json
// @Produce json
// @Success 200 {object} helper.Response
// @Failure 500 {object} helper.Failure
// @Router /kota [get]
func (h *kotaHandler) ShowAllKota(c *gin.Context) {
	kota, err := h.service.GetAllKota()

	if err != nil {
		responseError := helper.APIFailure(500, "error in internal server", gin.H{"error": err.Error()})
		c.JSON(500, responseError)
	}
	response := helper.APIResponse(200, "success get all kota data", kota)
	c.JSON(200, response)
}

// GetKotaByID godoc
// @Summary Get Kota by id
// @Description Get Kota By ID
// @Tags Kota
// @Accept json
// @Produce json
// @Param city_id path string true "id kota"
// @Success 200 {object} helper.Response
// @Failure 400 {object} helper.Failure
// @Failure 500 {object} helper.Failure
// @Router /kota/{city_id} [get]
func (h *kotaHandler) ShowkotaByID(c *gin.Context) {
	id := c.Param("id_kota")

	kota, err := h.service.GetKotaByID(id)
	if err != nil {
		responseErr := helper.APIFailure(500, "internal server error", gin.H{"error": err.Error()})

		c.JSON(500, responseErr)
		return
	}
	response := helper.APIResponse(200, "success get kota", kota)
	c.JSON(200, response)
}
