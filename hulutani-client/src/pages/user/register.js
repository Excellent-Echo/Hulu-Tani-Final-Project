import React from 'react'
import { Link } from 'react-router-dom'

import '../../assets/css/userglobal.css'
import '../../assets/css/auth.css'
import AuthShape from '../../assets/images/auth-bg-shape.svg'
import RegisterIllustration from '../../assets/images/register-img.svg'
import Navbar from '../../components/organisms/user/navbar'
import Footer from '../../components/organisms/user/footer'

import {useSelector, useDispatch} from "react-redux"
import userRegisterAction from "../../redux/user/register/userRegisteAction"

function Register() {
    const registerData = useSelector(state => state.userRegister)
    const dispatch = useDispatch()

    return (
        <>
            <Navbar />
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
                                    <input 
                                    type="email" 
                                    className=" userpages" 
                                    id="exampleInputEmail1" 
                                    aria-describedby="emailHelp"
                                    value={registerData.email}
                                    onChange={(e)=> dispatch(userRegisterAction.setEmail(e.target.value))}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input 
                                    type="password" 
                                    className="form-control userpages" 
                                    id="exampleInputPassword1"
                                    value={registerData.password}
                                    onChange={(e)=> dispatch(userRegisterAction.setPassword(e.target.value))}
                                    />
                                </div>
                                <br />
                                <br />
                                <Link to={`/register-2`}>
                                <button type="submit" className="primary long">Daftar</button>
                                </Link>
                            </form>
                                <p className="small text-center">
                                    Sudah memiliki akun?&nbsp;
                                    <Link to="/login">
                                    <b className="form-helper-text">
                                        Masuk
                                    </b>
                                    </Link>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Register