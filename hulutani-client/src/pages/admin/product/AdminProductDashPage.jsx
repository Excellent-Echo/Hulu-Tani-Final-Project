import React from "react";
import { Link } from "react-router-dom";
import AdminHeaderLarge from "../../../components/organisms/admin/AdminHeader";
import AdminSideNavBar from "../../../components/organisms/admin/AdminSideNavBar";
import ProductTable from "../../../components/organisms/admin/product/ProductTable";

const AdminProductDashPage = () => {
  return (
    <div className="user-select-none w-100 vh-100">
      <AdminSideNavBar />

      <AdminHeaderLarge />

      <div className="admin-content-container h-100 float-end p-4 mb-4">
        <div className="d-flex justify-content-between mb-2">
          <nav>
            <ol className="breadcrumb">
              <li className="breadcrumb-item h3">Produk</li>
            </ol>
          </nav>

          <Link to="/admin/dash/product/add">
            <button type="button" className="btn btn-primary">
              Tambah
            </button>
          </Link>
        </div>

        <ProductTable />
      </div>
    </div>
  );
};

export default AdminProductDashPage;