import React from "react";
import AdminHeader from "../../../components/organisms/admin/AdminHeader";
import AdminSideNavBar from "../../../components/organisms/admin/AdminSideNavBar";
import ContactTable from "../../../components/organisms/admin/contact/ContactTable";

const AdminContactDashPage = () => {
  return (
    <div className="user-select-none w-100 vh-100">
      <AdminSideNavBar />

      <AdminHeader />

      <div className="w-75 h-100 float-end p-2">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active" aria-current="page">
              Kontak
            </li>
          </ol>
        </nav>

        <ContactTable />
      </div>
    </div>
  );
};

export default AdminContactDashPage;