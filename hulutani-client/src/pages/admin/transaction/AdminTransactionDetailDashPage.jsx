import React, { useEffect } from "react";
import AdminSideNavBar from "../../../components/organisms/admin/AdminSideNavBar";
import AdminHeaderLarge from "../../../components/organisms/admin/AdminHeader";
import TransactionDetailForm from "../../../components/organisms/admin/transaction/TransactionDetailForm";
import { Link,useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import adminShowTransactionDetailAction from "../../../redux/admin/transaction/detail/adminShowTransactionDetailAction";

const AdminTransactionDetailDashPage = () => {
  const { code } = useParams(),
  dispatch = useDispatch(),
  history = useHistory(),
  adminTransactionDetailData = useSelector(
    (state) => state.adminShowTransactionDetail
  );

  useEffect(() => {
    dispatch(adminShowTransactionDetailAction.getTransactionDetail(code));
  }, []);

  const confirmHandler = (e) => {
    e.preventDefault()
    if(adminTransactionDetailData.status === "Telah Dikonfirmasi"){
      window.alert("Sudah di Konfirmasi!")
    }else{
      if(adminTransactionDetailData.bukti === ""){
        window.alert("Bukti Transafer Belum ada!")
      }else{
        dispatch(adminShowTransactionDetailAction.konfirmStatus(code))
        history.push("/admin/dash/transaction")
      }
    }
  }
  
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
          {}
            <button type="button" className="btn btn-success" onClick={confirmHandler}>
              Konfirmasi
            </button>
        </div>

        <TransactionDetailForm />
      </div>
    </div>
  );
};

export default AdminTransactionDetailDashPage;