package config

import (
	"hulutani-api/migration"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

func Connection() *gorm.DB {

	dsn := "root:@tcp(localhost)/hulutani"

	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		panic(err.Error())
	}

	db.AutoMigrate(&migration.Pelanggan{})
	db.AutoMigrate(&migration.Admin{})
	db.AutoMigrate(&migration.Produk{})
	db.AutoMigrate(&migration.Kontak{})
	db.AutoMigrate(&migration.KeranjangBelanja{})
	db.AutoMigrate(&migration.Transaksi{})
	db.AutoMigrate(&migration.DetailTransaksi{})
	db.AutoMigrate(&migration.Alamat{})
	db.AutoMigrate(&migration.Kategori{})
	db.AutoMigrate(&migration.Provinsi{})
	db.AutoMigrate(&migration.Kota{})

	return db
}
