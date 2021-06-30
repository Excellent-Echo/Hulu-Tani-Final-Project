package transaksi

import (
	"crypto/rand"
	"fmt"
	"time"
)

func KodeFormat(id int) string {
	hari := time.Now().Day()
	bulan := int(time.Now().Month())
	unique, _ := rand.Prime(rand.Reader, 10)

	kode := fmt.Sprintf("KT%d%d%d%d", id, hari, bulan, unique)

	return kode
}
