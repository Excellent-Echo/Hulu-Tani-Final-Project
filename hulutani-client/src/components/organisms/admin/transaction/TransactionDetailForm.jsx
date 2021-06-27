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
      <div className="w-100 bg-light border border-3 p-4 admin-transaction-detail">
        <div className="row border-bottom border-3 pb-4">
          <div className="col">
            <div>Nama</div>
            <div>[Nama pengirim]</div>
          </div>
          <div className="col">
            <div>Surel</div>
            <div>[Alamat surel]</div>
          </div>
          <div className="col">
            <div>Telepon</div>
            <div>[Nomor Telepon]</div>
          </div>
        </div>

        <div className="row border-bottom border-3 py-4">
          <div className="col ">
            <div>Kode Transaksi</div>
            <div>[Kode Transaksi]</div>
          </div>
          <div className="col">
            <div>Metode Pembayaran</div>
            <div>[Metode Pembayaran]</div>
          </div>
          <div className="col">
            <div>Alamat Pengiriman</div>
            <div>[Alamat Pengiriman]</div>
          </div>
        </div>

        <div className="border-bottom border-3 py-4">
          <div className="mb-4">
            <div className="mb-4">Kantong Belanja</div>
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
                    <td>[No]</td>
                    <td>[Nama Produk]</td>
                    <td>[Kategori]</td>
                    <td>[Jumlah]</td>
                    <td>[Harga]</td>
                  </tr>
                </tbody>
              </table>
              <div className="d-flex justify-content-between">
                <div>SubTotal</div>
                <div>[Subtotal]</div>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-4">Jasa Pengiriman</div>
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
                    <td>[Nama Jasa]</td>
                    <td>[Estimasi]</td>
                    <td>[Harga]</td>
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
          <div className="mb-4">Bukti Pembayaran</div>
          <img
            className="border border-3"
            width="100%"
            src="https://cdn1-production-images-kly.akamaized.net/RS-TgnbQ0FawEgkDQCEGeQMRmYk=/640x480/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2788283/original/058257500_1556184725-iStock-910127132.jpg"
            alt="Proof transaction"
          />
        </div>
      </div>
    );
  };

export default TransactionDetailForm;