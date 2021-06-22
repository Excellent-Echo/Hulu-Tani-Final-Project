import React,{useEffect} from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import adminEditCategoryAction from "../../../redux/admin/category/edit/adminEditCategoryAction"

import HeaderAdmin from "../../../components/organisms/admin/HeaderAdmin/HeaderAdmin";
import SideAdminNavBar from "../../../components/organisms/admin/SideNavBar/SideAdminNavBar";

const AdminEditCategoryDashPage = () => {
  const adminEditCategory = useSelector(state => state.adminEditCategory)
  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(adminEditCategoryAction.getCategory(id))
  }, [])

  const updateCategoryHadler = (e) =>{
    e.preventDefault()
    dispatch(adminEditCategoryAction.editCategory(
      id,
      adminEditCategory.categoryName
    ))
  }

  return (
    <div className="user-select-none">
      <HeaderAdmin />
      <SideAdminNavBar />

        <div className="h-100 w-100 px-4">
          <div className="h-75 ahdp_recent">
            <h3 className="h-25 d-flex align-items-center">Kategori &gt; Ubah</h3>

            <form className="bg-white p-3 rounded-3" onSubmit={updateCategoryHadler}>
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
                    value={adminEditCategory.categoryName}
                    onChange={e=> dispatch(adminEditCategoryAction.setCategory(e.target.value))}
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
  );
};

export default AdminEditCategoryDashPage;