import React, { useRef, useEffect, useCallback } from "react";
import HeaderAdmin from "../../../components/organisms/admin/HeaderAdmin/HeaderAdmin";
import SideAdminNavBar from "../../../components/organisms/admin/SideNavBar/SideAdminNavBar";

const personals = [
    { title: "Nama", value: "[Nama Pembeli]" },
    { title: "Surel", value: "[Surel]" },
    { title: "Telepon", value: "[Telepon]" },
  ],
  transactions = [
    { title: "Kode Transaksi", value: "[Kode Transaksi]" },
    { title: "Kode Transaksi", value: "[Metode Pembayaran]" },
    { title: "Kode Transaksi", value: "[Alamat Pengiriman]" },
  ],
  cartTHs = [
    { scope: "col", name: "Nama Produk" },
    { scope: "col", name: "Kategori" },
    { scope: "col", name: "Jumlah" },
    { scope: "col", name: "Harga" },
  ],
  AdminTransactionDetailDashPage = () => {
    return (
      <div className="user-select-none">
        <HeaderAdmin />
        <SideAdminNavBar />

        <div className="admin-content-container">
          <div className="h-75 ahdp_recent">
            <div className="d-flex justify-content-between my-3">
              <h3 className="h-25 d-flex align-items-center">
                Transaksi > Detail
              </h3>

              <button className="btn btn-success text-white">Konfirmasi</button>
            </div>

            <div className="bg-white p-3 rounded-3 border border-3 border-dark">
              {/* personal information */}
              <div className="border-bottom row">
                {personals.map((personal) => (
                  <div className="col mb-3">
                    <div>{personal.title}</div>
                    <div>{personal.value}</div>
                  </div>
                ))}
              </div>
              {/* personal information */}

              {/* transaction information */}
              <div className="border-bottom row">
                {transactions.map((transaction) => (
                  <div className="col my-3">
                    <div>{transaction.title}</div>
                    <div>{transaction.value}</div>
                  </div>
                ))}
              </div>
              {/* transaction information */}

              {/* shopping information */}
              <div className="h-75 ahdp_recent">
                <h3 className="h-25 d-flex align-items-center">
                  Kantong Belanja
                </h3>

                <table className="table table-hover mb-5">
                  <thead>
                    <tr>
                      {cartTHs.map((cartTH) => (
                        <th scope={cartTH.scope}>{cartTH.name}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row">
                        <i className="fas fa-money-check"></i> [Kode Transaksi]
                      </td>
                      <td>[Jumlah Transaksi]</td>
                      <td>[Status Transaksi]</td>
                      <td>[Tanggal Transaksi]</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* shopping information */}

              {/* proof transaction */}
              <div className="h-75 ahdp_recent">
                <h3 className="h-25 d-flex align-items-center">
                  Jasa Pengiriman
                </h3>

                <table className="table table-hover mb-5">
                  <thead>
                    <tr>
                      {cartTHs.map((cartTH) => (
                        <th scope={cartTH.scope}>{cartTH.name}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td scope="row">
                        <i className="fas fa-money-check"></i> [Kode Transaksi]
                      </td>
                      <td>[Jumlah Transaksi]</td>
                      <td>[Status Transaksi]</td>
                      <td>[Tanggal Transaksi]</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* proof transaction */}

              {/* total */}
              <div className="border-bottom d-flex justify-content-between">
                <div className="d-flex">Total</div>
                <div className="d-flex">[Rp 8937482935]</div>
              </div>
              {/* total */}

              {/* bukti transakti */}
              <div className="d-flex justify-content-center">
                <div className="my-5 h-25">
                  <img
                    src="https://images.unsplash.com/photo-1475778057357-d35f37fa89dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                    alt=""
                  />
                </div>
              </div>
              {/* bukti transakti */}
            </div>
          </div>
        </div>
      </div>
    );
  };

export default AdminTransactionDetailDashPage;