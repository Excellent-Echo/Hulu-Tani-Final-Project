import React from "react";

const HeaderAdmin = () => {
  return (
    <header className="bg-white py-3">
      <div className="d-flex justify-content-end">
        <span className="flex-row-reverse d-flex">
          <i className="far fa-user mx-3 d-flex justify-content-center align-items-center"></i>
          Hai, Admin
        </span>
      </div>
    </header>
  );
};

export default HeaderAdmin;
