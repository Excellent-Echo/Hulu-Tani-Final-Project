import React from "react";
import { Link } from "react-router-dom";

const navs = [
    { icon: "fas fa-home", name: "Home", to: "/admin/dash" },
    {
      icon: "fas fa-shopping-basket",
      name: "Produk",
      to: "/admin/dash/product",
    },
    { icon: "fas fa-list", name: "Kategori", to: "/admin/dash/category" },
    {
      icon: "fas fa-money-check",
      name: "Transaksi",
      to: "/admin/dash/transaction",
    },
    { icon: "fas fa-address-book", name: "Kontak", to: "/admin/dash/contact" },
    { icon: "fas fa-sign-out-alt", name: "Keluar", to: "/admin/dash/" },
  ],
  AdminSideNavBar = () => {
    return (
      <div className="w-25 h-100 position-fixed admin-side-navbar px-3">
        <header className="navbar navbar-light">
          <div className="container-fluid justify-content-center d-flex">
            <div className="navbar-brand fs-1 fw-bold" href="#">
              HuluTani
            </div>
          </div>
        </header>

        <nav className="nav flex-column">
          {navs.map((nav) => (
            <Link
              className="nav-link my-1 px-5 py-3"
              aria-current="page"
              to={nav.to}
            >
              <h5 className={nav.icon}></h5>
              <span className="ms-3">{nav.name}</span>
            </Link>
          ))}
        </nav>
      </div>
    );
  };

export default AdminSideNavBar;