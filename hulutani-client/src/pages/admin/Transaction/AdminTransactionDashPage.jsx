import React from "react";
import SideNavBar from "../../../components/Admin/SideNavBar";
import HeaderAdmin from "../HeaderAdmin";
import { Link } from "react-router-dom";

const THs = [
    { scope: "col", name: "Kode Transaksi" },
    { scope: "col", name: "Status" },
    { scope: "col", name: "Aksi" },
  ],
  AdminTransactionDashPage = () => {
    return (
      <div className="d-flex user-select-none">
        <SideNavBar />

        <div className="d-flex flex-column vh-100 vw-100">
          <HeaderAdmin />

          <div className="h-100 w-100 px-4">
            <div className="h-75 ahdp_recent">
              <h3 className="h-25 d-flex align-items-center">Transaksi</h3>

              <table className="table table-hover mb-5">
                <thead>
                  <tr>
                    {THs.map((TH) => (
                      <th scope={TH.scope}>{TH.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  <tr className="">
                    <td>
                      <i className="fas fa-money-check"></i> [Kode Transaksi]
                    </td>
                    <td>[Status]</td>
                    <td className="d-flex">
                      <Link to="/admin/dash/transaction/detail">
                        Lihat detail
                      </Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default AdminTransactionDashPage;
