import React,{useEffect} from 'react'
import { Link } from "react-router-dom";

import '../../assets/css/userglobal.css'
import '../../assets/css/userpage.css'
import BlankUser from '../../assets/images/blank-user.png'
import UserSidebar from '../../components/organisms/user/usersidebar';
import Navbar from '../../components/organisms/user/navbar';
import Footer from '../../components/organisms/user/footer'
import ModalProfilePic from '../../components/organisms/user/modalprofilepic';
import {useDispatch, useSelector} from "react-redux"
import userProfileAction from '../../redux/user/profile/userProfileAction';

function UserEdit() {
    const userProfile = useSelector(state => state.userProfile.name)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(userProfileAction.showUserDetail())
    }, [])
    return (
        <>
            <Navbar />
            <div className="container-fluid breadcrumbs">
                <div className="container">
                    <div className="row breadcrumbs-container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Profil Saya</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <UserSidebar />
            <div className="container-fluid fluid-page user-page-container">
                <div className="container">
                    <div className="row user-content-container">
                        <div className="col-sm user-content">
                            <div className="row content-title">
                                <div className="col-sm">
                                    <h1 className="accent-title accent-text">
                                        Profil Saya
                                    </h1>
                                </div>
                                <div className="col-sm">

                                </div>
                            </div>
                            <br />
                            <div className="row content-edit">
                                <div className="col-sm-5">
                                    <div className="row">
                                        <h4 className="accent-title">
                                           Informasi Pribadi
                                       </h4>
                                       <div className="row">
                                           <p className="subtitle">
                                                Mari lebih saling mengenal dengan tidak
                                                memasukkan informasi palsu.
                                           </p>
                                       </div>
                                       {/* <div className="row user-avatar-container" data-bs-toggle="modal" data-bs-target="#modalProfilePic">
                                            <img src={ BlankUser } alt="" className="img-fluid user-avatar" />
                                       </div> */}
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <form className="row g-3">
                                        <div className="col-sm-12">
                                            <label for="namaLengkap" className="form-label accent-title">Nama Lengkap</label>
                                            <input type="name" className="form-control userpages small" value={userProfile.nama} id="namaLengkap" disabled/>
                                        </div>
                                        <div className="col-sm-6">
                                            <label for="tglLahir" className="form-label accent-title">Tanggal Lahir</label>
                                            <input type="date" className="form-control userpages small" value={userProfile.tanggal_lahir} id="tglLahir" disabled/>
                                        </div>
                                        <div className="col-sm-6">
                                            <label for="jnsKelamin" className="form-label accent-title">Jenis Kelamin</label>
                                            <input type="name" className="form-control userpages small" value={userProfile.jenis_kelamin} id="namaLengkap" disabled/>
                                        </div>
                                        <div className="col-sm-6">
                                            <label for="email" className="form-label accent-title">Email</label>
                                            <input type="email" className="form-control userpages small" value={userProfile.email} id="email" disabled/>
                                        </div>
                                        <div className="col-sm-6">
                                            <label for="noTelp" className="form-label accent-title">No. Telepon</label>
                                            <input type="text" className="form-control userpages small" value={userProfile.nomor_handphone} id="notelp" disabled/>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            {/* <div className="row content-edit">
                                <div className="col-sm-5">
                                    <div className="row">
                                        <h4 className="accent-title">
                                           Password
                                       </h4>
                                       <div className="row">
                                           <p className="subtitle">
                                                Merasa <i>password</i>mu tidak aman?
                                                Ganti dengan yang lebih baik.
                                           </p>
                                       </div>
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <form className="row g-3">
                                        <div className="col-sm-12">
                                            <label for="passwordLama" className="form-label accent-title">Password Saat Ini</label>
                                            <input type="password" className="form-control userpages small" id="passwordLama"/>
                                        </div>
                                        <div className="col-sm-6">
                                            <label for="passwordBaru" className="form-label accent-title">Password Baru</label>
                                            <input type="password" className="form-control userpages  small" id="passwordBaru"/>
                                        </div>
                                        <div className="col-sm-6">
                                            <label for="noTelp" className="form-label accent-title">Ulangi Password Baru</label>
                                            <input type="password" className="form-control userpages  small" id="passwordBaruUlang"/>
                                        </div>
                                        <div className="col-12">
                                            <br />
                                            <button type="submit" className="button primary long">Ubah Password</button>
                                        </div>
                                    </form>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

            {/* MODALS */}
            <ModalProfilePic />
            {/* END OF MODALS */}
        </>
    )
}

export default UserEdit
