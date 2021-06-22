import React from "react";
import "../styles.css";
import SideAdminNavBar from "../../../components/organisms/admin/SideNavBar/SideAdminNavBar";
import Overview from "../../../components/organisms/admin/Home/Overview";
import HeaderAdmin from "../../../components/organisms/admin/HeaderAdmin/HeaderAdmin";
import Recent from "../../../components/organisms/admin/Home/Recent";

const AdminHomeDashPage = () => {
  return (
    <div className="user-select-none">
      <HeaderAdmin />
      <SideAdminNavBar />

      <div className="admin-content-container">
        <Overview />

        <Recent />
      </div>
    </div>
  );
};

export default AdminHomeDashPage;