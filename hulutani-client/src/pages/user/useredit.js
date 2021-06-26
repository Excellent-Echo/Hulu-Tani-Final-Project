import React from 'react'
import { Link } from "react-router-dom";

import '../../assets/css/userpage.css'
import BlankUser from '../../assets/images/blank-user.png'
import Navbar from '../../components/organisms/user/navbar';

function UserEdit() {
    return (
        <>
            <Navbar />
            <div className="container-fluid nav-container">
                <nav className="navbar navbar-expand-lg bg-light">
                    <div className="container">
                        <a className="navbar-brand title accent-text" href="#">HuluTani</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mx-4 mb-lg-0">
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Kategori
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <form className="ms-4 me-auto">
                                <input className="form-control nav-search" type="search" placeholder="Cari 'wortel'" aria-label="Search"/>
                            </form>
                            <div className="navbar-nav ms-2">
                                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                                    <a className="nav-link" href="#">Features</a>
                                    <a className="nav-link" href="#">Pricing</a>
                                    <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <div className="container-fluid fluid-page user-page-container">
                <div className="container">
                    <div className="row breadcrumbs-container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Profil Saya</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Edit Profil</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="row user-sidebar-container">
                        <div className="col-sm-3 user-sidebar">
                            <div className="row user-sidebar-title">
                                <h2 className="title">Profil Saya</h2>
                            </div>
                            <div className="row user-sidebar-content">
                                <div className="list-group">
                                <Link to="user-transaction">
                                    <button className="list-group-item list-group-item-action user-sidebar-button current">
                                        <span className="sidebar-button">
                                            <span className="user-sidebar-icon transaksi"></span>
                                            Transaksi
                                        </span>
                                    </button>
                                    </Link>
                                    <Link to="user-address">
                                    <button className="list-group-item list-group-item-action user-sidebar-button">
                                        <span className="sidebar-button">
                                            <span className="user-sidebar-icon alamat"></span>
                                            Alamat Saya
                                        </span>
                                    </button>
                                    </Link>
                                    <Link to="user-edit">
                                    <button className="list-group-item list-group-item-action user-sidebar-button">
                                        <span className="sidebar-button">
                                            <span className="user-sidebar-icon edit"></span>
                                            Edit Profil
                                        </span>
                                    </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row user-content-container">
                        <div className="col-sm-9 user-content">
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
                                       <div className="row user-avatar-container">
                                            <img src={ BlankUser } alt="" className="img-fluid user-avatar" />
                                       </div>
                                    </div>
                                </div>
                                <div className="col-sm">
                                    <form className="row g-3">
                                        <div className="col-sm-12">
                                            <label for="namaLengkap" className="form-label accent-title">Nama Lengkap</label>
                                            <input type="name" className="form-control" id="namaLengkap"/>
                                        </div>
                                        <div className="col-sm-6">
                                            <label for="tglLahir" className="form-label accent-title">Tanggal Lahir</label>
                                            <input type="date" className="form-control" id="tglLahir" placeholder="1234 Main St"/>
                                        </div>
                                        <div className="col-sm-6">
                                            <label for="jnsKelamin" className="form-label accent-title">Jenis Kelamin</label>
                                            <select id="jnsKelamin" className="form-select">
                                                <option selected>Pilih salah satu</option>
                                                <option>Laki-laki</option>
                                                <option>Perempuan</option>
                                            </select>                                        
                                        </div>
                                        <div className="col-sm-6">
                                            <label for="email" className="form-label accent-title">Email</label>
                                            <input type="email" className="form-control" id="email"/>
                                        </div>
                                        <div className="col-sm-6">
                                            <label for="noTelp" className="form-label accent-title">No. Telepon</label>
                                            <input type="text" className="form-control" id="notelp"/>
                                        </div>
                                        <div className="col-12">
                                            <br />
                                            <button type="submit" className="button primary long">Simpan Perubahan</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                            <div className="row content-edit">
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
                                            <input type="password" className="form-control" id="passwordLama"/>
                                        </div>
                                        <div className="col-sm-6">
                                            <label for="passwordBaru" className="form-label accent-title">Password Baru</label>
                                            <input type="password" className="form-control" id="passwordBaru"/>
                                        </div>
                                        <div className="col-sm-6">
                                            <label for="noTelp" className="form-label accent-title">Ulangi Password Baru</label>
                                            <input type="password" className="form-control" id="passwordBaruUlang"/>
                                        </div>
                                        <div className="col-12">
                                            <br />
                                            <button type="submit" className="button primary long">Ubah Password</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserEdit
