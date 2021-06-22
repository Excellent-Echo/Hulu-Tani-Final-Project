import React from "react";
import SideNavBar from "../../../components/organisms/admin/SideNavBar/SideAdminNavBar";
import HeaderAdmin from "../../../components/organisms/admin/HeaderAdmin/HeaderAdmin";
import { Link } from "react-router-dom";
import SideAdminNavBar from "../../../components/organisms/admin/SideNavBar/SideAdminNavBar";

const THs = [
    { scope: "col", name: "Kode Transaksi" },
    { scope: "col", name: "Status" },
    { scope: "col", name: "Aksi" },
  ],
  AdminTransactionDashPage = () => {
    return (
      <div className="user-select-none">
        <HeaderAdmin />
        <SideAdminNavBar />

        <div className="admin-content-container">
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
    );
  };

export default AdminTransactionDashPage;