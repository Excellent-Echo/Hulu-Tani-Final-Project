package handler

import (
	"database/sql"
	"encoding/json"
	"fmt"
	"hulutani-api/entity"
	"hulutani-api/helper"
	"hulutani-api/layer/provinsi"
	"io/ioutil"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	_ "github.com/go-sql-driver/mysql"
	"github.com/joho/godotenv"
)

type provinsiHandler struct {
	service provinsi.Service
}

func NewProvinsiHandler(service provinsi.Service) *provinsiHandler {
	return &provinsiHandler{service}
}

func FetchData() entity.RajaOngkir {
	client := &http.Client{}

	req, err := http.NewRequest("GET", "https://api.rajaongkir.com/starter/province", nil)
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
	fmt.Println(byteData)
	var datas entity.RajaOngkir

	json.Unmarshal(byteData, &datas)
	fmt.Println(datas)
	return datas
}

func connect() (*sql.DB, error) {
	err := godotenv.Load()

	dbUser := os.Getenv("DB_USERNAME")
	dbPass := os.Getenv("DB_PASSWORD")
	dbHost := os.Getenv("DB_HOST")
	dbName := os.Getenv("DB_NAME")

	dsn := fmt.Sprintf("%s:%s@tcp(%s)/%s?charset=utf8mb4&parseTime=True&loc=Local", dbUser, dbPass, dbHost, dbName)

	db, err := sql.Open("mysql", dsn)

	if err != nil {
		return nil, err
	}

	return db, nil
}

func StoreProvinsiDB() {
	db, err := connect()

	if err != nil {
		fmt.Println(err.Error())
		return
	}
	defer db.Close()

	datas := FetchData()

	for _, data := range datas.Rajaongkir.Provinsi {
		_, err := db.Exec("insert into provinsis (province_id, province) values(?, ?)", data.ProvinceId, data.Province)
		if err != nil {
			fmt.Println(err.Error())
			continue
		}
		fmt.Println(data)
		fmt.Println("insert success")
	}
}

// GetAllProvinsi godoc
// @Summary Get all Provinsi data
// @Description Get all provinsi data
// @Tags Provinsi
// @Accept json
// @Produce json
// @Success 200 {object} helper.Response
// @Failure 500 {object} helper.Failure
// @Router /provinsi [get]
func (h *provinsiHandler) ShowAllProvinsi(c *gin.Context) {
	provinsi, err := h.service.GetAllProvinsi()

	if err != nil {
		responseError := helper.APIFailure(500, "error in internal server", gin.H{"error": err.Error()})
		c.JSON(500, responseError)
	}
	response := helper.APIResponse(200, "success get all provinsi data", provinsi)
	c.JSON(200, response)
}

// GetProvinsiByID godoc
// @Summary Get provinsi by id
// @Description Get provinsi By ID
// @Tags Provinsi
// @Accept json
// @Produce json
// @Param province_id path string true "id provinsi"
// @Success 200 {object} helper.Response
// @Failure 400 {object} helper.Failure
// @Failure 500 {object} helper.Failure
// @Router /provinsi/{province_id} [get]
func (h *provinsiHandler) ShowProvinsiByID(c *gin.Context) {
	id := c.Param("id_provinsi")

	provinsi, err := h.service.GetProvinsiByID(id)
	if err != nil {
		responseErr := helper.APIFailure(500, "internal server error", gin.H{"error": err.Error()})

		c.JSON(500, responseErr)
		return
	}
	response := helper.APIResponse(200, "success get provinsi", provinsi)
	c.JSON(200, response)
}
