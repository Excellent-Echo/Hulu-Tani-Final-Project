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
            {contactData.map((data, index) => {
              return (
                <tr>
                  <td>{index}</td>
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
      </div>
    );
  };

export default ContactTable;