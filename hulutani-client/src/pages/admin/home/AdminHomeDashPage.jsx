import React from "react";
import "../styles.css";
import Recent from "../../../components/organisms/admin/Home/Recent";
import Overview from "../../../components/organisms/admin/Home/Overview";
import AdminHeader from "../../../components/organisms/admin/AdminHeader";
import AdminSideNavBar from "../../../components/organisms/admin/AdminSideNavBar";

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