import React from "react";
import { Link } from "react-router-dom";
import AdminHeaderLarge from "../../../components/organisms/admin/AdminHeader";
import AdminSideNavBar from "../../../components/organisms/admin/AdminSideNavBar";
import AddCategoryForm from "../../../components/organisms/admin/category/AddCategoryForm";

const AdminAddCategoryDashPage = () => {
  return (
    <div className="user-select-none w-100 vh-100">
      <AdminSideNavBar />

      <AdminHeaderLarge />

      <div className="admin-content-container h-100 float-end p-4">
        <nav>
          <ol className="breadcrumb h3">
            <li className="breadcrumb-item">
              <Link to="/admin/dash/category">Kategori</Link>
            </li>
            <li className="breadcrumb-item">Tambah</li>
          </ol>
        </nav>

        <AddCategoryForm />
      </div>
    </div>
  );
};

export default AdminAddCategoryDashPage;