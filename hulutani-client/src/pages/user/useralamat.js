
import React from 'react'
import { Link } from "react-router-dom";

import '../../assets/css/userglobal.css'
import '../../assets/css/userpage.css'
import Navbar from '../../components/organisms/user/navbar';
import Footer from '../../components/organisms/user/footer'
import ModalTbAlamat from '../../components/organisms/user/modaltbalamat';
import ModalEdAlamat from '../../components/organisms/user/modaledalamat';

function UserAlamat() {
    return (
        <>
            <Navbar />
            <div className="container-fluid fluid-page user-page-container">
                <div className="container">
                    <div className="row breadcrumbs-container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Profil Saya</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Transaksi</li>
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
                                        Alamat Saya
                                    </h1>
                                </div>
                                <div className="col-sm d-flex justify-items-end">
                                    <button className="primary btn-add" data-bs-toggle="modal" data-bs-target="#modalTbAlamat">
                                    </button>
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className="row content-content">
                                {/* CARD ALAMAT */}
                                <div className="col-sm card-container">
                                    <div className="card product-card card-outline-primary h-80" style={{ width: "15rem" }}>
                                        <div className="card-body">
                                            <div className="row badge-container align-items-start">
                                                <div className="col-sm">
                                                    <span class="status-badge b-primary px-2">Utama</span>
                                                </div>
                                                <div className="col-sm d-flex justify-content-end">
                                                    <button className="b-danger xsmall btn-trash me-2"></button>
                                                    <button className="b-info xsmall btn-edit" data-bs-toggle="modal" data-bs-target="#modalEdAlamat"></button>
                                                </div>
                                            </div>
                                            <br />
                                            <br />
                                            <div className="row align-items-end">
                                                <h5 className="card-title accent-title">[Nama Penerima]</h5>
                                                <span className="small-text">[No Telp]</span>
                                                <span className="">
                                                    [Alamat]
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* END OF CARD ALAMAT */}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

            {/* MODALS */}
                <ModalTbAlamat />
                <ModalEdAlamat />
            {/* END OF MODALS */}
        </>
    )
}

export default UserAlamat
