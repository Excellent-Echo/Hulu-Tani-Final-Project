import React,{useEffect} from "react";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import adminShowCategoryAction from "../../../redux/admin/category/show/adminShowCategoryAction"
import adminDeleteCategoryAction from "../../../redux/admin/category/delete/adminDeleteCategoryAction";

import "../styles.css";
import HeaderAdmin from "../../../components/organisms/admin/HeaderAdmin/HeaderAdmin";
import SideAdminNavBar from "../../../components/organisms/admin/SideNavBar/SideAdminNavBar";
import Swal from "sweetalert2";

const THs = [
    { scope: "col", name: "Nama Kategori" },
    { scope: "col", name: "Aksi" },
  ],
  AdminCategoryDashPage = () => {
    const adminShowCategory = useSelector(state => state.adminShowCategory.categories)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(adminShowCategoryAction.getCategories())
    }, [])

    const handleClickDelete = (id) => {
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(adminDeleteCategoryAction.deleteCategory(id))
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          dispatch(adminShowCategoryAction.getCategories())
        }
      });
    };

    return (
      <div className="user-select-none">
        <HeaderAdmin />
        <SideAdminNavBar />

        <div className="admin-content-container">
          <div className="h-75 ahdp_recent">
            <div className="d-flex justify-content-between my-3">
              <h3 className="h-25 d-flex align-items-center">Kategori</h3>
              <Link to="/admin/dash/category/add">
                <button className="btn btn-primary text-white">Tambah</button>
              </Link>
            </div>

            <table className="table table-hover mb-5">
              <thead>
                <tr>
                  {THs.map((TH) => (
                    <th scope={TH.scope}>{TH.name}</th>
                  ))}
                </tr>
              </thead>
              <tbody>

                {adminShowCategory.map((data,index) =>{
                  return(
                  <tr key={index}>
                    <td>
                      <i className="fas fa-list"></i> {data.nama}
                    </td>
                    <td className="d-flex">
                      <Link to={`/admin/dash/category/edit/${data.id}`}>
                        <button type="button" className="btn btn-primary">
                            Ubah
                          </button>
                        </Link>
                        <button type="button" className="btn btn-danger" 
                        onClick={() => {handleClickDelete(data.id)}}>
                          Hapus
                        </button>
                    </td>
                  </tr>
                  )
                })}
                  
              </tbody>
            </table>
            </div>
        </div>
      </div>
    );
  };

export default AdminCategoryDashPage;