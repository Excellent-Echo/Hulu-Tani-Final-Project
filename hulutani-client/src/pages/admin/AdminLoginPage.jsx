import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import AuthShape from "../../assets/images/auth-bg-shape.svg";
import LoginIllustration from "../../assets/images/login-img.svg";
import adminLoginAction from "../../redux/admin/login/adminLoginAction";

function AdminLoginPage() {
  const loginData = useSelector((state) => state.adminLogin),
    dispatch = useDispatch(),
    history = useHistory(),
    handleAdminLogin = (e) => {
      e.preventDefault();
      dispatch(
        adminLoginAction.adminLogin(loginData.email, loginData.password)
      );
      history.push("/admin/dash");
    };

  return (
    <>
      <div className="container-fluid fluid-page auth-page-container">
        <img src={AuthShape} alt="" className="img-fluid auth-bg-shape login" />
        <div className="container">
          <div className="row justify-content-center auth-container">
            <div className="col-sm content-container">
              <div className="row">
                <h1 className="title text-center">Masuk dengan akunmu</h1>
              </div>
              <div className="row">
                <form onSubmit={handleAdminLogin}>
                  <div className="mb-3">
                    <label for="inputAdminEmail" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="inputAdminEmail"
                      value={loginData.email}
                      onChange={(e) =>
                        dispatch(adminLoginAction.setEmail(e.target.value))
                      }
                    />
                  </div>

                  <div className="mb-3">
                    <label for="inputAdminPassword" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      id="inputAdminPassword"
                      value={loginData.password}
                      onChange={(e) =>
                        dispatch(adminLoginAction.setPassword(e.target.value))
                      }
                    />
                  </div>

                  <button type="submit" className="primary long">
                    Masuk
                  </button>
                </form>
              </div>
            </div>

            <div className="col-sm img-container">
              <img src={LoginIllustration} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLoginPage;