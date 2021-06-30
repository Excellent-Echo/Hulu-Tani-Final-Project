import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const OverviewCard = () => {
  const transactionAmout = useSelector(
    (state) => state.adminShowTransactions.amount
  );
  const productAmount = useSelector((state) => state.adminShowProducts.amount);
  const categoryAmount = useSelector((state) => state.adminShowCategory.amount);
  const contactAmount = useSelector((state) => state.adminShowContacts.amount);

  const overviews = [
    {
      amount: `${productAmount}`,
      icon: "fas fa-shopping-basket",
      name: "Produk",
      to: "/admin/dash/product",
    },
    {
      amount: `${categoryAmount}`,
      icon: "fas fa-list",
      name: "Kategori",
      to: "/admin/dash/category",
    },
    {
      amount: `${transactionAmout}`,
      icon: "fas fa-money-check",
      name: "Transaksi",
      to: "/admin/dash/transaction",
    },
    {
      amount: `${contactAmount}`,
      icon: "fas fa-address-book",
      name: "Kontak",
      to: "/admin/dash/contact",
    },
  ];

  return (
    <div className="row row-cols-1 row-cols-lg-2 row-cols-md-2 row-cols-sm-2 g-4 admin-overview-card h-100 pb-4">
      {overviews.map((overview) => (
        <div className="col">
          <div className="card h-100 border-3 border">
            <div className="card-body d-flex">
              <div className="flex-grow-1 fs-3 d-flex justify-content-center align-items-center">
                <i className={overview.icon}></i>
              </div>
              <div className="flex-grow-1 justify-content-center d-flex flex-column">
                <h4 className="card-text d-flex justify-content-end">
                  Jumlah {overview.name}
                </h4>
                <h3 className="d-flex justify-content-end fw-bold">
                  {overview.amount}
                </h3>
              </div>
            </div>

            <Link className="card-footer" to={overview.to}>
              <small>Lihat semua</small>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OverviewCard;