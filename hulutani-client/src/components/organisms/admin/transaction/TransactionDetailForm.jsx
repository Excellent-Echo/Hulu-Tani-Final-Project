import React, { useEffect } from "react";
// import { useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import adminShowTransactionDetailAction from "../../../../redux/admin/transaction/detail/adminShowTransactionDetailAction";
import NumberFormat from "react-number-format";
const cartThs = [
    { name: "Nama Produk" },
    { name: "Jumlah" },
    { name: "Harga" },
  ],
  TransactionDetailForm = () => {
    const adminTransactionDetailData = useSelector(
        (state) => state.adminShowTransactionDetail
      );

    // useEffect(() => {
    //   dispatch(adminShowTransactionDetailAction.getTransactionDetail(code));
    // }, []);


    return (
      <div className="pb-4">
        <form className="w-100 bg-light border border-3 p-4 admin-transaction-detail">
          <div className="row row-cols-lg-3 row-cols-sm-1 border-bottom border-3">
            <div className="mb-4">
              <h5>Nama Penerima</h5>
              <p>{adminTransactionDetailData.nama}</p>
            </div>
            <div className="mb-4">
              <h5>Nomor Telepon</h5>
              <p>
                {adminTransactionDetailData.telepon}
              </p>
            </div>
            <div className="mb-4">
              <h5>Kode Transaksi</h5>
              <p>{adminTransactionDetailData.kode}</p>
            </div>
          </div>

          <div className="row row-cols-lg-3 row-cols-sm-1 border-bottom border-3 pt-4">
            <div className="mb-4">
              <h5>Metode Pembayaran</h5>
              <p>{adminTransactionDetailData.metode}</p>
            </div>
            <div className="mb-4">
              <h5>Alamat Pengiriman</h5>
              <p>{adminTransactionDetailData.alamat}</p>
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
                      <td className="text-center">{adminTransactionDetailData.produk}</td>
                      <td className="text-center">{adminTransactionDetailData.qty}</td>
                      <td className="text-center"><NumberFormat value={adminTransactionDetailData.hargaProduk * adminTransactionDetailData.qty} displayType={'text'} thousandSeparator={true} prefix={'Rp'}/></td>
                    </tr>
                  </tbody>
                </table>
                <div className="d-flex justify-content-between">
                  <p>Ongkir</p>
                  <p>
                  <NumberFormat value={adminTransactionDetailData.harga - adminTransactionDetailData.hargaProduk * adminTransactionDetailData.qty} displayType={'text'} thousandSeparator={true} prefix={'Rp'}/>
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>Total</p>
                  <p><NumberFormat value={adminTransactionDetailData.harga} displayType={'text'} thousandSeparator={true} prefix={'Rp'}/></p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <h5 className="mb-4">Bukti Pembayaran</h5>
            <img
              className="border border-3 admin-proof-transaction"
              width="100%"
              src={adminTransactionDetailData.bukti}
              alt="Proof transaction"
            />
          </div>
        </form>
      </div>
    );
  };

export default TransactionDetailForm;