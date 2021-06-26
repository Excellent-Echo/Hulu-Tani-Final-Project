import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import adminAddCategoryAction from "../../../../redux/admin/category/add/adminAddCategoryAction";

const AddCategoryForm = () => {
  const categoryData = useSelector((state) => state.adminAddCategory),
    dispatch = useDispatch(),
    history = useHistory(),
    addCategoryHandler = (e) => {
      e.preventDefault();
      dispatch(adminAddCategoryAction.addCategory(categoryData.categoryName));
      history.push("/admin/dash");
    };

  return (
    <form
      className="bg-white p-3 border border-3 admin-add-product-form"
      onSubmit={addCategoryHandler}
    >
      <div className="mb-3 row">
        <label htmlFor="inputCategoryName" className="col-sm-2 col-form-label">
          Nama
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="inputCategoryName"
            placeholder="Masukan nama kategori"
            value={categoryData.categoryName}
            onChange={(e) =>
              dispatch(adminAddCategoryAction.setCategory(e.target.value))
            }
          />
        </div>
      </div>

      <div className="d-flex justify-content-end">
        <Link to="/admin/dash/category" className="me-1">
          <button type="button" className="btn btn-outline-danger">
            Batal
          </button>
        </Link>

        <button type="button" className="btn btn-primary ms-1">
          Tambah
        </button>
      </div>
    </form>
  );
};

export default AddCategoryForm;