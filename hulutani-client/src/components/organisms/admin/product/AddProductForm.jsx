import React from "react";
import { Link } from "react-router-dom";

const AddProductForm = () => {
  return (
    <form className="border-3 border p-2 admin-form">
      <div className="row mb-3">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
          Nama Produk
        </label>
        <div className="col-sm-10">
          <input type="email" className="form-control" id="inputEmail3" />
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
          Kategori
        </label>
        <div className="col-sm-10">
          <select className="form-select" aria-label="Default select example">
            <option selected>Pilih Kategori</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
          Deskripsi
        </label>
        <div className="col-sm-10">
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
          Jumlah
        </label>
        <div className="col-sm-10 input-group">
          <span className="input-group-text" id="basic-addon1">
            @
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>

      <div className="row mb-3 input-group">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
          Harga
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
          <span className="input-group-text" id="basic-addon1">
            @
          </span>
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
          Gambar
        </label>
        <div className="col-sm-10">
          <input type="email" className="form-control" id="inputEmail3" />
        </div>
      </div>

      <div className="d-flex justify-content-end">
        <Link className="me-2">
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

export default AddProductForm;