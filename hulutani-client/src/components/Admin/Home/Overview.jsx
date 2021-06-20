import React from "react";
import { Link } from "react-router-dom";

const overviews = [
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
    {
      to: "/admin/dash/inquery",
      icon: "fas fa-address-book",
      name: "Kontak",
    },
  ],
  Overview = () => {
    return (
      <div className="h-25 mb-5">
        <h3 className="h-25 d-flex align-items-center mb-4">Overview</h3>

        <div className="row">
          {/*card*/}
          {overviews.map((overview) => (
            <div className="col ahdp_overview_card">
              {/*top*/}
              <div className="d-flex bg-white ahdp_overview_card_top">
                {/* icon */}
                <h2 className="w-25 justify-content-center align-items-center m-0 d-flex">
                  <i className={overview.icon}></i>
                </h2>
                {/* icon */}

                {/* info */}
                <div className="w-75 flex-column justify-content-center d-flex align-items-center">
                  <span className="d-flex justify-content-end w-100 p-1">
                    Jumlah {overview.name}
                  </span>
                  <h2 className="d-flex justify-content-end fw-bold w-100 m-0 px-1">
                    100
                  </h2>
                </div>
                {/* info */}
              </div>
              {/*top*/}

              {/*bottom*/}
              <Link
                to={overview.to}
                className="ahdp_overview_card_bottom d-flex align-items-center px-3 py-2"
              >
                View All
              </Link>
              {/*bottom*/}
            </div>
          ))}
          {/*card*/}
        </div>
      </div>
    );
  };

export default Overview;
