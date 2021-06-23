import React from "react";
import SideNavBar from "../../../components/Admin/SideNavBar";
import HeaderAdmin from "../HeaderAdmin";
import { Link } from "react-router-dom";

const THs = [
    { scope: "col", name: "Nama" },
    { scope: "col", name: "Surel" },
    { scope: "col", name: "Telepon" },
    { scope: "col", name: "Jenis Kelamin" },
    { scope: "col", name: "Tanggal Lahir" },
  ],
  AdminContactDashPage = () => {
    return (
      <div className="d-flex user-select-none">
        <SideNavBar />

        <div className="d-flex flex-column vh-100 vw-100">
          <HeaderAdmin />

          <div className="h-100 w-100 px-4">
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
      </div>
    );
  };

export default AdminContactDashPage;
