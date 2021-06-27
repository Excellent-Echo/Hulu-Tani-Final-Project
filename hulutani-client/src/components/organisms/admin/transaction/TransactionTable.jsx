import React from "react";
import { Link } from "react-router-dom";

const ths = [
    { name: "No" },
    { name: "Kode Transaksi" },
    { name: "Status" },
    { name: "Aksi" },
  ],
  TransactionTable = () => {
    return (
      <div className="table-responsive">
        <table className="table table-borderless">
          <thead className="table-light">
            <tr>
              {ths.map((th) => (
                <th className="text-center">{th.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>
                <Link to="/admin/dash/transaction/detail">Lihat detail</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

export default TransactionTable;