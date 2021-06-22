import React from "react";
import "./ha.css";

const HeaderAdmin = () => {
  return (
    <header
      className="w-100 position-fixed top-0 start-0 d-flex align-items-center justify-content-end px-3 bg-white"
      id="hedaer"
    >
      {/*<div className="ha-header-toggle fs-4">*/}
      {/*  <i className="fas fa-bars"></i>*/}
      {/*</div>*/}

      <div className="fs-4">
        <i className="far fa-user-circle"></i>
      </div>
    </header>
  );
};

export default HeaderAdmin;