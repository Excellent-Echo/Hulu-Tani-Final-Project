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
        <nav>
          <ol className="breadcrumb h3">
            <li className="breadcrumb-item">
              <Link to="/admin/dash/transaction/detail">Transaksi</Link>
            </li>
            <li className="breadcrumb-item">Detail</li>
          </ol>
        </nav>

        <TransactionDetailForm />
      </div>
    </div>
  );
};

export default AdminTransactionDetailDashPage;