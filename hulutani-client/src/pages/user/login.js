import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import '../../assets/css/userglobal.css'
import '../../assets/css/auth.css'
import AuthShape from '../../assets/images/auth-bg-shape.svg'
import LoginIllustration from '../../assets/images/login-img.svg'
import userLoginAction from "../../redux/user/login/userLoginAction"
import Navbar from '../../components/organisms/user/navbar'
import Footer from '../../components/organisms/user/footer'

function Login() {
    const loginData = useSelector(state => state.userLogin)
    const dispatch = useDispatch()
    const history = useHistory()

    const loginHandler = (e)=> {
        e.preventDefault()
        //console.log(history)
        dispatch(userLoginAction.userLogin(
            loginData.email,
            loginData.password,
            history
        ))
        
    }
    return (
        <>
            <Navbar />
            <div className="container-fluid fluid-page auth-page-container">
                <img src={ AuthShape } alt="" className="img-fluid auth-bg-shape login" />
                <div className="container">
                    <div className="row justify-content-center auth-container">
                        <div className="col-sm content-container">
                            <div className="row">
                                <h1 className="title text-center">
                                    Masuk dengan akunmu
                                </h1>
                            </div>
                            <div className="row">
                            <form onSubmit={loginHandler}>
                                <div className="mb-3">
                                    <label for="email" className="form-label">Email</label>
                                    <input 
                                    type="email" 
                                    className="form-control userpages" 
                                    id="email"
                                    value={loginData.email}
                                    onChange={(e)=> dispatch(userLoginAction.setEmail(e.target.value))}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label for="password" className="form-label">Password</label>
                                    <input 
                                    type="password" 
                                    className="form-control userpages" 
                                    id="password"
                                    value={loginData.password}
                                    onChange={(e)=> dispatch(userLoginAction.setPassword(e.target.value))}
                                    />
                                    {/* <p className="subtitle small text-end form-helper-text">Lupa Password</p> */}
                                </div>
                                <button 
                                type="submit" 
                                className="primary long"
                                >Masuk</button>
                            </form>
                                <p className="small text-center">
                                    Belum punya akun?&nbsp;
                                    <b className="form-helper-text">
                                        <a href="/register">
                                            Daftar
                                        </a>
                                    </b>
                                </p>
                            </div>
                        </div>
                        <div className="col-sm img-container">
                            <img src={ LoginIllustration } alt="" className="img-fluid" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login