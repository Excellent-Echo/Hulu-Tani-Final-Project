import React from "react";
import { Link } from "react-router-dom";

const overviews = [
    {
      amount: "[Jumlah]",
      icon: "fas fa-shopping-basket",
      name: "Produk",
      to: "/admin/dash/product",
    },
    {
      amount: "[Jumlah]",
      icon: "fas fa-list",
      name: "Kategori",
      to: "/admin/dash/category",
    },
    {
      amount: "[Jumlah]",
      icon: "fas fa-money-check",
      name: "Transaksi",
      to: "/admin/dash/transaction",
    },
    {
      amount: "[Jumlah]",
      icon: "fas fa-address-book",
      name: "Kontak",
      to: "/admin/dash/contact",
    },
  ],
  OverviewCard = () => {
    return (
      <div className="row row-cols-1 row-cols-md-4 g-2 admin-overview-card">
        {overviews.map((overview) => (
          <div className="col">
            <div className="card h-100 border-3 border">
              <div className="card-body d-flex">
                <div className="flex-grow-1 fs-3 d-flex justify-content-center align-items-center">
                  <i className={overview.icon}></i>
                </div>
                <div className="flex-grow-1">
                  <p className="card-text d-flex justify-content-end">
                    Jumlah {overview.name}
                  </p>
                  <h5 className="d-flex justify-content-end fw-bold">
                    {overview.amount}
                  </h5>
                </div>
              </div>

              <Link className="card-footer" to={overview.to}>
                <small className="text-muted">Lihat semua</small>
              </Link>
            </div>
          </div>
        ))}
      </div>
    );
  };

export default OverviewCard;