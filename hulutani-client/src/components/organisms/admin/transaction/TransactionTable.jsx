import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import adminShowTransactionAction from "../../../../redux/admin/transaction/show/adminShowTransactionAction";
import NumberFormat from "react-number-format";

const ths = [
    { name: "ID" },
    { name: "Kode Transaksi" },
    { name: "Jumlah Pembayaran" },
    { name: "Status" },
    { name: "Aksi" },
  ],
  TransactionTable = () => {
    const adminTransactionsData = useSelector(
      (state) => state.adminShowTransactions.transactions
    );

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(adminShowTransactionAction.getTransactions());
    }, []);

    return (
      <div className="table-responsive">
        <table className="table table-borderless table-hover">
          <thead className="table-light">
            <tr>
              {ths.map((th) => (
                <th className="text-center">{th.name}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {adminTransactionsData.map((data, index) => {
              return (
                <tr>
                  <td className="text-center">{index}</td>
                  <td className="text-center">{data.kode_transaksi}</td>
                  <td className="text-center"><NumberFormat value={data.harga} displayType={'text'} thousandSeparator={true} prefix={'Rp'}/></td>
                  <td className="text-center">{data.status}</td>
                  <td className="text-center">
                    <Link
                      to={`/admin/dash/transaction/detail/${data.kode_transaksi}`}
                    >
                      Lihat detail
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

export default TransactionTable;