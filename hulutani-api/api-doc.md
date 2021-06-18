**# HuluTani API Documentation**

**## List of available endpoints**

**### Admin**

\- `POST /admin/login`

**### Customers**

\- `GET /user/:user_id`

\- `POST/user/register`

\- `POST /user/login`

**### Contact**

\- `GET /contact`

\- `POST/contact`

**### Product**

\- `GET /products/`

\- `GET /product/:product_id`

\- `GET /product/:category`

\- `GET /product/:harga` \*url query atau 1 1

\- `GET /product/:product_name`

\- `POST /product/`

\- `PUT /product/:product_id`

\- `DELETE /product/:product_id`

**### Category**

\- `GET /category/`

\- `GET /category/:category_id`

\- `POST /category/`

\- `PUT /category/:category_id`

\- `DELETE /category/:category_id`

**### Cart**

\- `GET /cart/:cart_id`

\- `GET /cart/:cart_code`

\- `GET /cart/:product_id`

\- `POST /cart/`

\- `DELETE /cart/:cart_id`

**### Expedition**

\- `GET /province`

\- `GET /city`

\- `POST /cost/`

**### Address**

\- `GET /address/:cust_id`

\- `GET /address/:address_id`

\- `POST /address/`

\- `PUT/address/:address_id`

\- `DELETE /address/:address_id`

**### Transaction**

\- `GET /transaction/:code_transaction`

\- `GET /transaction/:date_transaction`

\- `POST /transaction/`

\- `PUT/transaction/:code_transaction`

**### Detail Transaction**

\- `GET /detail_transaction/:code_transaction`

\- `POST /detail_transaction/`

**## RESTful endpoints admin**

**### POST/admin/login**

\> POST admin

_*Request Header*_

\```

not needed

\```

_*Request Body*_

\```

{

"email": "<email to get insert into>",

"password": "<password to get insert into>"

}

\```

_*Response (200)*_

\```

{

"code" : 200,

"message" : berhasil,

"data : {

"authorization" : "aklsdjsal;dkjads"

}"

}

\```

_*Response (400- Bad Request)*_

\```

{

"code" : 400,

"message" : "error"

}

\```

_*Response (500 - Internal Server Error)*_

\```

{

"code" : 500,

"message" : "error"

}

\```

\---

**## RESTful endpoints user**

**### POST /user/register**

\> Create new user

_*Request Header*_

\```

not needed

\```

_*Request Body*_

\```

{

"nama" : "<namato get insert into>",

"tanggal_lahir" : "<tanggal_lahirto get insert into>",

"nomor_handphone" : "<nomor_handphoneto get insert into>",

"jenis_kelamin" : "<jenis_kelaminto get insert into>",

"profil": "<profil to get insert into>",

"email": "<email to get insert into>"

"password": "<password to get insert into>"

}

\```

_*Response (201)*_

\```

{

"code": 201,

"message": "success create new User",

"data": {

"id": 3,

​ "nama": "helmi",

​ "tanggal_lahir": "1999 juni 10",

"nomor_handphone": "082229333",

"jenis_kelamin": "laki-laki",

"profil": "profil.jpg",

"email": "helmi123@mail.com"

}

}

\```

_*Response (400 - Bad Request)*_

\```

{

"errors": "email sudah terdaftar!"

}

\```

\```

{

"code": 400,

"message": "input data required",

"error": {

"errors": "error"

}

}

\```

_*Response (500 - Internal Server Error)*_

\```

{

"code": 500,

"message": "error in internal server",

"error": {

​ "errors": "error"

}

}

\```

\---

**### POST /user/login**

\> Compare data login on database with data inputed

_*Request Header*_

\```

not needed

\```

_*Request Body*_

\```

{

"email": "<email to get compare>",

"password": "<password to get compare>"

}

\```

_*Response (200)*_

\```

{

"code": 200,

"message": "success login user",

"data": {

"Authorization": "token"

}

}

\```

_*Response (400 - Bad Request)*_

\```

{

"code": 400,

"message": "input data required",

"error": {

"errors": "error"

}

}

\```

_*Response (500 - Internal Server Error)*_

\```

{

"code": 500,

"message": "error in internal server",

"error": {

​ "errors": "error"

}

}

\```

\---

**### GET /user**

\> Get user

_*Request Header*_

\```

{

"Authorization": "<your Authorization>"

}

\```

_*Request Body*_

\```

not needed

\```

_*Response (200)*_

\```

{

"code": 200,

"message": "success get user by ID",

"data": {

"id": 3,

"nama": "helmi",

"tanggal_lahir": "1999 juni 10",

"nomor_handphone": "082229333",

"jenis_kelamin": "laki-laki",

"profil": "profil.jpg",

"email": "helmi123@mail.com"

}

}

\```

_*Response (500 - Internal Server Error)*_

\```

{

"code": 500,

"message": "error in internal server",

"error": {

    	"errors": "error"

}

}

\```

\---

**## RESTful endpoints contact**

**### GET /kontak**

\> Get all contact

_*Request Header*_

\```

{

"Authorization": "<your Authorization>"

}

\```

_*Request Body*_

\```

not needed

\```

_*Response (200)*_

\```

{

"id" : "<given id by system>",

"name" : "<name to get insert into>",

"date_birth" : "<date_birth to get insert into>",

"handphone_number" : "<handphone_number to get insert into>",

"Gender" : "<Gender to get insert into>",

"address": "<address to get insert into>"

}

\```

_*Response (500 - Internal Server Error)*_

\```

{

"code": 500,

"message": "error in internal server",

"error": {

    "errors": "error"

}

}

\```

**### POST /kontak**

\> Create new contact

_*Request Header*_

\```

{

"Authorization": "<your Authorization>"

}

\```

_*Request Body*_

\```

{

"name" : "<name to get insert into>",

"date_birth" : "<date_birth to get insert into>",

"handphone_number" : "<handphone_number to get insert into>",

"Gender" : "<Gender to get insert into>"

"address": "<address to get insert into>"

}

\```

_*Response (201)*_

\```

{

"code" : 201,

"message" : "success create new kontak",

"data" : [

​ "id" : "<given id by system>",

​ "nama" : "<namato get insert into>",

"tanggal_lahir" : "<tanggal_lahir to get insert into>",

​ "nomor_handphone" : "<nomor_handphone to get insert into>",

"jenis_kelamin" : "<jenis_kelamin to get insert into>"

​ "alamat": "<alamat to get insert into>"

​ ]

}

\```

_*Response (400 - Bad Request)*_

\```

{

"code": 400,

"message": "input data required",

"error": {

"errors": "error"

}

}

\```

_*Response (500 - Internal Server Error)*_

\```

{

"code": 500,

"message": "error in internal server",

"error": {

    "errors": "error"

}

}

\```

**## RESTful endpoints product**

**### GET /produk**

\> Get all products

_*Request Header*_

\```

not needed

\```

_*Request Body*_

\```

not needed

\```

_*Response (200)*_

\```

{

"code": 200,

"message": "success get all produk data",

"data": [

​ {

​ "id": 2,

​ "nama": "mangga",

​ "deskripsi": "jeruk bali",

​ "gambar": "gambar-jeruk.jpg",

​ "takaran": "1kg",

​ "harga": 25000,

​ "promo": "beli 20kg gratis ongkir",

​ "stok": 50,

​ "id_kategori": 1

​ },

​ {

​ "id": 3,

​ "nama": "mangga",

​ "deskripsi": "jeruk bali",

​ "gambar": "gambar-jeruk.jpg",

​ "takaran": "1kg",

​ "harga": 50000,

​ "promo": "beli 20kg gratis ongkir",

​ "stok": 50,

​ "id_kategori": 1

}

​ ]

}

\```

_*Response (500 - Internal Server Error)*_

\```

{

"code": 500,

"message": "error in internal server",

"error": {

    "errors": "error"

}

}

\```

**### GET /produk/:produk_id**

\> Get product by product ID

_*Request Header*_

\```

{

"Authorization": "<your Authorization>"

}

\```

_*Request Body*_

\```

not needed

\```

_*Response (200)*_

\```

{

"code": 200,

"message": "success get produk",

"data": {

​ "id": 4,

​ "nama": "mangga",

​ "deskripsi": "jeruk bali",

​ "gambar": "gambar-jeruk.jpg",

​ "takaran": "1kg",

​ "harga": 100000,

​ "promo": "beli 20kg gratis ongkir",

​ "stok": 50,

​ "id_kategori": 1

}

}

\```

_*Response (400 - Bad Request)*_

\```

{

"code": 400,

"message": "input data required",

"error": {

"errors": "error"

}

}

\```

_*Response (500 - Internal Server Error)*_

\```

{

"code": 500,

"message": "error in internal server",

"error": {

    "errors": "error"

}

}

\```

**### GET /produk/nama/:product_nama**

\> Get product by product category

_*Request Header*_

\```

not needed

\```

_*Request Body*_

\```

not needed

\```

_*Response (200)*_

\```

{

"code": 200,

"message": "success get produk",

"data": {

​ "id": 2,

​ "nama": "mangga",

​ "deskripsi": "jeruk bali",

​ "gambar": "gambar-jeruk.jpg",

​ "takaran": "1kg",

​ "harga": 25000,

​ "promo": "beli 20kg gratis ongkir",

​ "stok": 50,

​ "id_kategori": 1

}

}

\```

_*Response (400 - Bad Request)*_

\```

{

"code": 400,

"message": "input data required",

"error": {

"errors": "error"

}

}

\```

_*Response (500 - Internal Server Error)*_

\```

{

"code": 500,

"message": "error in internal server",

"error": {

    "errors": "error"

}

}

\```

**### GET /product/harga**

\> Get product by price

_*Request Header*_

\```

not needed

\```

_*Request Body*_

\```

form-data

key: dari -> value: int

key: sampai -> int

\```

_*Response (200)*_

\```

{

"code": 200,

"message": "success get produk",

"data": [

​ {

​ "id": 2,

​ "nama": "mangga",

​ "deskripsi": "jeruk bali",

​ "gambar": "gambar-jeruk.jpg",

​ "takaran": "1kg",

​ "harga": 25000,

​ "promo": "beli 20kg gratis ongkir",

​ "stok": 50,

​ "id_kategori": 1

​ },

​ {

​ "id": 3,

​ "nama": "mangga",

​ "deskripsi": "jeruk bali",

​ "gambar": "gambar-jeruk.jpg",

​ "takaran": "1kg",

​ "harga": 50000,

​ "promo": "beli 20kg gratis ongkir",

​ "stok": 50,

​ "id_kategori": 1

​ }

]

}

\```

_*Response (400 - Bad Request)*_

\```

{

"code": 400,

"message": "input data required",

"error": {

"errors": "error"

}

}

\```

_*Response (500 - Internal Server Error)*_

\```

{

"code": 500,

"message": "error in internal server",

"error": {

    "errors": "error"

}

}

\```

**### POST /produk**

\> Create new product

_*Request Header*_

\```

{

"Authorization": "<your Authorization>"

}

\```

_*Request Body*_

\```

{

"nama" : "<name to get insert into>",

"deskripsi" : "<description to get insert into>",

"takaran" : "<takaran to get insert into>",

"harga" : "<price to get insert into>",

"promo" : "<discount to get insert into>",

"stok": "<stock to get insert into>",

"gambar": "<image to get insert into>",

"id_kategori": "<id_category to get insert into>"

}

\```

_*Response (201)*_

\```

{

"code": 201,

"message": "success create new produk",

"data": {

​ "id": 9,

​ "nama": "mangga",

​ "deskripsi": "jeruk bali",

​ "gambar": "gambar-jeruk.jpg",

​ "takaran": "1kg",

​ "harga": 25000,

​ "promo": "beli 20kg gratis ongkir",

​ "stok": 50,

​ "id_kategori": 1

}

}

\```

_*Response (400 - Bad Request)*_

\```

{

"code": 400,

"message": "input data required",

"error": {

"errors": "error"

}

}

\```

_*Response (500 - Internal Server Error)*_

\```

{

"code": 500,

"message": "error in internal server",

"error": {

    "errors": "error"

}

}

\```

**### PUT /produk/:produk_id**

\> Update produk by produkID

_*Request Header*_

\```

{

"Authorization": "<your Authorization>"

}

\```

_*Request Body*_

\```

{

"nama" : "<name to get insert into>",

"deskripsi" : "<description to get insert into>",

"takaran" : "<takaran to get insert into>",

"harga" : "<price to get insert into>",

"promo" : "<discount to get insert into>",

"stok": "<stock to get insert into>",

"gambar": "<image to get insert into>",

"id_kategori": "<id_category to get insert into>"

}

\```

_*Response (200)*_

\```

{

"code": 200,

"message": "success update produk",

"data": {

​ "id": 9,

​ "nama": "manggaaaaa",

​ "deskripsi": "jeruk bali",

​ "gambar": "gambar-jeruk.jpg",

​ "takaran": "1kg",

​ "harga": 25000,

​ "promo": "beli 20kg gratis ongkir",

​ "stok": 50,

​ "id_kategori": 1

}

}

\```

_*Response (400 - Bad Request)*_

\```

{

"code": 400,

"message": "input data required",

"error": {

"errors": "error"

}

}

\```

_*Response (500 - Internal Server Error)*_

\```

{

"code": 500,

"message": "error in internal server",

"error": {

    "errors": "error"

}

}

\```

\---

**### DELETE /product/:product_id**

\> Delete product by ID

_*Request Header*_

\```

{

"Authorization": "<your Authorization>"

}

\```

_*Request Body*_

\```

not needed

\```

_*Response (200)*_

\```

{

"code" : 200,

"message" : "success delete produk"

}

\```

_*Response (500 - Internal Server Error)*_

\```

{

"code": 500,

"message": "error in internal server",

"error": {

    "errors": "error"

}

}

\```

\---

**## RESTful endpoints Category**

**### GET /kategori**

\> Get All kategori

_*Request Header*_

\```

not needed

\```

_*Request Body*_

\```

not needed

\```

_*Response (200)*_

\```

{

"code": 200,

"message": "success get all kategori data",

"data": [

​ {

​ "id": 1,

​ "nama": "buah"

​ }

]

}

\```

_*Response (500 - Internal Server Error)*_

\```

{

"code": 500,

"message": "error in internal server",

"error": {

    "errors": "error"

}

}

\```

\---

**### GET /kategori/:kategori_id**

\> Get category by category ID

_*Request Header*_

\```

not needed

\```

_*Request Body*_

\```

not needed

\```

_*Response (200)*_

\```

{

{

"code": 200,

"message": "success get kategori",

"data": {

​ "id": 1,

​ "nama": "buah"

}

}

\```

_*Response (500 - Internal Server Error)*_

\```

{

"code": 500,

"message": "error in internal server",

"error": {

    "errors": "error"

}

}

\```

**### POST /category**

\> Create new category

_*Request Header*_

\```

{

"Authorization" : "<your Authorization>"

}

\```

_*Request Body*_

\```

{

"name" : "<name to get insert into>",

}

\```

_*Response (201)*_

\```

{

"code": 201,

"message": "success create new kategori",

"data": {

​ "id": 1,

​ "nama": "buah"

}

}

\```

_*Response (400 - Bad Request)*_

\```

{

"code": 400,

"message": "input data required",

"error": {

"errors": "error"

}

}

\```

_*Response (500 - Internal Server Error)*_

\```

{

"code": 500,

"message": "error in internal server",

"error": {

    "errors": "error"

}

}

\```

\---

**### PUT /category/:category_id**

\> Update category by category ID

_*Request Header*_

\```

{

"Authorization": "<your Authorization>"

}

\```

_*Request Body*_

\```

{

"name" : "<name to get insert into>"

}

\```

_*Response (200)*_

\```

{

"code": 200,

"message": "success update kategori",

"data": {

​ "id": 1,

​ "nama": "buahaaa"

}

}

\```

_*Response (400 - Bad Request)*_

\```

{

"code": 400,

"message": "input data required",

"error": {

"errors": "error"

}

}

\```

_*Response (401 - Unauthorized)*_

\```

{

"code": 401,

"message": "unauthorize",

"error": {

"errors": "error"

}

}

\```

_*Response (500 - Internal Server Error)*_

\```

{

"code": 500,

"message": "error in internal server",

"error": {

    "errors": "error"

}

}

\```

\---

**### DELETE /category/:category_id**

\> Delete category by category ID

_*Request Header*_

\```

{

"Authorization": "<your Authorization>"

}

\```

_*Request Body*_

\```

not needed

\```

_*Response (200)*_

\```

{

"code": 200,

"message": "success delete kategori"

}

\```

_*Response (400 - Bad Request)*_

\```

{

"code": 400,

"message": "input data required",

"error": {

"errors": "error"

}

}

\```

_*Response (500 - Internal Server Error)*_

\```

{

"code": 500,

"message": "error in internal server",

"error": {

    "errors": "error"

}

}

\```

\---

**## RESTful endpoints Keranjang**

**### GET /Keranjang/:keranjang_id**

\> Get cart by cart_id

_*Request Header*_

\```

{

"Authorization": "<your Authorization>"

}

\```

_*Request Body*_

\```

not needed

\```

_*Response (200)*_

\```

{

"code" : 200,

"message" : "success get data keranjang",

"data" : [

​ "id" : 1

​ "id_product" : 1,

"id_user" : 1,

"cart_code" : "KB0012012"

​ ]

}

\```

_*Response (400 - error bad request)*_

\```

{

"code": 400,

"message": "input data required",

"error": {

"errors": "error"

}

}

\```

_*Response (500 - Internal Server Error)*_

\```

{

"code": 500,

"message": "error in internal server",

"error": {

    "errors": "error"

}

}

\```

\---

**### GET /keranjang/:kode_keranjang**

\> Get cart by cart code

_*Request Header*_

\```

{

"Authorization": "<your Authorization>"

}

\```

_*Request Body*_

\```

not needed

\```

_*Response (200)*_

\```

{

"code" : 200,

"message" : "success get data keranjang",

"data" : [

​ "id" : 1

​ "id_product" : 1,

"id_user" : 1,

"cart_code" : "KB0012012"

​ ]

}

\```

_*Response (400 - Bad Request)*_

\```

{

"code": 400,

"message": "input data required",

"error": {

"errors": "error"

}

}

\```

_*Response (500 - Internal Server Error)*_

\```

{

"code": 500,

"message": "error in internal server",

"error": {

    "errors": "error"

}

}

\```

\---

**### GET /keranjang/:produk_id**

\> Get cart by produk ID

_*Request Header*_

\```

{

"Authorization": "<your Authorization>"

}

\```

_*Request Body*_

\```

not needed

\```

_*Response (200)*_

\```

{

"code" : 200,

"message" : "success get produk produk in keranjang"

"data" : [

​ "count" : 2

​ ]

}

\```

_*Response (400 - Bad Request)*_

\```

{

"code": 400,

"message": "input data required",

"error": {

"errors": "error"

}

}

\```

_*Response (500 - Internal Server Error)*_

\```

{

"code": 500,

"message": "error in internal server",

"error": {

    "errors": "error"

}

}

\```

**### POST /keranjang**

\> Create new cart

_*Request Header*_

\```

{

"Authorization" : "<your Authorization>"

}

\```

_*Request Body*_

\```

{

"produk_id" : "<produk_idt o get insert into>",

}

\```

_*Response (201)*_

\```

{

"code" : 201,

"message" : "success create new keranjang",

"data" : [

​ "id" : "<given by sistem>"

"id_product" : "<id_product to get insert into>",

​ "id_user" : "<id_user use current user>"

​ "cart_code" : "<given by sistem>"

​ ]

}

\```

_*Response (400 - Bad Request)*_

\```

{

"code": 400,

"message": "input data required",

"error": {

"errors": "error"

}

}

\```

_*Response (500 - Internal Server Error)*_

\```

{

"code": 500,

"message": "error in internal server",

"error": {

    "errors": "error"

}

}

\```

\---

**### DELETE /keranjang/:keranjang_id**

\> Delete keranjangby keranjang ID

_*Request Header*_

\```

{

"Authorization": "<your Authorization>"

}

\```

_*Request Body*_

\```

not needed

\```

_*Response (200)*_

\```

{

"code" : 200,

"message" : "success delete keranjang"

}

\```

_*Response (400 - Bad Request)*_

\```

{

"code": 400,

"message": "input data required",

"error": {

"errors": "error"

}

}

\```

_*Response (500 - Internal Server Error)*_

\```

{

"code": 500,

"message": "error in internal server",

"error": {

    "errors": "error"

}

}

\```

**## RESTful endpoints expedition**

**### GET /provinsi**

\> Get All Province

_*Request Header*_

\```

not needed

\```

_*Request Body*_

\```

not needed

\```

_*Response (200)*_

\```

{

"code" : 200,

"message" "success get all provinsi",

"data" :

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

}

\```

_*Response (500 - Internal Server Error)*_

\```

{

"code": 500,

"message": "error in internal server",

"error": {

    "errors": "error"

}

}

\```

\---

**### GET /city**

\> Get All city

_*Request Header*_

\```

not needed

\```

_*Request Body*_

\```

not needed

\```

_*Response (200)*_

\```

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

\```

_*Response (500 - Internal Server Error)*_

\```

{

"error" : "<posted error>"

}

\```

\---

**## POST /cost/**

\> Post expedition info to get COST information

_*Request Header*_

\```

{

"Authorization" : "<your Authorization>"

}

\```

_*Request Body*_

\```

{

"origin": <given by system>,

"destination": <city id to get insert into>,

"weigth": <product weight to get insert into>,

"courir": "<courier kode to get insert into>",

}

\```

_*Response (201)*_

\```

{

"rajaongkir":{

"query":{

​ "origin":"501",

​ "destination":"114",

​ "weight":1700,

​ "courier":"jne"

},

"status":{

​ "code":200,

​ "description":"OK"

},

"origin_details":{

​ "city_id":"501",

​ "province_id":"5",

​ "province":"DI Yogyakarta",

​ "type":"Kota",

​ "city_name":"Yogyakarta",

​ "postal_code":"55000"

},

"destination_details":{

​ "city_id":"114",

​ "province_id":"1",

​ "province":"Bali",

​ "type":"Kota",

​ "city_name":"Denpasar",

​ "postal_code":"80000"

},

"results":[

​ {

​ "code":"jne",

​ "name":"Jalur Nugraha Ekakurir (JNE)",

​ "costs":[

​ {

​ "service":"OKE",

​ "description":"Ongkos Kirim Ekonomis",

​ "cost":[

​ {

​ "value":38000,

​ "etd":"4-5",

​ "note":""

​ }

​ ]

​ },

​ {

​ "service":"REG",

​ "description":"Layanan Reguler",

​ "cost":[

​ {

​ "value":44000,

​ "etd":"2-3",

​ "note":""

​ }

​ ]

​ },

​ {

​ "service":"SPS",

​ "description":"Super Speed",

​ "cost":[

​ {

​ "value":349000,

​ "etd":"",

​ "note":""

​ }

​ ]

​ },

​ {

​ "service":"YES",

​ "description":"Yakin Esok Sampai",

​ "cost":[

​ {

​ "value":98000,

​ "etd":"1-1",

​ "note":""

​ }

​ ]

​ }

​ ]

​ }

]

}

}

\```

_*Response (400 - Bad Request)*_

\```

{

"code" : 400,

"message" : "error"

}

\```

_*Response (500 - Internal Server Error)*_

\```

{

"code" : 500,

"message" : "error"

}

\```

\---

**## RESTful endpoints Address**

**### GET /address/:cust_id**

\> Get Address by customer id

_*Request Header*_

\```

not needed

\```

_*Request Body*_

\```

not needed

\```

_*Response (200)*_

\```

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

\```

_*Response (500 - Internal Server Error)*_

\```

{

"error" : "<posted error>"

}

\```

\---

**### GET /address/:address_id**

\> Get address by address ID

_*Request Header*_

\```

not needed

\```

_*Request Body*_

\```

not needed

\```

_*Response (200)*_

\```

{

"id" : 2,

"customer_id" : 1,

"name" : "Radika yudhistira",

"province" : "banten",

"city" : "tangerang selatan",

"detail_address" : "alam sutra",

"phone_number":"081383322222"

}

\```

_*Response (500 - Internal Server Error)*_

\```

{

"error" : "<posted error>"

}

\```

**### POST /address**

\> Create new address

_*Request Header*_

\```

{

"Authorization" : "<your Authorization>"

}

\```

_*Request Body*_

\```

{

"id" : <given by system>,

"customer_id" : <customer id to get insert into>,

"name" : "<name to get insert into>",

"province" : "<province to get insert into>",

"city" : "<city to get insert into>",

"detail_address" : "<detail address to get insert into>",

"phone_number":"<phone number to get insert into>"

}

\```

_*Response (201)*_

\```

{

"id" : <given by system>,

"customer_id" : <customer id to get insert into>,

"name" : "<name to get insert into>",

"province" : "<province to get insert into>",

"city" : "<city to get insert into>",

"detail_address" : "<detail address to get insert into>",

"phone_number":"<phone number to get insert into>"

}

\```

_*Response (400 - Bad Request)*_

\```

{

"code" : 400,

"message" : "error"

}

\```

_*Response (500 - Internal Server Error)*_

\```

{

"code" : 500,

"message" : "error"

}

\```

\---

**### PUT /address/:address_id**

\> Update address by address ID

_*Request Header*_

\```

{

"Authorization": "<your Authorization>"

}

\```

_*Request Body*_

\```

{

"name" : "<name to get insert into>",

"province" : "<province to get insert into>",

"city" : "<city to get insert into>",

"detail_address" : "<detail address to get insert into>",

"phone_number":"<phone number to get insert into>"

}

\```

_*Response (200)*_

\```

{

"id" : <given by system>,

"customer_id" : <customer id to get insert into>,

"name" : "<name to get insert into>",

"province" : "<province to get insert into>",

"city" : "<city to get insert into>",

"detail_address" : "<detail address to get insert into>",

"phone_number":"<phone number to get insert into>"

}

\```

_*Response (400 - Bad Request)*_

\```

{

"code" : 400,

"message" : "error"

}

\```

_*Response (401 - Unauthorized)*_

\```

{

"code" : 401,

"message" : "error"

}

\```

_*Response (500 - Internal Server Error)*_

\```

{

"code" : 500,

"message" : "error"

}

\```

\---

**### DELETE /address/:address_id**

\> Delete address by address ID

_*Request Header*_

\```

{

"Authorization": "<your Authorization>"

}

\```

_*Request Body*_

\```

not needed

\```

_*Response (200)*_

\```

{

"code" : 200,

"message" : "success delete address"

}

\```

_*Response (400 - Bad Request)*_

\```

{

"code" : 400,

"message" : "error"

}

\```

_*Response (500 - Internal Server Error)*_

\```

{

"code" : 500,

"message" : "error"

}

\```

\---

**## RESTful endpoints Transaction**

**### GET /transaction/:code_transaction**

\> Get transaction by code_transaction

_*Request Header*_

\```

{

"Authorization": "<your Authorization>"

}

\```

_*Request Body*_

\```

not needed

\```

_*Response (200)*_

\```

{

"code_transaction" : 1

"status" : "menunggu pembayaran",

"payment_account" : "transfer",

"payment_total" : 120000,

"transaction_date" : "2019-01-01",

"cart_code" : 1,

"customer_id" : 1

}

\```

_*Response (400 - error bad request)*_

\```

{

"code" : 400,

"message" : "error"

}

\```

_*Response (500 - Internal Server Error)*_

\```

{

"code" : 500,

"message" : "error"

}

\```

\---

**### GET /transaction/:date_transaction**

\> Get transaction by date_transaction

_*Request Header*_

\```

{

"Authorization": "<your Authorization>"

}

\```

_*Request Body*_

\```

not needed

\```

_*Response (200)*_

\```

{

"code_transaction" : 1

"status" : "menunggu pembayaran",

"payment_account" : "transfer",

"payment_total" : 120000,

"transaction_date" : "2019-01-01",

"cart_code" : 1,

"customer_id" : 1

}

\```

_*Response (400 - Bad Request)*_

\```

{

"code" : 400,

"message" : "error"

}

\```

_*Response (500 - Internal Server Error)*_

\```

{

"code" : 500,

"message" : "error"

}

\```

**### POST /transaction**

\> Create new transaction

_*Request Header*_

\```

{

"Authorization" : "<your Authorization>"

}

\```

_*Request Body*_

\```

{

"status" : "<status to get insert into>",

"payment_account" : "<payment_account to get insert into>",

"payment_total" : <payment_total to get insert into>,

"transaction_date" : "<transaction_date to get insert into>",

}

\```

_*Response (201)*_

\```

{

"code_transaction" : <given by system>

"status" : "<status to get insert into>",

"payment_account" : "<payment_account to get insert into>",

"payment_total" : <payment_total to get insert into>,

"transaction_date" : "<transaction_date to get insert into>",

"cart_code" : <given by system>,

"customer_id" : <given by system>

}

\```

_*Response (400 - Bad Request)*_

\```

{

"code" : 400,

"message" : "error"

}

\```

_*Response (500 - Internal Server Error)*_

\```

{

"code" : 500,

"message" : "error"

}

\```

\---

**### PUT /transaction/:code_transaction**

\> Update transaction by code_transaction

_*Request Header*_

\```

{

"Authorization": "<your Authorization>"

}

\```

_*Request Body*_

\```

{

"status" : "<status to get insert into>"

}

\```

_*Response (200)*_

\```

{

"code_transaction" : <given by system>

"status" : "<status to get insert into>",

"payment_account" : "<payment_account to get insert into>",

"payment_total" : <payment_total to get insert into>,

"transaction_date" : "<transaction_date to get insert into>",

"cart_code" : <given by system>,

"customer_id" : <given by system>

}

\```

_*Response (400 - Bad Request)*_

\```

{

"code" : 400,

"message" : "error"

}

\```

_*Response (401 - Unauthorized)*_

\```

{

"code" : 401,

"message" : "error"

}

\```

_*Response (500 - Internal Server Error)*_

\```

{

"code" : 500,

"message" : "error"

}

\```

\---

**## RESTful endpoints Detail Transaction**

**### GET /detail_transaction/:code_transaction**

\> GET detail transaction by code transaction

_*Request Header*_

\```

{

"Authorization": "<your Authorization>"

}

\```

_*Request Body*_

\```

not needed

\```

_*Response (200)*_

\```

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

\```

_*Response (400 - Bad Request)*_

\```

{

"code" : 400,

"message" : "error"

}

\```

_*Response (500 - Internal Server Error)*_

\```

{

"code" : 500,

"message" : "error"

}

\```

\---

**## POST /detail_transaction/**

\> POST detail transaction

_*Request Header*_

\```

{

"Authorization" : "<your Authorization>"

}

\```

_*Request Body*_

\```

{

"code_transaction" : <code transaction to get insert into>,

"address_id":<address id to get insert into>,

"courier":"<courier to get insert>",

"cost": "<cost to get insert>"

}

\```

_*Response (201)*_

\```

{

"code_detail_transaction": <given by system>,

"code_transaction" : <code transaction to get insert into>,

"address_id":<address id to get insert into>,

"courier":"<courier to get insert>",

"cost": "<cost to get insert>"

}

\```

_*Response (400 - Bad Request)*_

\```

{

"code" : 400,

"message" : "error"

}

\```

_*Response (500 - Internal Server Error)*_

\```

{

"code" : 500,

"message" : "error"

}

\```

\---
