import React from "react";

const cartThs = [
    { name: "No" },
    { name: "Nama Produk" },
    { name: "Kategori" },
    { name: "Jumlah" },
    { name: "Harga" },
  ],
  deliveryThs = [
    { name: "Nama Jasa Pengiriman" },
    { name: "Estimasi Pengiriman" },
    { name: "Harga" },
  ],
  TransactionDetailForm = () => {
    return (
      <div className="pb-4">
        <div className="w-100 bg-light border border-3 p-4 admin-transaction-detail">
          <div className="row row-cols-lg-3 row-cols-sm-1 border-bottom border-3">
            <div className="mb-4">
              <p>Nama Pembeli</p>
              <p>[Nama Pembeli]</p>
            </div>
            <div className="mb-4">
              <p>Alamat Surel</p>
              <p>[Alamat surel]</p>
            </div>
            <div className="mb-4">
              <p>Nomor Telepon</p>
              <p>[Nomor Telepon]</p>
            </div>
          </div>

          <div className="row row-cols-lg-3 row-cols-sm-1 border-bottom border-3 pt-4">
            <div className="mb-4">
              <p>Kode Transaksi</p>
              <p>[Kode Transaksi]</p>
            </div>
            <div className="mb-4">
              <p>Metode Pembayaran</p>
              <p>[Metode Pembayaran]</p>
            </div>
            <div className="mb-4">
              <p>Alamat Pengiriman</p>
              <p>[Alamat Pengiriman]</p>
            </div>
          </div>

          <div className="border-bottom border-3 py-4">
            <div className="mb-4">
              <p className="mb-4">Kantong Belanja</p>
              <div className="table-responsive">
                <table className="table table-borderless">
                  <thead className="table-light">
                    <tr>
                      {cartThs.map((th) => (
                        <th className="text-center">{th.name}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">[No]</td>
                      <td className="text-center">[Nama Produk]</td>
                      <td className="text-center">[Kategori]</td>
                      <td className="text-center">[Jumlah]</td>
                      <td className="text-center">[Harga]</td>
                    </tr>
                  </tbody>
                </table>
                <div className="d-flex justify-content-between">
                  <p>SubTotal</p>
                  <p>[Subtotal]</p>
                </div>
              </div>
            </div>

            <div>
              <p className="mb-4">Jasa Pengiriman</p>
              <div className="table-responsive">
                <table className="table table-borderless">
                  <thead className="table-light">
                    <tr>
                      {deliveryThs.map((th) => (
                        <th className="text-center">{th.name}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-center">[Nama Jasa]</td>
                      <td className="text-center">[Estimasi]</td>
                      <td className="text-center">[Harga]</td>
                    </tr>
                  </tbody>
                </table>
                <div className="d-flex justify-content-between">
                  <div>Total</div>
                  <div>[Total]</div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <p className="mb-4">Bukti Pembayaran</p>
            <img
              className="border border-3 admin-proof-transaction"
              width="100%"
              src="https://cdn1-production-images-kly.akamaized.net/RS-TgnbQ0FawEgkDQCEGeQMRmYk=/640x480/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2788283/original/058257500_1556184725-iStock-910127132.jpg"
              alt="Proof transaction"
            />
          </div>
        </div>
      </div>
    );
  };

export default TransactionDetailForm;