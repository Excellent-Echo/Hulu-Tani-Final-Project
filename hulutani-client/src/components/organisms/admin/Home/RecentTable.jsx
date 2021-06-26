import React from "react";

const ths = [
    { name: "No" },
    { name: "Kode Transaksi" },
    { name: "Jumlah Pembayaran" },
    { name: "Status" },
    { name: "Tanggal" },
  ],
  RecentTable = () => {
    return (
      <table className="table table-bordered border-3 border table-hover admin-table">
        <thead className="table-light">
          <tr>
            {ths.map((th) => (
              <th scope="col">{th.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
            <td>@mdo</td>
          </tr>
        </tbody>
      </table>
    );
  };

export default RecentTable;