package entity

type RajaOngkir struct {
	Rajaongkir Data `json:"rajaongkir"`
}

type Data struct {
	Provinsi []Provinsi `json:"results"`
}

type Provinsi struct {
	ProvinceId string `json:"province_id"`
	Province   string `json:"province"`
}
