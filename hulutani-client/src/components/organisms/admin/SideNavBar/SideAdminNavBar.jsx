import React from "react";
import "./sanb.css";
import { Link } from "react-router-dom";

const navs = [
    {
      to: "/admin/dash",
      icon: "fas fa-home fs-5",
      name: "home",
    },
    {
      to: "/admin/dash/product",
      icon: "fas fa-shopping-basket fs-5",
      name: "Produk",
    },
    {
      to: "/admin/dash/category",
      icon: "fas fa-list fs-5",
      name: "Kategori",
    },
    {
      to: "/admin/dash/transaction",
      icon: "far fa-credit-card fs-5",
      name: "Transaksi",
    },
    {
      to: "/admin/dash/contact",
      icon: "fas fa-address-book fs-5",
      name: "Kontak",
    },
  ],
  SideNavBar = () => {
    return (
      <div
        className="l-navbar position-fixed top-0 vh-100 pt-2 px-3"
        id="nav-bar"
      >
        <nav className="nav h-100 flex-column d-flex justify-content-between overflow-hidden">
          <div>
            <a
              href="#"
              className="nav__logo mb-5 d-grid align-items-center pt-2 pb-2 ps-4"
            >
              <i className="far fa-sun fs-5 text-white"></i>
              <span className="nav__logo-name text-white fw-bold">
                HuluTani
              </span>
            </a>

            <div className="nav__list">
              {navs.map((nav) => (
                <Link
                  to={nav.to}
                  className="nav__link d-flex d-grid align-items-center pt-2 pb-2 ps-4 position-relative mb-4"
                >
                  <i className={nav.icon}></i>
                  <span className="nav__name">{nav.name}</span>
                </Link>
              ))}
            </div>
          </div>

          <a
            href="#"
            className="nav__link d-flex d-grid align-items-center pt-2 pb-2 ps-4 position-relative mb-4"
          >
            <i className="fas fa-sign-out-alt fs-5"></i>
            <span className="nav__name">Log Out</span>
          </a>
        </nav>
      </div>
    );
  };

export default SideNavBar;