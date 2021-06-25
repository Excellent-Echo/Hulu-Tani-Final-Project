import React from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/organisms/admin/AdminHeader";
import SideNavBar from "../../../components/organisms/admin/AdminSideNavBar";
import AddCategoryForm from "../../../components/organisms/admin/category/AddCategoryForm";

const AdminAddCategoryDashPage = () => {
  return (
    <div className="w-100 vh-100 user-select-none">
      <SideNavBar />

      <Header />

      <div className="admin-content h-100 container py-3 vh-100 float-end">
        <div className="w-100 h-auto">
          <nav aria-label="breadcrumb">
            <ol className="h3 breadcrumb">
              <li className="breadcrumb-item" aria-current="page">
                <Link to="/admin/dash/category">Kategori</Link>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Tambah
              </li>
            </ol>
          </nav>

          <AddCategoryForm />
        </div>
      </div>
    </div>
  );
};

export default AdminAddCategoryDashPage;