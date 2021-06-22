import React, {useEffect} from "react";
import Swal from "sweetalert2";
import HeaderAdmin from "../../../components/organisms/admin/HeaderAdmin/HeaderAdmin";
import { Link } from "react-router-dom";
import SideAdminNavBar from "../../../components/organisms/admin/SideNavBar/SideAdminNavBar";

import { useSelector, useDispatch } from "react-redux";
import adminShowProductAction from "../../../redux/admin/product/show/adminShowProductAction";

const THs = [
    { scope: "col", name: "Nama " },
    { scope: "col", name: "Kategori ID" },
    { scope: "col", name: "Jumlah" },
    { scope: "col", name: "Harga" },
    { scope: "col", name: "Aksi" },
  ],
  AdminProductDashPage = () => {
    const adminProductsData = useSelector(state => state.adminShowProducts.products)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(adminShowProductAction.getProducts())
    }, [])


    //modal
    const handleClickDelete = () => {
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
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
        }
      });
    };

    return (
      <div className="user-select-none">
        <HeaderAdmin />
        <SideAdminNavBar />

        <div className="admin-content-container">
          <div className="h-100 w-100 px-4">
            <div className="h-75 ahdp_recent">
              <div className="d-flex justify-content-between my-3">
                <h3 className="h-25 d-flex align-items-center">Produk</h3>
                <Link to="/admin/dash/product/add">
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
                  {adminProductsData.map((data,index) => {
                    return(
                      <tr key={index}>
                        <td>
                          <i className="fas fa-shopping-basket"></i> {data.nama}
                        </td>
                        <td>{data.id_kategori}</td>
                        <td>{data.stok}</td>
                        <td>{data.harga}</td>
                        <td className="d-flex">
                          <Link to="/admin/dash/product/edit">
                            <button type="button" className="btn btn-primary">
                              Ubah
                            </button>
                          </Link>

                          <button
                            type="button"
                            className="btn btn-danger"
                            onClick={handleClickDelete}
                          >
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

export default AdminProductDashPage;