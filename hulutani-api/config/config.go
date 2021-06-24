package config

import (
	"fmt"
	"os"

	"github.com/joho/godotenv"
	"gorm.io/driver/mysql"
	"gorm.io/gorm"
)

// https://remotemysql.com/phpmyadmin/index.php?db=VezKtudqXJ

// Username: VezKtudqXJ

// Database name: VezKtudqXJ

// Password: sazhIHGPXj

// Server: remotemysql.com

// Port: 3306

func Connection() *gorm.DB {

	err := godotenv.Load()

	dbUser := os.Getenv("DB_USERNAME")
	dbPass := os.Getenv("DB_PASSWORD")
	dbHost := os.Getenv("DB_HOST")
	dbName := os.Getenv("DB_NAME")

	dsn := fmt.Sprintf("%s:%s@tcp(%s)/%s?charset=utf8mb4&parseTime=True&loc=Local", dbUser, dbPass, dbHost, dbName)
	// dsn := "root:@tcp(localhost)/hulutani"
	if err != nil {
		panic(err.Error())
	}

	db, err := gorm.Open(mysql.Open(dsn), &gorm.Config{})

	if err != nil {
		panic(err.Error())
	}

	// db.AutoMigrate(&migration.Pelanggan{})
	// db.AutoMigrate(&migration.Admin{})
	// db.AutoMigrate(&migration.Produk{})
	// db.AutoMigrate(&migration.Kontak{})
	// db.AutoMigrate(&migration.KeranjangBelanja{})
	// db.AutoMigrate(&migration.Transaksi{})
	// db.AutoMigrate(&migration.DetailTransaksi{})
	// db.AutoMigrate(&migration.Alamat{})
	// db.AutoMigrate(&migration.Kategori{})
	// db.AutoMigrate(&migration.Provinsi{})
	// db.AutoMigrate(&migration.Kota{})

	return db
}
