import React from "react";

const ths = [
    { name: "ID" },
    { name: "Kode Transaksi" },
    { name: "Jumlah Pembayaran" },
    { name: "Status" },
    { name: "Tanggal" },
  ],
  RecentTable = () => {
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
              <td className="text-center">[Kode]</td>
              <td className="text-center">[Jumlah]</td>
              <td className="text-center">[Status]</td>
              <td className="text-center">[Tanggal]</td>
            </tr>
            <tr>
              <td className="text-center">1</td>
              <td className="text-center">[Kode]</td>
              <td className="text-center">[Jumlah]</td>
              <td className="text-center">[Status]</td>
              <td className="text-center">[Tanggal]</td>
            </tr>
            <tr>
              <td className="text-center">1</td>
              <td className="text-center">[Kode]</td>
              <td className="text-center">[Jumlah]</td>
              <td className="text-center">[Status]</td>
              <td className="text-center">[Tanggal]</td>
            </tr>
            <tr>
              <td className="text-center">1</td>
              <td className="text-center">[Kode]</td>
              <td className="text-center">[Jumlah]</td>
              <td className="text-center">[Status]</td>
              <td className="text-center">[Tanggal]</td>
            </tr>
            <tr>
              <td className="text-center">1</td>
              <td className="text-center">[Kode]</td>
              <td className="text-center">[Jumlah]</td>
              <td className="text-center">[Status]</td>
              <td className="text-center">[Tanggal]</td>
            </tr>
            <tr>
              <td className="text-center">1</td>
              <td className="text-center">[Kode]</td>
              <td className="text-center">[Jumlah]</td>
              <td className="text-center">[Status]</td>
              <td className="text-center">[Tanggal]</td>
            </tr>
            <tr>
              <td className="text-center">1</td>
              <td className="text-center">[Kode]</td>
              <td className="text-center">[Jumlah]</td>
              <td className="text-center">[Status]</td>
              <td className="text-center">[Tanggal]</td>
            </tr>
            <tr>
              <td className="text-center">1</td>
              <td className="text-center">[Kode]</td>
              <td className="text-center">[Jumlah]</td>
              <td className="text-center">[Status]</td>
              <td className="text-center">[Tanggal]</td>
            </tr>
            <tr>
              <td className="text-center">1</td>
              <td className="text-center">[Kode]</td>
              <td className="text-center">[Jumlah]</td>
              <td className="text-center">[Status]</td>
              <td className="text-center">[Tanggal]</td>
            </tr>
            <tr>
              <td className="text-center">1</td>
              <td className="text-center">[Kode]</td>
              <td className="text-center">[Jumlah]</td>
              <td className="text-center">[Status]</td>
              <td className="text-center">[Tanggal]</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

export default RecentTable;