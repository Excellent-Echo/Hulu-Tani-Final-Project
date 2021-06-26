import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
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
      className="border-3 border p-2 admin-form"
      onSubmit={addCategoryHandler}
    >
      <div className="row mb-3">
        <label className="col-sm-2 col-form-label" htmlFor="inputCategoryName">
          Nama Kategori
        </label>
        <div className="col-sm-10">
          <input
            className="form-control"
            id="inputCategoryName"
            onChange={(e) =>
              dispatch(adminAddCategoryAction.setCategory(e.target.value))
            }
            placeholder="Masukan nama kategori"
            type="text"
            value={categoryData.categoryName}
          />
        </div>
      </div>

      <div className="d-flex justify-content-end">
        <Link className="me-2" to="/admin/dash/category">
          <button type="submit" className="btn btn-outline-danger">
            Batal
          </button>
        </Link>
        <button type="submit" className="btn btn-primary ms-2">
          Simpan
        </button>
      </div>
    </form>
  );
};

export default AddCategoryForm;