import React from "react";
import { Link } from "react-router-dom";
import AdminHeader from "../../../components/organisms/admin/AdminHeader";
import AdminSideNavBar from "../../../components/organisms/admin/AdminSideNavBar";
import AddCategoryForm from "../../../components/organisms/admin/category/AddCategoryForm";

const AdminEditCategoryDashPage = () => {
  return (
    <div className="user-select-none w-100 vh-100">
      <AdminSideNavBar />

      <AdminHeader />

      <div className="w-75 h-100 float-end p-2">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              <Link to="/admin/dash/category">Kategori</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Ubah
            </li>
          </ol>
        </nav>

        <AddCategoryForm />
      </div>
    </div>
  );
};

export default AdminEditCategoryDashPage;