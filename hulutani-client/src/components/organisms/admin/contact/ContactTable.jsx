import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import adminShowContactAction from "../../../../redux/admin/contact/show/adminShowContactAction";

const ths = [
    { name: "No" },
    { name: "Nama" },
    { name: "Surel" },
    { name: "Jenis Kelamin" },
    { name: "Tanggal Lahir" },
    { name: "Telepon" },
  ],
  ContactTable = () => {
    const contactData = useSelector(
      (state) => state.adminShowContacts.contacts
    );

    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(adminShowContactAction.getContacts());
    });

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
          {contactData.map((data, index) => {
            return (
              <tr>
                <td scope="row">1</td>
                <td>{data.nama}</td>
                <td>{data.email}</td>
                <td>{data.nomor_handphone}</td>
                <td>{data.jenis_kelamin}</td>
                <td>{data.tanggal_lahir}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };

export default ContactTable;