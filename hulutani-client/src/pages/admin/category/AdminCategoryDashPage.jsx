import React,{useEffect} from "react";
import SideNavBar from "../../../components/Admin/SideNavBar";
import HeaderAdmin from "../HeaderAdmin";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import adminShowCategoryAction from "../../../redux/admin/category/show/adminShowCategoryAction"

const THs = [
    { scope: "col", name: "Nama Kategori" },
    { scope: "col", name: "Aksi" },
  ],
  AdminCategoryDashPage = () => {
    const adminShowCategory = useSelector(state => state.adminShowCategory.categories)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(adminShowCategoryAction.getCategories())
      //console.log(adminShowCategory)
    }, [])

    return (
      <div className="d-flex user-select-none">
        <SideNavBar />

        <div className="d-flex flex-column vh-100 vw-100">
          <HeaderAdmin />

          <div className="h-100 w-100 px-4">
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
                        <button type="button" className="btn btn-danger">
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
      </div>
    );
  };

export default AdminCategoryDashPage;
