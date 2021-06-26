import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import adminAddCategoryAction from "../../../redux/admin/category/add/adminAddCategoryAction";

import HeaderAdmin from "../../../components/organisms/admin/AdminHeader";
import SideAdminNavBar from "../../../components/organisms/admin/AdminSideNavBar";

const AdminAddCategoryDashPage = () => {
  const categoryData = useSelector((state) => state.adminAddCategory);
  const dispatch = useDispatch();
  const history = useHistory();

  const addCategoryHandler = (e) => {
    e.preventDefault();
    dispatch(adminAddCategoryAction.addCategory(categoryData.categoryName));
    history.push("/admin/dash");
  };

  return (
    <div className="d-flex user-select-none">
      <SideAdminNavBar />

      <div className="d-flex flex-column vh-100 vw-100">
        <HeaderAdmin />

        <div className="h-100 w-100 px-4">
          <div className="h-75 ahdp_recent">
            <h3 className="h-25 d-flex align-items-center">
              Kategori &gt; Tambah
            </h3>

            <form className="bg-white p-3 rounded-3" onSubmit={addCategoryHandler}>
              {/* category name */}
              <div className="mb-3 row">
                <label
                  htmlFor="inputCategoryName"
                  className="col-sm-2 col-form-label"
                >
                  Nama
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputCategoryName"
                    placeholder="Enter product name"
                    value={categoryData.categoryName}
                    onChange={e=> dispatch(adminAddCategoryAction.setCategory(e.target.value))}
                  />
                </div>
              </div>
              {/* category name */}

              <Link to="/admin/dash/category">
                <button type="button" className="btn btn-outline-danger">
                  Batal
                </button>
              </Link>
              <button type="submit" className="btn btn-primary">
                Simpan
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminAddCategoryDashPage;