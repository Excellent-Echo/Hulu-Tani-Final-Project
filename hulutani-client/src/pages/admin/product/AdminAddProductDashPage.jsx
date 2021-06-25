import "../styles.css";
import { Link } from "react-router-dom";
import React from "react";
import Header from "../../../components/organisms/admin/AdminHeader";
import SideNavBar from "../../../components/organisms/admin/AdminSideNavBar";
import AddProductForm from "../../../components/organisms/admin/product/AddProductForm";

const AdminAddProductDashPage = () => {
  return (
    <div className="w-100 vh-100 user-select-none">
      <SideNavBar />

      <Header />

      <div className="admin-content h-100 container py-3 vh-100 float-end">
        <div className="w-100 h-auto">
          <nav aria-label="breadcrumb">
            <ol className="h3 breadcrumb">
              <li className="breadcrumb-item" aria-current="page">
                <Link to="/admin/dash/product">Produk</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Tambah
              </li>
            </ol>
          </nav>

          <AddProductForm />
        </div>
      </div>
    </div>
  );
};

export default AdminAddProductDashPage;