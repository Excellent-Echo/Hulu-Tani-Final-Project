import React from "react";
import "../styles.css";
import AdminHeader from "../../../components/organisms/admin/AdminHeader";
import AdminSideNavBar from "../../../components/organisms/admin/AdminSideNavBar";
import Overview from "../../../components/organisms/admin/home/Overview";
import Recent from "../../../components/organisms/admin/home/Recent";

const AdminHomeDashPage = () => {
  return (
    <div className="user-select-none w-100 vh-100">
      <AdminSideNavBar />

      <AdminHeader />

      <div className="w-75 h-100 float-end p-2">
        <Overview />

        <Recent />
      </div>
    </div>
  );
};

export default AdminHomeDashPage;