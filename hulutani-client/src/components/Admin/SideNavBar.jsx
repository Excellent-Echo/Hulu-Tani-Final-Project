import React from "react";
import { Link } from "react-router-dom";

const navs = [
    { to: "/admin/dash", icon: "fas fa-home", name: "home" },
    {
      to: "/admin/dash/product",
      icon: "fas fa-shopping-basket",
      name: "Produk",
    },
    { to: "/admin/dash/category", icon: "fas fa-list", name: "Kategori" },
    {
      to: "/admin/dash/transaction",
      icon: "fas fa-money-check",
      name: "Transaksi",
    },
    {
      to: "/admin/dash/contact",
      icon: "fas fa-address-book",
      name: "Kontak",
    },
  ],
  SideNavBar = () => {
    return (
      <nav className="vh-100 ahdp_navbar w-25">
        <h1 className="text-center p-1 ahdp_brand text-white">HuluTani</h1>

        {/* nav */}
        <div className="d-flex flex-column h-100 justify-content-around px-3 ahdp_nav">
          <div className="d-flex flex-column">
            {navs.map((nav) => (
              <Link to={nav.to} className="my-2 p-2 ahdp_nav_hover">
                <i className={nav.icon}></i>
                <span className="mx-3">{nav.name}</span>
              </Link>
            ))}
          </div>
          <div className="d-flex ">
            <Link to="" className="my-2 p-2 ahdp_nav_hover w-100">
              <i className="fas fa-sign-out-alt"></i>
              <span className="mx-3">Keluar</span>
            </Link>
          </div>
        </div>
      </nav>
    );
  };

export default SideNavBar;