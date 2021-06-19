import React, {useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import userLoginAction from '../../redux/user/login/userLoginAction';

import '../../assets/css/auth.css'

import AuthShape from '../../assets/images/auth-bg-shape.svg'
import LoginIllustration from '../../assets/images/login-img.svg'

function Login() {
    const userLoginData = useSelector(state => state.userLogin);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(userLoginAction.resetForm());
    }, [])

    const loginSubmitHandler = e =>{
        e.preventDefault();
        dispatch(userLoginAction.loginUser(
            userLoginData.email,
            userLoginData.password
        ))
    }

    return (
        <>
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
                            <form>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email</label>
                                    <input 
                                    type="email" 
                                    className="form-control" 
                                    id="exampleInputEmail1" 
                                    aria-describedby="emailHelp"
                                    value={userLoginData.email} 
                                    onChange={e => dispatch(userLoginAction.setEmail(e.target.value))}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input 
                                    type="password" 
                                    className="form-control" 
                                    id="exampleInputPassword1"
                                    value={userLoginData.password} 
                                    onChange={e => dispatch(userLoginAction.setPassword(e.target.value))}
                                    />
                                    <p className="subtitle small text-end form-helper-text">Lupa Password</p>
                                </div>
                                <button type="submit" className="primary long">Masuk</button>
                            </form>
                                <p className="small text-center">
                                    Belum punya akun?&nbsp;
                                    <b className="form-helper-text">
                                        Daftar
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
        </>
    )
}

export default Login