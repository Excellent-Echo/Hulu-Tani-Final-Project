import React from "react";
import { Link } from "react-router-dom";

const navs = [
    {
      icon: "fas fa-home fs-5 col-1",
      name: "Home",
      to: "/admin/dash",
    },
    {
      icon: "fas fa-shopping-basket fs-5 col-1",
      name: "Produk",
      to: "/admin/dash/product",
    },
    {
      icon: "fas fa-list fs-5 col-1",
      name: "Kategori",
      to: "/admin/dash/category",
    },
    {
      icon: "fas fa-money-check fs-5 col-1",
      name: "Transaksi",
      to: "/admin/dash/transaction",
    },
    {
      icon: "fas fa-address-book fs-5 col-1",
      name: "Kontak",
      to: "/admin/dash/contact",
    },
    {
      icon: "fas fa-sign-out-alt fs-5 col-1",
      name: "Keluar",
    },
  ],
  AdminHeader = () => {
    return (
      <nav className="navbar navbar-expand-xxl navbar-light bg-light admin-header shadow-sm position-fixed w-100">
        <div className="container">
          <button
            className="navbar-toggler admin-navbar-icon"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#AdminNavBar"
          >
            <i className="navbar-toggler-icon"></i>
          </button>

          <div className="navbar-brand d-flex flex-row-reverse admin-avatar">
            <div className="fs-3 ms-3">
              <i className="far fa-user-circle"></i>
            </div>
            <span className="d-flex align-items-center">Hai, Admin!</span>
          </div>

          <div
            className="collapse navbar-collapse admin-navbar"
            id="AdminNavBar"
          >
            {navs.map((nav) => (
              <Link className="nav-link my-1 row" to={nav.to}>
                <div>
                  <i className={nav.icon}></i>
                  <span className="ms-3 fw-bold">{nav.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </nav>
    );
  };

export default AdminHeader;