import React from "react";
import HeaderAdmin from "../../../components/organisms/admin/HeaderAdmin/HeaderAdmin";
import { Link } from "react-router-dom";
import SideAdminNavBar from "../../../components/organisms/admin/SideNavBar/SideAdminNavBar";

const AdminEditCategoryDashPage = () => {
  return (
    <div className="user-select-none">
      <HeaderAdmin />
      <SideAdminNavBar />

      <div className="admin-content-container">
        <div className="h-75 ahdp_recent">
          <h3 className="h-25 d-flex align-items-center">Kategori > Ubah</h3>

          <form className="bg-white p-3 rounded-3">
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
                  value="[Nama Kategori]"
                />
              </div>
            </div>
            {/* category name */}

            <Link to="/admin/dash/category">
              <button type="button" className="btn btn-outline-danger">
                Batal
              </button>
            </Link>
            <button type="button" className="btn btn-primary">
              Simpan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminEditCategoryDashPage;