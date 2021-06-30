import Swal from "sweetalert2";
import React, { useEffect } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import adminEditCategoryAction from "../../../../redux/admin/category/edit/adminEditCategoryAction";

const EditCategoryForm = () => {
  const adminEditCategory = useSelector((state) => state.adminEditCategory);
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    dispatch(adminEditCategoryAction.getCategory(id));
  }, []);

  const updateCategoryHadler = (e) => {
    e.preventDefault();
    dispatch(
      adminEditCategoryAction.editCategory(id, adminEditCategory.categoryName)
    );
    handleSave()
    history.push("/admin/dash/category")
  };

  const handleSave = () => {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 5000,
    });
  };

  return (
    <form
      className="border-3 border p-2 admin-form"
      onSubmit={updateCategoryHadler}
    >
      <div className="row mb-3">
        <label htmlFor="inputCategoryName" className="col-sm-2 col-form-label">
          Nama Kategori
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="inputCategoryName"
            placeholder="Masukan nama kategori"
            value={adminEditCategory.categoryName}
            onChange={(e) =>
              dispatch(adminEditCategoryAction.setCategory(e.target.value))
            }
          />
        </div>
      </div>

      <div className="d-flex justify-content-end">
        <Link className="me-2" to="/admin/dash/category">
          <button type="submit" className="btn btn-outline-danger">
            Batal
          </button>
        </Link>
        <button
          type="submit"
          className="btn btn-primary ms-2"
        >
          Simpan
        </button>
      </div>
    </form>
  );
};

export default EditCategoryForm;