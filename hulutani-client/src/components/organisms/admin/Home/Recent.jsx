import React from "react";
const THs = [
    { scope: "col", name: "Kode Transaksi" },
    { scope: "col", name: "Jumlah" },
    { scope: "col", name: "Status" },
    { scope: "col", name: "Tanggal" },
  ],
  Recent = () => {
    return (
      <div className="h-75 ahdp_recent">
        <h3 className="h-25 d-flex align-items-center">Aktivitas Terbaru</h3>

        <table className="table table-hover mb-5">
          <thead>
            <tr>
              {THs.map((TH) => (
                <th scope={TH.scope}>{TH.name}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">
                <i className="fas fa-money-check"></i> [Kode Transaksi]
              </td>
              <td>[Jumlah Transaksi]</td>
              <td>[Status Transaksi]</td>
              <td>[Tanggal Transaksi]</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

export default Recent;