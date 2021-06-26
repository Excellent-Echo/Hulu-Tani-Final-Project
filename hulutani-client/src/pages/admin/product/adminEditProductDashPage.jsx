import React from "react";
import { Link } from "react-router-dom";
import AdminSideNavBar from "../../../components/organisms/admin/AdminSideNavBar";
import AdminHeader from "../../../components/organisms/admin/AdminHeader";

const AdminEditProductDashPage = () => {
  return (
    <div className="user-select-none w-100 vh-100">
      <AdminSideNavBar />

      <AdminHeader />

      <div className="w-75 h-100 float-end p-2">
        <div className="d-flex justify-content-between mb-2">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item active" aria-current="page">
                Produk
              </li>
            </ol>
          </nav>

          <Link to="/admin/dash/product/add">
            <button type="button" className="btn btn-primary">
              Tambah
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminEditProductDashPage;