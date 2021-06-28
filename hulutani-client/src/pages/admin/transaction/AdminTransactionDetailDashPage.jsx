import React from "react";
import AdminSideNavBar from "../../../components/organisms/admin/AdminSideNavBar";
import AdminHeaderLarge from "../../../components/organisms/admin/AdminHeader";
import TransactionDetailForm from "../../../components/organisms/admin/transaction/TransactionDetailForm";
import { Link } from "react-router-dom";

const AdminTransactionDetailDashPage = () => {
  return (
    <div className="user-select-none w-100 vh-100">
      <AdminSideNavBar />

      <AdminHeaderLarge />

      <div className="admin-content-container h-100 float-end p-4">
        <div className="d-flex justify-content-between mb-2">
          <nav>
            <ol className="breadcrumb h3">
              <li className="breadcrumb-item">
                <Link to="/admin/dash/transaction">Transaksi</Link>
              </li>
              <li className="breadcrumb-item">Detail</li>
            </ol>
          </nav>

          <Link to="/admin/dash/category/add">
            <button type="button" className="btn btn-success">
              Konfirmasi
            </button>
          </Link>
        </div>

        <TransactionDetailForm />
      </div>
    </div>
  );
};

export default AdminTransactionDetailDashPage;