import React, { useEffect } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import adminShowProductAction from "../../../../redux/admin/product/show/adminShowProductAction";
import adminDeleteProductAction from "../../../../redux/admin/product/delete/adminDeleteProductAction";

const ths = [
    { name: "ID" },
    { name: "Nama Produk" },
    { name: "Kategori (Id)" },
    { name: "Jumlah (Pcs)" },
    { name: "Harga (Idr)" },
    { name: "Aksi", colspan: "2" },
  ],
  ProductTable = () => {
    const adminProductsData = useSelector(
      (state) => state.adminShowProducts.products
    );
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(adminShowProductAction.getProducts());
    }, []);

    const handleDelete = (id) => {
      Swal.fire({
        title: "Hapus produk?",
        text: "Anda tidak akan dapat mengembalikan ini!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        cancelButtonText: "Batal",
        confirmButtonText: "Ya, hapus ini!",
      }).then((result) => {
        if (result.isConfirmed) {
          dispatch(adminDeleteProductAction.deleteProduct(id));
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener("mouseenter", Swal.stopTimer);
              toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
          });

          Toast.fire({
            icon: "success",
            title: "Berhasil hapus produk",
          });
        }
      });
    };

    return (
      <div className="table-responsive">
        <table className="table table-borderless table-hover">
          <thead className="table-light">
            <tr>
              {ths.map((th) => (
                <th colSpan={th.colspan} className="text-center">
                  {th.name}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {adminProductsData.map((data, index) => {
              return (
                <tr key={index}>
                  <td className="text-center">{index}</td>
                  <td className="text-center">{data.nama}</td>
                  <td className="text-center">{data.id_kategori}</td>
                  <td className="text-center">{data.stok}</td>
                  <td className="text-center">{data.harga}</td>
                  <td className="text-center">
                    <Link to={`/admin/dash/product/edit/${data.id}`}>
                      <button type="button" className="btn btn-primary">
                        Ubah
                      </button>
                    </Link>
                  </td>
                  <td className="text-center">
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() => handleDelete(data.id)}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

export default ProductTable;