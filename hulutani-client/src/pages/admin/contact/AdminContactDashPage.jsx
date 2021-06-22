import React from "react";
import SideNavBar from "../../../components/organisms/admin/SideNavBar/SideAdminNavBar";
import HeaderAdmin from "../../../components/organisms/admin/HeaderAdmin/HeaderAdmin";
import { Link } from "react-router-dom";
import SideAdminNavBar from "../../../components/organisms/admin/SideNavBar/SideAdminNavBar";

const THs = [
    { scope: "col", name: "Nama" },
    { scope: "col", name: "Surel" },
    { scope: "col", name: "Telepon" },
    { scope: "col", name: "Jenis Kelamin" },
    { scope: "col", name: "Tanggal Lahir" },
  ],
  AdminContactDashPage = () => {
    return (
      <div className="user-select-none">
        <HeaderAdmin />
        <SideAdminNavBar />

        <div className="admin-content-container">
          <div className="h-75 ahdp_recent">
            <h3 className="h-25 d-flex align-items-center">Kontak</h3>

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
                    <i className="fas fa-address-book"></i> [Nama Kontak]
                  </td>
                  <td>[Surel]</td>
                  <td>[Telepon]</td>
                  <td>[Jenis Kelamin]</td>
                  <td>[Tanggal Lahir]</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  };

export default AdminContactDashPage;