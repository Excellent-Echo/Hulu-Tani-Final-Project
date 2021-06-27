import React from "react";
import { Link } from "react-router-dom";

const ths = [
    { name: "ID" },
    { name: "Kode Transaksi" },
    { name: "Status" },
    { name: "Aksi" },
  ],
  TransactionTable = () => {
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
            <tr>
              <td className="text-center">1</td>
              <td className="text-center">Mark</td>
              <td className="text-center">Otto</td>
              <td className="text-center">
                <Link to="/admin/dash/transaction/detail">Lihat detail</Link>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

export default TransactionTable;