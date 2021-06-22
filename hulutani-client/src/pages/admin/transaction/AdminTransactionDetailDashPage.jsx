import React from "react";
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
              <div></div>
              {/* shopping information */}
              {/* proof transaction */}
              <div></div>
              {/* proof transaction */}
            </div>
          </div>
        </div>
      </div>
    );
  };

export default AdminTransactionDetailDashPage;