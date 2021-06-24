package keranjang

import (
	"fmt"
	"strconv"
	"time"
)

func KodeFormat(id int) int {
	tanggalTransaksi := time.Now()
	hari := tanggalTransaksi.Day()
	bulan := int(tanggalTransaksi.Month())
	jam := tanggalTransaksi.Hour()
	menit := tanggalTransaksi.Minute()
	// idString := strconv.Itoa(id)
	kode := fmt.Sprintf("%d%d%d%d%d", id, hari, bulan, jam, menit)
	KodeTransaksi, _ := strconv.Atoi(kode)

	return KodeTransaksi
}
