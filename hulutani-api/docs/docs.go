// GENERATED BY THE COMMAND ABOVE; DO NOT EDIT
// This file was generated by swaggo/swag

package docs

import (
	"bytes"
	"encoding/json"
	"strings"

	"github.com/alecthomas/template"
	"github.com/swaggo/swag"
)

var doc = `{
    "schemes": {{ marshal .Schemes }},
    "swagger": "2.0",
    "info": {
        "description": "{{.Description}}",
        "title": "{{.Title}}",
        "contact": {},
        "version": "{{.Version}}"
    },
    "host": "{{.Host}}",
    "basePath": "{{.BasePath}}",
    "paths": {
        "/cost/{destination}": {
            "post": {
                "description": "Get cost By ID",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Cost"
                ],
                "summary": "Get cost by id",
                "parameters": [
                    {
                        "type": "string",
                        "description": "destination",
                        "name": "destination",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/helper.Response"
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/helper.Failure"
                        }
                    },
                    "500": {
                        "description": "Internal Server Error",
                        "schema": {
                            "$ref": "#/definitions/helper.Failure"
                        }
                    }
                }
            }
        },
        "/kategori": {
            "get": {
                "description": "Get All kategori",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "kategori"
                ],
                "summary": "Get all kategori",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/helper.Response"
                        }
                    },
                    "500": {
                        "description": "Internal Server Error",
                        "schema": {
                            "$ref": "#/definitions/helper.Failure"
                        }
                    }
                }
            },
            "post": {
                "security": [
                    {
                        "Auth": []
                    }
                ],
                "description": "create new kategori",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "kategori"
                ],
                "summary": "create new kategori",
                "parameters": [
                    {
                        "description": "data kategori",
                        "name": "kategori",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/entity.KategoriInput"
                        }
                    }
                ],
                "responses": {
                    "201": {
                        "description": "Created",
                        "schema": {
                            "$ref": "#/definitions/helper.Response"
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/helper.Failure"
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "schema": {
                            "$ref": "#/definitions/helper.Failure"
                        }
                    },
                    "500": {
                        "description": "Internal Server Error",
                        "schema": {
                            "$ref": "#/definitions/helper.Failure"
                        }
                    }
                }
            }
        },
        "/kategori/{kategori_id}": {
            "get": {
                "description": "Get Kategori By ID",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "kategori"
                ],
                "summary": "Get Kategori by id",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id kategori",
                        "name": "kategori_id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/helper.Response"
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/helper.Failure"
                        }
                    },
                    "500": {
                        "description": "Internal Server Error",
                        "schema": {
                            "$ref": "#/definitions/helper.Failure"
                        }
                    }
                }
            },
            "put": {
                "security": [
                    {
                        "Auth": []
                    }
                ],
                "description": "update kategori",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "kategori"
                ],
                "summary": "update kategori",
                "parameters": [
                    {
                        "type": "string",
                        "description": "kategori id",
                        "name": "kategori_id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "description": "data kategori",
                        "name": "kategori",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/entity.KategoriInput"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/helper.Response"
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/helper.Failure"
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "schema": {
                            "$ref": "#/definitions/helper.Failure"
                        }
                    },
                    "500": {
                        "description": "Internal Server Error",
                        "schema": {
                            "$ref": "#/definitions/helper.Failure"
                        }
                    }
                }
            },
            "delete": {
                "security": [
                    {
                        "Auth": []
                    }
                ],
                "description": "Delete kategori by id",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "kategori"
                ],
                "summary": "Delete kategori by id",
                "parameters": [
                    {
                        "type": "string",
                        "description": "kategori id",
                        "name": "kategori_id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/helper.Delete"
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/helper.Failure"
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "schema": {
                            "$ref": "#/definitions/helper.Failure"
                        }
                    }
                }
            }
        },
        "/kota": {
            "get": {
                "description": "Get all Kota data",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Kota"
                ],
                "summary": "Get all Kota data",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/helper.Response"
                        }
                    },
                    "500": {
                        "description": "Internal Server Error",
                        "schema": {
                            "$ref": "#/definitions/helper.Failure"
                        }
                    }
                }
            }
        },
        "/kota/{city_id}": {
            "get": {
                "description": "Get Kota By ID",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Kota"
                ],
                "summary": "Get Kota by id",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id kota",
                        "name": "city_id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/helper.Response"
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/helper.Failure"
                        }
                    },
                    "500": {
                        "description": "Internal Server Error",
                        "schema": {
                            "$ref": "#/definitions/helper.Failure"
                        }
                    }
                }
            }
        },
        "/produk": {
            "get": {
                "description": "Get All produk",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "produk"
                ],
                "summary": "Get all produk",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/helper.Response"
                        }
                    },
                    "500": {
                        "description": "Internal Server Error",
                        "schema": {
                            "$ref": "#/definitions/helper.Failure"
                        }
                    }
                }
            },
            "post": {
                "security": [
                    {
                        "Auth": []
                    }
                ],
                "description": "create new produk",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "produk"
                ],
                "summary": "create new produk",
                "parameters": [
                    {
                        "description": "data produk",
                        "name": "produk",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/entity.ProdukInput"
                        }
                    }
                ],
                "responses": {
                    "201": {
                        "description": "Created",
                        "schema": {
                            "$ref": "#/definitions/helper.Response"
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/helper.Failure"
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "schema": {
                            "$ref": "#/definitions/helper.Failure"
                        }
                    },
                    "500": {
                        "description": "Internal Server Error",
                        "schema": {
                            "$ref": "#/definitions/helper.Failure"
                        }
                    }
                }
            }
        },
        "/produk/harga": {
            "post": {
                "description": "Get produk by harga",
                "consumes": [
                    "multipart/form-data"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "produk"
                ],
                "summary": "Get produk by harga",
                "parameters": [
                    {
                        "type": "integer",
                        "name": "dari",
                        "in": "formData"
                    },
                    {
                        "type": "integer",
                        "name": "sampai",
                        "in": "formData"
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/helper.Response"
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/helper.Failure"
                        }
                    },
                    "500": {
                        "description": "Internal Server Error",
                        "schema": {
                            "$ref": "#/definitions/helper.Failure"
                        }
                    }
                }
            }
        },
        "/produk/nama/{nama_produk}": {
            "get": {
                "description": "Get produk by name",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "produk"
                ],
                "summary": "Get produk by name",
                "parameters": [
                    {
                        "type": "string",
                        "description": "nama_produk",
                        "name": "nama_produk",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/helper.Response"
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/helper.Failure"
                        }
                    },
                    "500": {
                        "description": "Internal Server Error",
                        "schema": {
                            "$ref": "#/definitions/helper.Failure"
                        }
                    }
                }
            }
        },
        "/produk/{produk_id}": {
            "get": {
                "description": "Get produk by id",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "produk"
                ],
                "summary": "Get produk by id",
                "parameters": [
                    {
                        "type": "string",
                        "description": "produk_id",
                        "name": "produk_id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/helper.Response"
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/helper.Failure"
                        }
                    },
                    "500": {
                        "description": "Internal Server Error",
                        "schema": {
                            "$ref": "#/definitions/helper.Failure"
                        }
                    }
                }
            },
            "put": {
                "security": [
                    {
                        "Auth": []
                    }
                ],
                "description": "update produk",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "produk"
                ],
                "summary": "update produk",
                "parameters": [
                    {
                        "type": "string",
                        "description": "produk id",
                        "name": "produk_id",
                        "in": "path",
                        "required": true
                    },
                    {
                        "description": "data produk",
                        "name": "produk",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/entity.ProdukInput"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/helper.Response"
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/helper.Failure"
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "schema": {
                            "$ref": "#/definitions/helper.Failure"
                        }
                    },
                    "500": {
                        "description": "Internal Server Error",
                        "schema": {
                            "$ref": "#/definitions/helper.Failure"
                        }
                    }
                }
            },
            "delete": {
                "security": [
                    {
                        "Auth": []
                    }
                ],
                "description": "Delete produk by id",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "produk"
                ],
                "summary": "Delete produk by id",
                "parameters": [
                    {
                        "type": "string",
                        "description": "produk id",
                        "name": "produk_id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/helper.Delete"
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/helper.Failure"
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "schema": {
                            "$ref": "#/definitions/helper.Failure"
                        }
                    }
                }
            }
        },
        "/provinsi": {
            "get": {
                "description": "Get all provinsi data",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Provinsi"
                ],
                "summary": "Get all Provinsi data",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/helper.Response"
                        }
                    },
                    "500": {
                        "description": "Internal Server Error",
                        "schema": {
                            "$ref": "#/definitions/helper.Failure"
                        }
                    }
                }
            }
        },
        "/provinsi/{province_id}": {
            "get": {
                "description": "Get provinsi By ID",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "Provinsi"
                ],
                "summary": "Get provinsi by id",
                "parameters": [
                    {
                        "type": "string",
                        "description": "id provinsi",
                        "name": "province_id",
                        "in": "path",
                        "required": true
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/helper.Response"
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/helper.Failure"
                        }
                    },
                    "500": {
                        "description": "Internal Server Error",
                        "schema": {
                            "$ref": "#/definitions/helper.Failure"
                        }
                    }
                }
            }
        },
        "/user": {
            "get": {
                "security": [
                    {
                        "Auth": []
                    }
                ],
                "description": "Get a pelanggan by pelanggan ID",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "pelanggan"
                ],
                "summary": "Get Pelanggan by ID",
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/helper.Response"
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/helper.Failure"
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "schema": {
                            "$ref": "#/definitions/helper.Failure"
                        }
                    },
                    "500": {
                        "description": "Internal Server Error",
                        "schema": {
                            "$ref": "#/definitions/helper.Failure"
                        }
                    }
                }
            }
        },
        "/user/login": {
            "post": {
                "description": "Login for pelanggan",
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "pelanggan"
                ],
                "summary": "Login for pelanggan",
                "operationId": "Authentication",
                "parameters": [
                    {
                        "description": "Login pelanggan",
                        "name": "user",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/entity.PelangganLogin"
                        }
                    }
                ],
                "responses": {
                    "200": {
                        "description": "OK",
                        "schema": {
                            "$ref": "#/definitions/helper.Response"
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/helper.Failure"
                        }
                    },
                    "401": {
                        "description": "Unauthorized",
                        "schema": {
                            "$ref": "#/definitions/helper.Failure"
                        }
                    },
                    "500": {
                        "description": "Internal Server Error",
                        "schema": {
                            "$ref": "#/definitions/helper.Failure"
                        }
                    }
                }
            }
        },
        "/user/register": {
            "post": {
                "description": "Create new pelanggan account",
                "consumes": [
                    "application/json"
                ],
                "produces": [
                    "application/json"
                ],
                "tags": [
                    "pelanggan"
                ],
                "summary": "Create new pelanggan account",
                "parameters": [
                    {
                        "description": "create pelanggan",
                        "name": "pelanggan",
                        "in": "body",
                        "required": true,
                        "schema": {
                            "$ref": "#/definitions/entity.PelangganInput"
                        }
                    }
                ],
                "responses": {
                    "201": {
                        "description": "Created",
                        "schema": {
                            "$ref": "#/definitions/helper.Response"
                        }
                    },
                    "400": {
                        "description": "Bad Request",
                        "schema": {
                            "$ref": "#/definitions/helper.Failure"
                        }
                    },
                    "500": {
                        "description": "Internal Server Error",
                        "schema": {
                            "$ref": "#/definitions/helper.Failure"
                        }
                    }
                }
            }
        }
    },
    "definitions": {
        "entity.KategoriInput": {
            "type": "object",
            "properties": {
                "nama": {
                    "type": "string"
                }
            }
        },
        "entity.PelangganInput": {
            "type": "object",
            "required": [
                "email",
                "jenis_kelamin",
                "nama",
                "nomor_handphone",
                "password",
                "tanggal_lahir"
            ],
            "properties": {
                "email": {
                    "type": "string"
                },
                "jenis_kelamin": {
                    "type": "string"
                },
                "nama": {
                    "type": "string"
                },
                "nomor_handphone": {
                    "type": "string"
                },
                "password": {
                    "type": "string"
                },
                "tanggal_lahir": {
                    "type": "string"
                }
            }
        },
        "entity.PelangganLogin": {
            "type": "object",
            "properties": {
                "email": {
                    "type": "string"
                },
                "password": {
                    "type": "string"
                }
            }
        },
        "entity.ProdukInput": {
            "type": "object",
            "properties": {
                "deskripsi": {
                    "type": "string"
                },
                "gambar": {
                    "type": "string"
                },
                "harga": {
                    "type": "string"
                },
                "id_kategori": {
                    "type": "string"
                },
                "nama": {
                    "type": "string"
                },
                "promo": {
                    "type": "string"
                },
                "stok": {
                    "type": "string"
                },
                "takaran": {
                    "type": "string"
                }
            }
        },
        "helper.Delete": {
            "type": "object",
            "properties": {
                "code": {
                    "type": "integer"
                },
                "message": {
                    "type": "object"
                }
            }
        },
        "helper.Failure": {
            "type": "object",
            "properties": {
                "code": {
                    "type": "integer"
                },
                "error": {
                    "type": "object"
                },
                "message": {
                    "type": "string"
                }
            }
        },
        "helper.Response": {
            "type": "object",
            "properties": {
                "code": {
                    "type": "integer"
                },
                "data": {
                    "type": "object"
                },
                "message": {
                    "type": "string"
                }
            }
        }
    },
    "securityDefinitions": {
        "Auth": {
            "type": "apiKey",
            "name": "Authorization",
            "in": "header"
        }
    }
}`

type swaggerInfo struct {
	Version     string
	Host        string
	BasePath    string
	Schemes     []string
	Title       string
	Description string
}

// SwaggerInfo holds exported Swagger Info so clients can modify it
var SwaggerInfo = swaggerInfo{
	Version:     "",
	Host:        "",
	BasePath:    "",
	Schemes:     []string{},
	Title:       "",
	Description: "",
}

type s struct{}

func (s *s) ReadDoc() string {
	sInfo := SwaggerInfo
	sInfo.Description = strings.Replace(sInfo.Description, "\n", "\\n", -1)

	t, err := template.New("swagger_info").Funcs(template.FuncMap{
		"marshal": func(v interface{}) string {
			a, _ := json.Marshal(v)
			return string(a)
		},
	}).Parse(doc)
	if err != nil {
		return doc
	}

	var tpl bytes.Buffer
	if err := t.Execute(&tpl, sInfo); err != nil {
		return doc
	}

	return tpl.String()
}

func init() {
	swag.Register(swag.Name, &s{})
}
