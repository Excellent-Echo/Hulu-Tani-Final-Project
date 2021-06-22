import React from "react";
import SideNavBar from "../../../components/organisms/admin/SideNavBar/SideAdminNavBar";
import HeaderAdmin from "../../../components/organisms/admin/HeaderAdmin/HeaderAdmin";
import { Link } from "react-router-dom";

const AdminAddProductDashPage = () => {
  return (
    <div className="d-flex user-select-none">
      <SideNavBar />

      <div className="d-flex flex-column vh-100 vw-100">
        <HeaderAdmin />

        <div className="h-100 w-100 px-4">
          <div className="h-75 ahdp_recent">
            <h3 className="h-25 d-flex align-items-center">Produk > Tambah</h3>

            <form className="bg-white p-3 rounded-3">
              {/* product name */}
              <div className="mb-3 row">
                <label
                  htmlFor="inputProductName"
                  className="col-sm-2 col-form-label"
                >
                  Nama
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputProductName"
                    placeholder="Enter product name"
                  />
                </div>
              </div>
              {/* product name */}

              {/* product category */}
              <div className="mb-3 row">
                <label
                  htmlFor="inputProductCategory"
                  className="col-sm-2 col-form-label"
                >
                  Kategori
                </label>
                <div className="col-sm-10">
                  <select id="inputProductCategory" className="form-select">
                    <option value="">Select product category</option>
                  </select>
                </div>
              </div>
              {/* product category */}

              {/* product description */}
              <div className="mb-3 row">
                <label
                  htmlFor="inputProductDescription"
                  className="col-sm-2 col-form-label"
                >
                  Description
                </label>
                <div className="col-sm-10">
                  <textarea
                    className="form-control"
                    id="inputProductDescription"
                    rows="3"
                    placeholder="Enter product description"
                  />
                </div>
              </div>
              {/* product description */}

              {/* amount product */}
              <div className="mb-3 d-flex">
                <label
                  htmlFor="inputAmountProduct"
                  className="col-sm-2 col-form-label"
                >
                  Jumlah
                </label>
                <div className="input-group mb-3">
                  <input
                    id="inputAmountProduct"
                    type="text"
                    className="form-control"
                    placeholder="Enter amount product"
                  />
                  <span className="input-group-text" id="inputAmountProduct">
                    PCS
                  </span>
                </div>
              </div>
              {/* amount product */}

              {/* product price */}
              <div className="mb-3 d-flex">
                <label
                  htmlFor="inputProductPrice"
                  className="col-sm-2 col-form-label"
                >
                  Harga
                </label>
                <div className="input-group mb-3">
                  <span className="input-group-text" id="inputProductPrice">
                    IDR
                  </span>
                  <input
                    id="inputProductPrice"
                    type="text"
                    className="form-control"
                    placeholder="Enter product price"
                  />
                </div>
              </div>
              {/* product price */}

              {/* product image */}
              <div className="mb-3 d-flex">
                <label
                  htmlFor="inputPassword"
                  className="col-sm-2 col-form-label"
                >
                  Gambar
                </label>
                <div className="input-group mb-3">
                  <input
                    type="file"
                    className="form-control"
                    id="inputGroupFile01"
                  />
                </div>
              </div>
              {/* product image */}
              <Link to="/admin/dash/product">
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
    </div>
  );
};

export default AdminAddProductDashPage;