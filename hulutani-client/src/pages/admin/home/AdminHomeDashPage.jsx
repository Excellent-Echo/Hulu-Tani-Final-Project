import React from "react";
import "../../../assets/css/admin.css";
import Recent from "../../../components/organisms/admin/home/Recent";
import Overview from "../../../components/organisms/admin/home/Overview";
import AdminSideNavBar from "../../../components/organisms/admin/AdminSideNavBar";
import AdminHeader from "../../../components/organisms/admin/AdminHeader";

const AdminHomeDashPage = () => {
  return (
    <div className="user-select-none w-100 vh-100">
      <AdminSideNavBar />

      <AdminHeader />

      <div className="admin-content-container float-end h-100 p-4">
        <Overview />

        <Recent />
      </div>
    </div>
  );
};

export default AdminHomeDashPage;