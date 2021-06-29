import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import adminShowCategoryAction from "../../../../redux/admin/category/show/adminShowCategoryAction";
import adminDeleteCategoryAction from "../../../../redux/admin/category/delete/adminDeleteCategoryAction";

const ths = [
    { name: "ID" },
    { name: "Nama Kategori" },
    { name: "Aksi", colspan: "2" },
  ],
  CategoryTable = () => {
    const adminShowCategory = useSelector(
      (state) => state.adminShowCategory.categories
    );
    const dispatch = useDispatch();

    useEffect(() => {
      // dispatch(adminShowCategoryAction.getCategories());
    }, []);

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
          dispatch(adminDeleteCategoryAction.deleteCategory(id));
          // dispatch(adminShowCategoryAction.getCategories())
          Swal.fire("Deleted!", "Your file has been deleted.", "success");
          // //window.location.reload()
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
            {adminShowCategory.map((data, index) => {
              return (
                <tr>
                  <td className="text-center">{index + 1}</td>
                  <td className="text-center">{data.nama}</td>
                  <td className="text-center">
                    <Link to={`/admin/dash/category/edit/${data.id}`}>
                      <button type="button" className="btn btn-primary">
                        Ubah
                      </button>
                    </Link>
                  </td>
                  <td className="text-center">
                    <button
                      className="btn btn-danger"
                      onClick={() => {
                        handleClickDelete(data.id);
                      }}
                      type="button"
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

export default CategoryTable;