import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import adminShowContactAction from "../../../../redux/admin/contact/show/adminShowContactAction";

const ths = [
    { name: "No" },
    { name: "Nama" },
    { name: "Email" },
    { name: "No Telepon" },
    { name: "Tipe Pesan" },
    { name: "Pesan" },
  ],
  ContactTable = () => {
    const contactData = useSelector(
      (state) => state.adminShowContacts.contacts
    );

    const dispatch = useDispatch();

    useEffect(() => {
      // dispatch(adminShowContactAction.getContacts());
    });

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
            {contactData.map((data, index) => {
              return (
                <tr key={index}>
                  <td className="text-center">{index+1}</td>
                  <td className="text-center">{data.nama}</td>
                  <td className="text-center">{data.jenis_kelamin}</td>
                  <td className="text-center">{data.nomor_handphone}</td>
                  <td className="text-center">{data.tanggal_lahir}</td>
                  <td className="text-center">{data.alamat}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

export default ContactTable;