import React from 'react'

import '../assets/css/auth.css'

import AuthShape from '../assets/images/auth-bg-shape.svg'
import RegisterIllustration from '../assets/images/register-img.svg'

function Register() {
    return (
        <>
            <div className="container-fluid fluid-page auth-page-container">
                <img src={ AuthShape } alt="" className="img-fluid auth-bg-shape register"/>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm img-container">
                            <img src={ RegisterIllustration } alt="" className="img-fluid" />
                        </div>
                        <div className="col-sm content-container">
                            <div className="row">
                                <h1 className="title text-center">
                                    Daftar akun baru
                                </h1>
                            </div>
                            <div className="row">
                            <form>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                                </div>
                                <br />
                                <br />
                                <button type="submit" className="primary long">Daftar</button>
                            </form>
                                <p className="small text-center">
                                    Udah punya akun?&nbsp;
                                    <b className="form-helper-text">
                                        Masuk
                                    </b>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register