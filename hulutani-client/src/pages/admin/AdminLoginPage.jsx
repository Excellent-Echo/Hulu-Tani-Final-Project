import React from "react";
import LoginImg from "../../assets/images/login-img.svg";

const AdminLoginPage = () => {
  return (
    <div className="vh-100 d-flex">
      <div className="w-50 d-flex justify-content-center align-items-center p-5 row">
        <form>
          <i className="fas fa-sun fs-1"></i>
          <div className="my-5">
            <h1>Selamat Datang</h1>
            <p>Masukkan kredensial Anda untuk melanjutkan</p>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Alamat Surel
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Masukan alamat surel"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Kata Sandi
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Masukan kata sandi"
            />
          </div>
          <button type="submit" className="btn btn-primary col-12 mt-3">
            Submit
          </button>
        </form>
      </div>

      <div className="w-50">
        <img className="img-fluid" src={LoginImg} alt="" />
      </div>
    </div>
  );
};

export default AdminLoginPage;
