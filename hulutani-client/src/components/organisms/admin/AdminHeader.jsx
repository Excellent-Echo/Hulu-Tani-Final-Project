import React from "react";

const AdminHeader = () => {
  return (
    <nav className="navbar navbar-light bg-light position-sticky top-0 admin-header shadow-sm">
      <div className="container justify-content-end">
        <div className="navbar-brand d-flex flex-row-reverse" href="#">
          <div className="fs-1 ms-3">
            <i className="far fa-user-circle"></i>
          </div>
          <span className="d-flex align-items-center">Hai, Admin!</span>
        </div>
      </div>
    </nav>
  );
};

export default AdminHeader;