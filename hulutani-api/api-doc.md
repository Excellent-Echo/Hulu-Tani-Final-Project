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

### Transaction

- `GET /transaction/:code_transaction`
- `GET /transaction/:date_transaction`
- `POST /transaction/`
- `PUT/transaction/:code_transaction`

### Expedition

- `GET /province`
- `GET /city`
- `POST /cost/`

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
