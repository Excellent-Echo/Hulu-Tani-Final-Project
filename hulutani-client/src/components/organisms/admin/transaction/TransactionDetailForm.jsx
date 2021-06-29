import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import adminShowTransactionDetailAction from "../../../../redux/admin/transaction/detail/adminShowTransactionDetailAction";

const cartThs = [
    { name: "No" },
    { name: "Nama Produk" },
    { name: "Jumlah" },
    { name: "Harga" },
  ],
  TransactionDetailForm = () => {
    const { code } = useParams(),
      dispatch = useDispatch(),
      adminTransactionDetailData = useSelector(
        (state) => state.adminShowTransactionDetail.transactionDetails
      );

    console.log(adminTransactionDetailData);

    useEffect(() => {
      console.log(adminTransactionDetailData);
      dispatch(adminShowTransactionDetailAction.getTransactionDetail(code));
    }, []);

    return (
      <div className="pb-4">
        <form className="w-100 bg-light border border-3 p-4 admin-transaction-detail">
          <div className="row row-cols-lg-3 row-cols-sm-1 border-bottom border-3">
            <div className="mb-4">
              <h5>Nama Penerima</h5>
              {/*<p>{adminTransactionDetailData.alamat.nama_penerima}</p>*/}
            </div>
            <div className="mb-4">
              <h5>Nomor Telepon</h5>
              <p>
                {/*{adminTransactionDetailData.alamat.nomor_handphone_penerina}*/}
              </p>
            </div>
            <div className="mb-4">
              <h5>Kode Transaksi</h5>
              <p>{adminTransactionDetailData.kode_transaksi}</p>
            </div>
          </div>

          <div className="row row-cols-lg-3 row-cols-sm-1 border-bottom border-3 pt-4">
            <div className="mb-4">
              <h5>Metode Pembayaran</h5>
              <p>{adminTransactionDetailData.metode_pembayaran}</p>
            </div>
            <div className="mb-4">
              <h5>Alamat Pengiriman</h5>
              <p>{adminTransactionDetailData.alamat.alamat_detail}</p>
            </div>
            <div className="mb-4">
              <h5>Status Transaksi</h5>
              <p>{adminTransactionDetailData.status}</p>
            </div>
          </div>

          <div className="border-bottom border-3 py-4">
            <div className="mb-4">
              <h5 className="mb-4">Daftar Belanja</h5>
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
                      <td className="text-center">[Nama Barang]</td>
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
          </div>

          <div className="pt-4">
            <h5 className="mb-4">Bukti Pembayaran</h5>
            <img
              className="border border-3 admin-proof-transaction"
              width="100%"
              src="https://cdn1-production-images-kly.akamaized.net/RS-TgnbQ0FawEgkDQCEGeQMRmYk=/640x480/smart/filters:quality(75):strip_icc():format(jpeg)/kly-media-production/medias/2788283/original/058257500_1556184725-iStock-910127132.jpg"
              alt="Proof transaction"
            />
          </div>
        </form>
      </div>
    );
  };

export default TransactionDetailForm;