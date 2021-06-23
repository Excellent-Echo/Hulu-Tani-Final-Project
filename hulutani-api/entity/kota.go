package entity

type RajaOngkirKota struct {
	Rajaongkir DataKota `json:"rajaongkir"`
}

type DataKota struct {
	Kota []Kota `json:"results"`
}

type Kota struct {
	CityId     string `json:"city_id"`
	ProvinceId string `json:"province_id"`
	Province   string `json:"province"`
	Type       string `json:"type"`
	CityName   string `json:"city_name"`
	PostalCode string `json:"postal_code"`
}
