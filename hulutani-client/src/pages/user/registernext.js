import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import '../../assets/css/auth.css'
import AuthShape from '../../assets/images/auth-bg-shape.svg'
import RegisterIllustration from '../../assets/images/register-img.svg'
import Navbar from '../../components/organisms/user/navbar'
import Footer from '../../components/organisms/user/footer'

import {useSelector, useDispatch} from "react-redux"
import userRegisterAction from "../../redux/user/register/userRegisteAction"


function RegisterNext() {
    const registerData = useSelector(state => state.userRegister)
    const dispatch = useDispatch()
    const history = useHistory()

    const userRegisterHandler= (e)=> {
        e.preventDefault()
        //console.log(registerData)
        dispatch(userRegisterAction.registerUser(
            registerData.name,
            registerData.dateBirth,
            registerData.handphoneNumber,
            registerData.gender,
            registerData.email,
            registerData.password
        ))
        history.push("/login")
        dispatch(userRegisterAction.resetForm())
    }

    return (
        <>
            <Navbar />
            <div className="container-fluid fluid-page auth-page-container">
                <img src={AuthShape} alt="" className="img-fluid auth-bg-shape register" />
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm img-container">
                            <img src={RegisterIllustration} alt="" className="img-fluid" />
                        </div>
                        <div className="col-sm content-container">
                            <div className="row">
                                <h1 className="title text-center">
                                    Selesaikan Pendaftaranmu!
                                </h1>
                            </div>
                            <div className="row">
                                <form className="row g-3" onSubmit={userRegisterHandler}>
                                    <div className="col-sm-12">
                                        <label for="namaLengkap" className="form-label accent-title">Nama Lengkap</label>
                                        <input 
                                        type="name" 
                                        className="form-control" 
                                        id="namaLengkap" 
                                        value={registerData.name}
                                        onChange={(e)=> dispatch(userRegisterAction.setName(e.target.value))}
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <label for="tglLahir" className="form-label accent-title">Tanggal Lahir</label>
                                        <input 
                                        type="date" 
                                        className="form-control" 
                                        id="tglLahir" 
                                        placeholder="1234 Main St" 
                                        value={registerData.dateBirth}
                                        onChange={(e)=> dispatch(userRegisterAction.setDateBirth(e.target.value))}
                                        />
                                    </div>
                                    <div className="col-sm-6">
                                        <label for="jnsKelamin" className="form-label accent-title">Jenis Kelamin</label>
                                        <select 
                                        id="jnsKelamin" 
                                        className="form-select"
                                        onChange={(e)=> dispatch(userRegisterAction.setGender(e.target.value))}
                                        >
                                            <option selected>Pilih salah satu</option>
                                            <option value="Laki-laki">Laki-laki</option>
                                            <option value="Perempuan">Perempuan</option>
                                        </select>
                                    </div>
                                    <div className="col-sm">
                                        <label for="noTelp" className="form-label accent-title">No. Telepon</label>
                                        <input 
                                        type="text" 
                                        className="form-control" 
                                        id="notelp" 
                                        value={registerData.handphoneNumber}
                                        onChange={(e)=> dispatch(userRegisterAction.setHandphoneNumber(e.target.value))}
                                        />
                                    </div>
                                    <div className="col-12">
                                        <br />
                                        <button type="submit" className="button primary long">Selesaikan Pendaftaran</button>
                                    </div>
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

export default RegisterNext