import React, { useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import adminLoginAction from "../../../redux/admin/login/adminLoginAction";

const navs = [
    {
      icon: "fas fa-home fs-5 col-2",
      name: "Home",
      to: "/admin/dash",
    },
    {
      icon: "fas fa-shopping-basket fs-5 col-2",
      name: "Produk",
      to: "/admin/dash/product",
    },
    {
      icon: "fas fa-list fs-5 col-2",
      name: "Kategori",
      to: "/admin/dash/category",
    },
    {
      icon: "fas fa-money-check fs-5 col-2",
      name: "Transaksi",
      to: "/admin/dash/transaction",
    },
    {
      icon: "fas fa-address-book fs-5 col-2",
      name: "Kontak",
      to: "/admin/dash/contact",
    },
  ],
  AdminSideNavBar = () => {
    const adminLogOut = () => {
      localStorage.removeItem("adminToken");
    };

    return (
      <div className="h-100 position-fixed admin-side-navbar px-4">
        <header className="navbar navbar-light">
          <div className="container-fluid justify-content-center d-flex">
            <div className="navbar-brand fs-2 fw-bold admin-brand ms-3">
              HuluTani
            </div>
          </div>
        </header>

        <nav className="nav flex-column d-flex justify-content-between">
          <div>
            {navs.map((nav) => (
              <Link className="nav-link my-1 row" to={nav.to}>
                <i className={nav.icon}></i>
                <span className="ms-3 fw-bold">{nav.name}</span>
              </Link>
            ))}
          </div>

          <Link className="nav-link my-1 row" onClick={adminLogOut}>
            <i className="fas fa-sign-out-alt fs-5 col-2"></i>
            <span className="ms-3 fw-bold">Keluar</span>
          </Link>
        </nav>
      </div>
    );
  };

export default AdminSideNavBar;