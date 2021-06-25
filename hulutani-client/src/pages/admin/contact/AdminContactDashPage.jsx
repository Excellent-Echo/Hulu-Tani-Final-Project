import React,{useEffect} from "react";
import HeaderAdmin from "../../../components/organisms/admin/HeaderAdmin/HeaderAdmin";
import SideAdminNavBar from "../../../components/organisms/admin/SideNavBar/SideAdminNavBar";

import { useSelector, useDispatch } from "react-redux";
import adminShowContactAction from "../../../redux/admin/contact/show/adminShowContactAction";
const THs = [
    { scope: "col", name: "Nama" },
    { scope: "col", name: "Surel" },
    { scope: "col", name: "Telepon" },
    { scope: "col", name: "Jenis Kelamin" },
    { scope: "col", name: "Tanggal Lahir" },
  ],
  AdminContactDashPage = () => {
    const contactData = useSelector(state => state.adminShowContacts.contacts)

    const dispatch = useDispatch()
    useEffect(()=>{
      dispatch(adminShowContactAction.getContacts())
    })
    

    return (
      <div className="d-flex user-select-none">
        <SideAdminNavBar />

        <div className="d-flex flex-column vh-100 vw-100">
          <HeaderAdmin />

          <div className="h-100 w-100 px-4">
            <div className="h-75 ahdp_recent">
              <h3 className="h-25 d-flex align-items-center">Kontak</h3>

              <table className="table table-hover mb-5">
                <thead>
                  <tr>
                    {THs.map((TH) => (
                      <th scope={TH.scope}>{TH.name}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {contactData.map((data,index)=>{
                    return (
                    <tr className="">
                      <td>
                        <i className="fas fa-address-book"></i> {data.nama}
                      </td>
                      <td>{data.email}</td>
                      <td>{data.nomor_handphone}</td>
                      <td>{data.jenis_kelamin}</td>
                      <td>{data.tanggal_lahir}</td>
                    </tr>
                    )
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default AdminContactDashPage;
