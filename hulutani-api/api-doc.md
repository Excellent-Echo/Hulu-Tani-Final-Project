# HuluTani API Documentation

## List of available endpoints

### Admin

- `POST /admin/login`

### Customers

- `GET /user/:user_id`
- `POST/user/register`
- `POST /user/login`

### Contact

- `GET /contact`
- `POST/contact`

### Product

- `GET /products/`
- `GET /product/:product_id`
- `GET /product/:category`
- `GET /product/:harga` \*url query atau 1 1
- `GET /product/:product_name`
- `POST /product/`
- `PUT /product/:product_id`
- `DELETE /product/:product_id`

### Category

- `GET /category/`
- `GET /category/:category_id`
- `POST /category/`
- `PUT /category/:category_id`
- `DELETE /category/:category_id`

### Cart

- `GET /cart/:cart_id`
- `GET /cart/:cart_code`
- `GET /cart/:product_id`
- `POST /cart/`
- `DELETE /cart/:cart_id`

### Expedition

- `GET /province`
- `GET /city`
- `POST /cost/`

### Address

- `GET /address/:cust_id`
- `GET /address/:address_id`
- `POST /address/`
- `PUT/address/:address_id`
- `DELETE /address/:address_id`

### Transaction

- `GET /transaction/:code_transaction`
- `GET /transaction/:date_transaction`
- `POST /transaction/`
- `PUT/transaction/:code_transaction`

### Detail Transaction

- `GET /detail_transaction/:code_transaction`
- `POST /detail_transaction/`


## RESTful endpoints admin

### POST/admin/login

> POST admin

_Request Header_

```
not needed
```

_Request Body_

```
{
  "email": "<email to get insert into>",
  "password": "<password to get insert into>"
}
```

_Response (200)_

```
{
	"code" : 200,
	"message" : berhasil,
	"data : {
		"authorization" : "aklsdjsal;dkjads"
	}"
}
```

_Response (400- Bad Request)_

```
{
  "code" : 400,
  "message" : "error"
}
```

_Response (500 - Internal Server Error)_

```
{
  "code" : 500,
  "message" : "error"
}
```

---

## RESTful endpoints user

### POST /user/register

> Create new user

_Request Header_

```
not needed
```

_Request Body_

```
{
  "name" : "<name to get insert into>",
  "date_birth" : "<date_birth to get insert into>",
  "handphone_number" : "<handphone_number to get insert into>",
  "Gender" : "<Gender to get insert into>",
  "email": "<email to get insert into>",
  "password": "<password to get insert into>"
}
```

_Response (201)_

```
{
  "id" : "<given id by system>",
  "name" : "<name to get insert into>",
  "date_birth" : "<date_birth to get insert into>",
  "handphone_number" : "<handphone_number to get insert into>",
  "Gender" : "<Gender to get insert into>",
  "email": "<email to get insert into>"
}
```

_Response (400 - Bad Request)_

```
{
  "code" : 400,
  "message" : "error"
}
```

_Response (500 - Internal Server Error)_

```
{
  "code" : 500,
  "message" : "error"
}
```

---

### POST /user/login

> Compare data login on database with data inputed

_Request Header_

```
not needed
```

_Request Body_

```
{
  "email": "<email to get compare>",
  "password": "<password to get compare>"
}
```

_Response (200)_

```
{
	"code" : 200,
	"message" : success,
	"data : {
		"authorization" : "aklsdjsal;dkjads"
	}"
}
```

_Response (400 - Bad Request)_

```
{
  "code" : 400,
  "message" : "bad request"
}
```

_Response (401 - Unauthorized)_

```
{
  "code" : 400,
  "message" : "unauthorize"
}
```

_Response (500 - Internal Server Error)_

```
{
  "code" : 500,
  "message" : "error"
}
```

---

### GET /user/:user_id

> Get user by user ID

_Request Header_

```
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
  "id" : "<given id by system>",
  "name" : "<name to get insert into>",
  "date_birth" : "<date_birth to get insert into>",
  "handphone_number" : "<handphone_number to get insert into>",
  "Gender" : "<Gender to get insert into>",
  "email": "<email to get insert into>"
}
```

_Response (400 - Bad Request)_

```
{
  "code" : 400,
  "message" : "error"
}
```

_Response (500 - Internal Server Error)_

```
{
  "code" : 500,
  "message" : "error"
}
```

---

## RESTful endpoints contact

### GET /contact

> Get all contact

_Request Header_

```
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
  "id" : "<given id by system>",
  "name" : "<name to get insert into>",
  "date_birth" : "<date_birth to get insert into>",
  "handphone_number" : "<handphone_number to get insert into>",
  "Gender" : "<Gender to get insert into>",
  "address": "<address to get insert into>"
}
```

_Response (400 - Bad Request)_

```
{
  "code" : 400,
  "message" : "error"
}
```

_Response (500 - Internal Server Error)_

```
{
  "code" : 500,
  "message" : "error"
}
```

### POST /contact

> Create new contact

_Request Header_

```
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_

```
{
  "name" : "<name to get insert into>",
  "date_birth" : "<date_birth to get insert into>",
  "handphone_number" : "<handphone_number to get insert into>",
  "Gender" : "<Gender to get insert into>"
  "address": "<address to get insert into>"
}
```

_Response (201)_

```
{
  "id" : "<given id by system>",
  "name" : "<name to get insert into>",
  "date_birth" : "<date_birth to get insert into>",
  "handphone_number" : "<handphone_number to get insert into>",
  "Gender" : "<Gender to get insert into>"
  "address": "<address to get insert into>"
}
```

_Response (400 - Bad Request)_

```
{
  "code" : 400,
  "message" : "error"
}
```

_Response (500 - Internal Server Error)_

```
{
  "code" : 500,
  "message" : "error"
}
```

## RESTful endpoints product

### GET /product

> Get all products

_Request Header_

```
not needed
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
  "id" : "<given id by system>",
  "name" : "<name to get insert into>",
  "description" : "<description to get insert into>",
  "takaran" : "<takaran to get insert into>",
  "price" : "<price to get insert into>",
  "discount" : "<discount to get insert into>",
  "stock": "<stock to get insert into>",
  "image": "<image to get insert into>",
  "id_category": "<id_category to get insert into>"
}
```

_Response (400 - Bad Request)_

```
{
  "code" : 400,
  "message" : "error"
}
```

_Response (500 - Internal Server Error)_

```
{
  "code" : 500,
  "message" : "error"
}
```

### GET /product/:product_id

> Get product by product ID

_Request Header_

```
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
  "id" : "<given id by system>",
  "name" : "<name to get insert into>",
  "description" : "<description to get insert into>",
  "takaran" : "<takaran to get insert into>",
  "price" : "<price to get insert into>",
  "discount" : "<discount to get insert into>",
  "stock": "<stock to get insert into>",
  "image": "<image to get insert into>",
  "id_category": "<id_category to get insert into>"
}
```

_Response (400 - Bad Request)_

```
{
  "code" : 400,
  "message" : "error"
}
```

_Response (500 - Internal Server Error)_

```
{
  "code" : 500,
  "message" : "error"
}
```

### GET /product/:product_category

> Get product by product category

_Request Header_

```
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
  "id" : "<given id by system>",
  "name" : "<name to get insert into>",
  "description" : "<description to get insert into>",
  "takaran" : "<takaran to get insert into>",
  "price" : "<price to get insert into>",
  "discount" : "<discount to get insert into>",
  "stock": "<stock to get insert into>",
  "image": "<image to get insert into>",
  "id_category": "<id_category to get insert into>"
}
```

_Response (400 - Bad Request)_

```
{
  "code" : 400,
  "message" : "error"
}
```

_Response (500 - Internal Server Error)_

```
{
  "code" : 500,
  "message" : "error"
}
```

### GET /product/:price

> Get product by price

_Request Header_

```
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
  "id" : "<given id by system>",
  "name" : "<name to get insert into>",
  "description" : "<description to get insert into>",
  "takaran" : "<takaran to get insert into>",
  "price" : "<price to get insert into>",
  "discount" : "<discount to get insert into>",
  "stock": "<stock to get insert into>",
  "image": "<image to get insert into>",
  "id_category": "<id_category to get insert into>"
}
```

_Response (400 - Bad Request)_

```
{
  "code" : 400,
  "message" : "error"
}
```

_Response (500 - Internal Server Error)_

```
{
  "code" : 500,
  "message" : "error"
}
```

### GET /product/:product_name

> Get product by product name

_Request Header_

```
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
  "id" : "<given id by system>",
  "name" : "<name to get insert into>",
  "description" : "<description to get insert into>",
  "takaran" : "<takaran to get insert into>",
  "price" : "<price to get insert into>",
  "discount" : "<discount to get insert into>",
  "stock": "<stock to get insert into>",
  "image": "<image to get insert into>",
  "id_category": "<id_category to get insert into>"
}
```

_Response (400 - Bad Request)_

```
{
  "code" : 400,
  "message" : "error"
}
```

_Response (500 - Internal Server Error)_

```
{
  "code" : 500,
  "message" : "error"
}
```

### POST /product

> Create new product

_Request Header_

```
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_

```
{
  "name" : "<name to get insert into>",
  "description" : "<description to get insert into>",
  "takaran" : "<takaran to get insert into>",
  "price" : "<price to get insert into>",
  "discount" : "<discount to get insert into>",
  "stock": "<stock to get insert into>",
  "image": "<image to get insert into>",
  "id_category": "<id_category to get insert into>"
}
```

_Response (201)_

```
{
  "id" : "<given id by system>",
  "name" : "<name to get insert into>",
  "description" : "<description to get insert into>",
  "takaran" : "<takaran to get insert into>",
  "price" : "<price to get insert into>",
  "discount" : "<discount to get insert into>",
  "stock": "<stock to get insert into>",
  "image": "<image to get insert into>",
  "id_category": "<id_category to get insert into>"
}
```

_Response (400 - Bad Request)_

```
{
  "code" : 400,
  "message" : "error"
}
```

_Response (500 - Internal Server Error)_

```
{
  "code" : 500,
  "message" : "error"
}
```

### PUT /product/:product_id

> Update product by product ID

_Request Header_

```
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_

```
{
  "name" : "<name to get insert into>",
  "description" : "<description to get insert into>",
  "takaran" : "<takaran to get insert into>",
  "price" : "<price to get insert into>",
  "discount" : "<discount to get insert into>",
  "stock": "<stock to get insert into>",
  "image": "<image to get insert into>",
  "id_category": "<id_category to get insert into>"
}
```

_Response (200)_

```
{
  "id" : "<posted id>",
  "name" : "<name to get insert into>",
  "description" : "<description to get insert into>",
  "takaran" : "<takaran to get insert into>",
  "price" : "<price to get insert into>",
  "discount" : "<discount to get insert into>",
  "stock": "<stock to get insert into>",
  "image": "<image to get insert into>",
  "id_category": "<id_category to get insert into>"
}
```

_Response (400 - Bad Request)_

```
{
  "code" : 400,
  "message" : "error"
}
```

_Response (500 - Internal Server Error)_

```
{
  "code" : 500,
  "message" : "error"
}
```

---

### DELETE /product/:product_id

> Delete product by ID

_Request Header_

```
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
  "code" : 200,
  "message" : "success delete product"
}
```

_Response (500 - Internal Server Error)_

```
{
  "error" : ""
}
```

---

## RESTful endpoints Category

### GET /category

> Get All category

_Request Header_

```
not needed
```

_Request Body_

```
not needed
```

_Response (200)_

```
[
  {
  "id" : 1
  "name" : "jeruk",
  "description" : "buah jeruk",
  "takaran" : "1 kg",
  "price" : "25000",
  "discount" : "beli 20 kg discount 10%",
  "stock": "100 ton",
  "image": "/img/product/gambar-jeruk.jpg",
  "id_category": 1
},{
  "id" : 2
  "name" : "jeruk",
  "description" : "buah jeruk",
  "takaran" : "1 kg",
  "price" : "25000",
  "discount" : "beli 20 kg discount 10%",
  "stock": "100 ton",
  "image": "/img/product/gambar-jeruk.jpg",
  "id_category": 1
  }
]
```

_Response (500 - Internal Server Error)_

```
{
  "error" : "<posted error>"
}
```

---

### GET /category/:category_id

> Get category by category ID

_Request Header_

```
not needed
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
  "id" : 1
  "name" : "jeruk",
  "description" : "buah jeruk",
  "takaran" : "1 kg",
  "price" : "25000",
  "discount" : "beli 20 kg discount 10%",
  "stock": "100 ton",
  "image": "/img/product/gambar-jeruk.jpg",
  "id_category": 1
}
```

_Response (500 - Internal Server Error)_

```
{
  "error" : "<posted error>"
}
```

### POST /category

> Create new category

_Request Header_

```
{
    "Authorization" : "<your Authorization>"
}
```

_Request Body_

```
{
  "name" : "<name to get insert into>",
}
```

_Response (201)_

```
{
  "id" : "<given id by system>",
  "name" : ""<name to get insert into>"
}
```

_Response (400 - Bad Request)_

```
{
  "code" : 400,
  "message" : "error"
}
```

_Response (500 - Internal Server Error)_

```
{
  "code" : 500,
  "message" : "error"
}
```

---

### PUT /category/:category_id

> Update category by category ID

_Request Header_

```
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_

```
{
   "name" : "<name to get insert into>"
}
```

_Response (200)_

```
{
  "id" : "<given id by system>",
  "name" : ""<name to get insert into>"
}
```

_Response (400 - Bad Request)_

```
{
  "code" : 400,
  "message" : "error"
}
```

_Response (401 - Unauthorized)_

```
{
  "code" : 401,
  "message" : "error"
}
```

_Response (500 - Internal Server Error)_

```
{
  "code" : 500,
  "message" : "error"
}
```

---

### DELETE /category/:category_id

> Delete category by category ID

_Request Header_

```
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
  "code" : 200,
  "message" : "success delete category"
}
```

_Response (400 - Bad Request)_

```
{
  "code" : 400,
  "message" : "error"
}
```

_Response (500 - Internal Server Error)_

```
{
  "code" : 500,
  "message" : "error"
}
```

---

## RESTful endpoints Cart

### GET /cart/:cart_id

> Get cart by cart_id

_Request Header_

```
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
  "id" : 1
  "id_product" : 1,
  "id_user" : 1,
  "cart_code" : "KB0012012"
}

```

_Response (400 - error bad request)_

```
{
  "code" : 400,
  "message" : "error"
}
```

_Response (500 - Internal Server Error)_

```
{
  "code" : 500,
  "message" : "error"
}
```

---

### GET /cart/:cart_code

> Get cart by cart code

_Request Header_

```
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
  "id" : 1
  "id_product" : 1,
  "id_user" : 1,
  "cart_code" : "KB0012012"
}
```

_Response (400 - Bad Request)_

```
{
  "code" : 400,
  "message" : "error"
}
```

_Response (500 - Internal Server Error)_

```
{
  "code" : 500,
  "message" : "error"
}
```

---

### GET /cart/:product_id

> Get cart by product ID

_Request Header_

```
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
  "code" : 200,
  "count" : <given by sistem>
}
```

_Response (400 - Bad Request)_

```
{
  "code" : 400,
  "message" : "error"
}
```

_Response (500 - Internal Server Error)_

```
{
  "code" : 500,
  "message" : "error"
}
```

### POST /cart

> Create new cart

_Request Header_

```
{
    "Authorization" : "<your Authorization>"
}
```

_Request Body_

```
{
  "id_product" : "<id_product to get insert into>",
}
```

_Response (201)_

```
{
  "id" : "<given by sistem>"
  "id_product" : "<id_product to get insert into>",
  "id_user" : "<id_user use current user>"
  "cart_code" : "<given by sistem>"
}
```

_Response (400 - Bad Request)_

```
{
  "code" : 400,
  "message" : "error"
}
```

_Response (500 - Internal Server Error)_

```
{
  "code" : 500,
  "message" : "error"
}
```

---

### DELETE /cart/:cart_id

> Delete category by category ID

_Request Header_

```
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
  "code" : 200,
  "message" : "success delete cart"
}
```

_Response (400 - Bad Request)_

```
{
  "code" : 400,
  "message" : "error"
}
```

_Response (500 - Internal Server Error)_

```
{
  "code" : 500,
  "message" : "error"
}
```

## RESTful endpoints Cart

### GET /cart/:cart_id

> Get cart by cart_id

_Request Header_

```
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
  "id" : 1
  "id_product" : 1,
  "id_user" : 1,
  "cart_code" : "KB0012012"
}

```

_Response (400 - error bad request)_

```
{
  "code" : 400,
  "message" : "error"
}
```

_Response (500 - Internal Server Error)_

```
{
  "code" : 500,
  "message" : "error"
}
```

---

### GET /cart/:cart_code

> Get cart by cart code

_Request Header_

```
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
  "id" : 1
  "id_product" : 1,
  "id_user" : 1,
  "cart_code" : "KB0012012"
}
```

_Response (400 - Bad Request)_

```
{
  "code" : 400,
  "message" : "error"
}
```

_Response (500 - Internal Server Error)_

```
{
  "code" : 500,
  "message" : "error"
}
```

---

### GET /cart/:product_id

> Get cart by product ID

_Request Header_

```
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
  "code" : 200,
  "count" : <given by sistem>
}
```

_Response (400 - Bad Request)_

```
{
  "code" : 400,
  "message" : "error"
}
```

_Response (500 - Internal Server Error)_

```
{
  "code" : 500,
  "message" : "error"
}
```

### POST /cart

> Create new cart

_Request Header_

```
{
    "Authorization" : "<your Authorization>"
}
```

_Request Body_

```
{
  "id_product" : "<id_product to get insert into>",
}
```

_Response (201)_

```
{
  "id" : "<given by sistem>"
  "id_product" : "<id_product to get insert into>",
  "id_user" : "<id_user use current user>"
  "cart_code" : "<given by sistem>"
}
```

_Response (400 - Bad Request)_

```
{
  "code" : 400,
  "message" : "error"
}
```

_Response (500 - Internal Server Error)_

```
{
  "code" : 500,
  "message" : "error"
}
```

---

### DELETE /cart/:cart_id

> Delete cart by cart ID

_Request Header_

```
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
  "code" : 200,
  "message" : "success delete cart"
}
```

_Response (400 - Bad Request)_

```
{
  "code" : 400,
  "message" : "error"
}
```

_Response (500 - Internal Server Error)_

```
{
  "code" : 500,
  "message" : "error"
}
```
---

## RESTful endpoints expedition

### GET /province
> Get All Province

 _Request Header_

```
not needed
```

_Request Body_

```
not needed
```

_Response (200)_

```
[
  {
  "province_id": "12",
  "province": "Kalimantan Barat"
  },
  {
  "province_id": "13",
  "province": "Kalimantan Timur"
  }
  ...
]
```

_Response (500 - Internal Server Error)_

```
{
  "error" : "<posted error>"
}
```

---
### GET /city
> Get All city

 _Request Header_

```
not needed
```

_Request Body_

```
not needed
```

_Response (200)_

```
[
  {
  "city_id": "39",
  "province_id": "5",
  "province": "DI Yogyakarta",
  "type": "Kabupaten",
  "city_name": "Bantul",
  "postal_code": "55700"
  },
  {
  "city_id": "40",
  "province_id": "5",
  "province": "DI Yogyakarta",
  "type": "Kabupaten",
  "city_name": "Others",
  "postal_code": "55800"
  }
  ...
]
```

_Response (500 - Internal Server Error)_

```
{
  "error" : "<posted error>"
}
```

---

## POST /cost/

> Post expedition info to get COST information 

_Request Header_

```
{
    "Authorization" : "<your Authorization>"
}
```

_Request Body_

```
{
  "origin": <given by system>,
  "destination": <city id to get insert into>,
  "weigth": <product weight to get insert into>,
  "courir": "<courier kode to get insert into>",
}
```

_Response (201)_

```
{
   "rajaongkir":{
      "query":{
         "origin":"501",
         "destination":"114",
         "weight":1700,
         "courier":"jne"
      },
      "status":{
         "code":200,
         "description":"OK"
      },
      "origin_details":{
         "city_id":"501",
         "province_id":"5",
         "province":"DI Yogyakarta",
         "type":"Kota",
         "city_name":"Yogyakarta",
         "postal_code":"55000"
      },
      "destination_details":{
         "city_id":"114",
         "province_id":"1",
         "province":"Bali",
         "type":"Kota",
         "city_name":"Denpasar",
         "postal_code":"80000"
      },
      "results":[
         {
            "code":"jne",
            "name":"Jalur Nugraha Ekakurir (JNE)",
            "costs":[
               {
                  "service":"OKE",
                  "description":"Ongkos Kirim Ekonomis",
                  "cost":[
                     {
                        "value":38000,
                        "etd":"4-5",
                        "note":""
                     }
                  ]
               },
               {
                  "service":"REG",
                  "description":"Layanan Reguler",
                  "cost":[
                     {
                        "value":44000,
                        "etd":"2-3",
                        "note":""
                     }
                  ]
               },
               {
                  "service":"SPS",
                  "description":"Super Speed",
                  "cost":[
                     {
                        "value":349000,
                        "etd":"",
                        "note":""
                     }
                  ]
               },
               {
                  "service":"YES",
                  "description":"Yakin Esok Sampai",
                  "cost":[
                     {
                        "value":98000,
                        "etd":"1-1",
                        "note":""
                     }
                  ]
               }
            ]
         }
      ]
   }
}
```

_Response (400 - Bad Request)_

```
{
  "code" : 400,
  "message" : "error"
}
```

_Response (500 - Internal Server Error)_

```
{
  "code" : 500,
  "message" : "error"
}
```

---

## RESTful endpoints Address

### GET /address/:cust_id

> Get Address by customer id

_Request Header_

```
not needed
```

_Request Body_

```
not needed
```

_Response (200)_

```
[
  {
  "id" : 1
  "customer_id" : 1,
  "name" : "Radika yudhistira",
  "province" : "banten",
  "city" : "tangerang",
  "detail_address" : "batu ceper jalan utama",
  "phone_number":"081383322222"
  },
  {
  "id" : 2,
  "customer_id" : 1,
  "name" : "Radika yudhistira",
  "province" : "banten",
  "city" : "tangerang selatan",
  "detail_address" : "alam sutra",
  "phone_number":"081383322222"
  },
  ...
]
```

_Response (500 - Internal Server Error)_

```
{
  "error" : "<posted error>"
}
```

---

### GET /address/:address_id

> Get address by address ID

_Request Header_

```
not needed
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
  "id" : 2,
  "customer_id" : 1,
  "name" : "Radika yudhistira",
  "province" : "banten",
  "city" : "tangerang selatan",
  "detail_address" : "alam sutra",
  "phone_number":"081383322222"
}
```

_Response (500 - Internal Server Error)_

```
{
  "error" : "<posted error>"
}
```

### POST /address

> Create new address

_Request Header_

```
{
    "Authorization" : "<your Authorization>"
}
```

_Request Body_

```
{
  "id" : <given by system>,
  "customer_id" : <customer id to get insert into>,
  "name" : "<name to get insert into>",
  "province" : "<province to get insert into>",
  "city" : "<city to get insert into>",
  "detail_address" : "<detail address to get insert into>",
  "phone_number":"<phone number to get insert into>"
}
```

_Response (201)_

```
{
  "id" : <given by system>,
  "customer_id" : <customer id to get insert into>,
  "name" : "<name to get insert into>",
  "province" : "<province to get insert into>",
  "city" : "<city to get insert into>",
  "detail_address" : "<detail address to get insert into>",
  "phone_number":"<phone number to get insert into>"
}
```

_Response (400 - Bad Request)_

```
{
  "code" : 400,
  "message" : "error"
}
```

_Response (500 - Internal Server Error)_

```
{
  "code" : 500,
  "message" : "error"
}
```

---

### PUT /address/:address_id

> Update address by address ID

_Request Header_

```
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_

```
{
  "name" : "<name to get insert into>",
  "province" : "<province to get insert into>",
  "city" : "<city to get insert into>",
  "detail_address" : "<detail address to get insert into>",
  "phone_number":"<phone number to get insert into>"
}
```

_Response (200)_

```
{
  "id" : <given by system>,
  "customer_id" : <customer id to get insert into>,
  "name" : "<name to get insert into>",
  "province" : "<province to get insert into>",
  "city" : "<city to get insert into>",
  "detail_address" : "<detail address to get insert into>",
  "phone_number":"<phone number to get insert into>"
}
```

_Response (400 - Bad Request)_

```
{
  "code" : 400,
  "message" : "error"
}
```

_Response (401 - Unauthorized)_

```
{
  "code" : 401,
  "message" : "error"
}
```

_Response (500 - Internal Server Error)_

```
{
  "code" : 500,
  "message" : "error"
}
```

---

### DELETE /address/:address_id

> Delete address by address ID

_Request Header_

```
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
  "code" : 200,
  "message" : "success delete address"
}
```

_Response (400 - Bad Request)_

```
{
  "code" : 400,
  "message" : "error"
}
```

_Response (500 - Internal Server Error)_

```
{
  "code" : 500,
  "message" : "error"
}
```

---


## RESTful endpoints Transaction

### GET /transaction/:code_transaction

> Get transaction by code_transaction

_Request Header_

```
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
  "code_transaction" : 1
  "status" : "menunggu pembayaran",
  "payment_account" : "transfer",
  "payment_total" : 120000,
  "transaction_date" : "2019-01-01",
  "cart_code" : 1,
  "customer_id" : 1
}

```

_Response (400 - error bad request)_

```
{
  "code" : 400,
  "message" : "error"
}
```

_Response (500 - Internal Server Error)_

```
{
  "code" : 500,
  "message" : "error"
}
```

---

### GET /transaction/:date_transaction

> Get transaction by date_transaction

_Request Header_

```
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
  "code_transaction" : 1
  "status" : "menunggu pembayaran",
  "payment_account" : "transfer",
  "payment_total" : 120000,
  "transaction_date" : "2019-01-01",
  "cart_code" : 1,
  "customer_id" : 1
}
```

_Response (400 - Bad Request)_

```
{
  "code" : 400,
  "message" : "error"
}
```

_Response (500 - Internal Server Error)_

```
{
  "code" : 500,
  "message" : "error"
}
```

### POST /transaction

> Create new transaction

_Request Header_

```
{
    "Authorization" : "<your Authorization>"
}
```

_Request Body_

```
{
  "status" : "<status to get insert into>",
  "payment_account" : "<payment_account to get insert into>",
  "payment_total" : <payment_total to get insert into>,
  "transaction_date" : "<transaction_date to get insert into>",
}
```

_Response (201)_

```
{
  "code_transaction" : <given by system>
  "status" : "<status to get insert into>",
  "payment_account" : "<payment_account to get insert into>",
  "payment_total" : <payment_total to get insert into>,
  "transaction_date" : "<transaction_date to get insert into>",
  "cart_code" : <given by system>,
  "customer_id" : <given by system>
}
```

_Response (400 - Bad Request)_

```
{
  "code" : 400,
  "message" : "error"
}
```

_Response (500 - Internal Server Error)_

```
{
  "code" : 500,
  "message" : "error"
}
```

---

### PUT /transaction/:code_transaction

> Update transaction by code_transaction

_Request Header_

```
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_

```
{
   "status" : "<status to get insert into>"
}
```

_Response (200)_

```
{
  "code_transaction" : <given by system>
  "status" : "<status to get insert into>",
  "payment_account" : "<payment_account to get insert into>",
  "payment_total" : <payment_total to get insert into>,
  "transaction_date" : "<transaction_date to get insert into>",
  "cart_code" : <given by system>,
  "customer_id" : <given by system>
}
```

_Response (400 - Bad Request)_

```
{
  "code" : 400,
  "message" : "error"
}
```

_Response (401 - Unauthorized)_

```
{
  "code" : 401,
  "message" : "error"
}
```

_Response (500 - Internal Server Error)_

```
{
  "code" : 500,
  "message" : "error"
}
```

---

## RESTful endpoints Detail Transaction

### GET /detail_transaction/:code_transaction

> GET detail transaction by code transaction

_Request Header_

```
{
   "Authorization": "<your Authorization>"
}
```

_Request Body_

```
not needed
```

_Response (200)_

```
{
  "code_detail_transaction": 1,
  "transaction":{
    "code_transaction" : <given by system>
    "status" : "<status to get insert into>",
    "payment_account" : "<payment_account to get insert into>",
    "payment_total" : <payment_total to get insert into>,
    "transaction_date" : "<transaction_date to get insert into>",
    "cart_code" : <given by system>,
    "customer_id" : <given by system>
  },
  "address" : {
    "id" : 2,
    "customer_id" : 1,
    "name" : "Radika yudhistira",
    "province" : "banten",
    "city" : "tangerang selatan",
    "detail_address" : "alam sutra",
    "phone_number":"081383322222"
  },
  "courier": "jne" ,
  "cost": 20000,
}
```

_Response (400 - Bad Request)_

```
{
  "code" : 400,
  "message" : "error"
}
```

_Response (500 - Internal Server Error)_

```
{
  "code" : 500,
  "message" : "error"
}
```

---

## POST /detail_transaction/

> POST detail transaction

_Request Header_

```
{
    "Authorization" : "<your Authorization>"
}
```

_Request Body_

```
{
  "code_transaction" : <code transaction to get insert into>,
  "address_id":<address id to get insert into>,
  "courier":"<courier to get insert>",
  "cost": "<cost to get insert>"
}
```

_Response (201)_

```
{
  "code_detail_transaction": <given by system>,
  "code_transaction" : <code transaction to get insert into>,
  "address_id":<address id to get insert into>,
  "courier":"<courier to get insert>",
  "cost": "<cost to get insert>"
}
```

_Response (400 - Bad Request)_

```
{
  "code" : 400,
  "message" : "error"
}
```

_Response (500 - Internal Server Error)_

```
{
  "code" : 500,
  "message" : "error"
}
```

---
