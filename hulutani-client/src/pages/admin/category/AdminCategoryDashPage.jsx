import "../styles.css";
import React from "react";
import { Link } from "react-router-dom";
import Header from "../../../components/organisms/admin/AdminHeader";
import SideNavBar from "../../../components/organisms/admin/AdminSideNavBar";
import CategoryTable from "../../../components/organisms/admin/category/CategoryTable";

const AdminCategoryDashPage = () => {
  return (
    <div className="w-100 vh-100 user-select-none">
      <SideNavBar />

      <Header />

      <div className="admin-content h-100 container py-3 vh-100 float-end">
        <div className="w-100 h-auto">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <nav aria-label="breadcrumb">
              <ol className="h3 breadcrumb">
                <li className="breadcrumb-item" aria-current="page">
                  Kategori
                </li>
              </ol>
            </nav>

            <Link to="/admin/dash/category/add" className="">
              <button type="button" className="btn btn-primary">
                Tambah
              </button>
            </Link>
          </div>

          <CategoryTable />
        </div>
      </div>
    </div>
  );
};

export default AdminCategoryDashPage;