package entity

type Cost struct {
	Rajaongkir struct {
		DestinationDetails struct {
			CityID     string `json:"city_id"`
			ProvinceID string `json:"province_id"`
			Province   string `json:"province"`
			Type       string `json:"type"`
			CityName   string `json:"city_name"`
			PostalCode string `json:"postal_code"`
		} `json:"destination_details"`
		Results []struct {
			Code  string `json:"code"`
			Name  string `json:"name"`
			Costs []struct {
				Service     string `json:"service"`
				Description string `json:"description"`
				Cost        []struct {
					Value int    `json:"value"`
					Etd   string `json:"etd"`
					Note  string `json:"note"`
				} `json:"cost"`
			} `json:"costs"`
		} `json:"results"`
	} `json:"rajaongkir"`
}

// type RajaOngkirCost struct {
// 	DestinationDetails DestinationDetails `json:"destination_details"`
// 	Results            []Results          `json:"results"`
// }

// type DestinationDetails struct {
// 	CityId     string `json:"city_id"`
// 	ProvinceId string `json:"province_id"`
// 	Province   string `json:"province"`
// 	Type       string `json:"type"`
// 	CityName   string `json:"city_name"`
// 	PostalCode string `json:"postal_code"`
// }

// type Results struct {
// 	Code  string  `json:"code"`
// 	Name  string  `json:"name"`
// 	Costs []Costs `json:"costs"`
// }

// type Costs struct {
// 	Service     string `json:"service"`
// 	Description string `json:"description"`
// 	Cost        []Cost `json:"cost"`
// }

// type Cost struct {
// 	Value int    `json:"value"`
// 	Etd   string `json:"etd"`
// 	Note  string `json:"note"`
// }

type DestinationInput struct {
	Destination string `json:"destination"`
}
