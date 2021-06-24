
import React from 'react'

import '../../assets/css/userpage.css'

function UserAlamat() {
    return (
        <>
            <div className="container-fluid nav-container">
                <nav class="navbar navbar-expand-lg bg-light">
                    <div class="container">
                        <a class="navbar-brand title accent-text" href="#">HuluTani</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mx-4 mb-lg-0">
                                <li class="nav-item dropdown">
                                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Kategori
                                    </a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                    </ul>
                                </li>
                            </ul>
                            <form class="ms-4 me-auto">
                                <input class="form-control nav-search" type="search" placeholder="Cari 'wortel'" aria-label="Search"/>
                            </form>
                            <div class="navbar-nav ms-2">
                                    <a class="nav-link active" aria-current="page" href="#">Home</a>
                                    <a class="nav-link" href="#">Features</a>
                                    <a class="nav-link" href="#">Pricing</a>
                                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
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
                                    <button className="list-group-item list-group-item-action user-sidebar-button">
                                        <span className="sidebar-button">
                                            <span className="user-sidebar-icon transaksi"></span>
                                            Transaksi
                                        </span>
                                    </button>
                                    <button className="list-group-item list-group-item-action user-sidebar-button current">
                                        <span className="sidebar-button">
                                            <span className="user-sidebar-icon alamat"></span>
                                            Alamat Saya
                                        </span>
                                    </button>
                                    <button className="list-group-item list-group-item-action user-sidebar-button">
                                        <span className="sidebar-button">
                                            <span className="user-sidebar-icon edit"></span>
                                            Edit Profil
                                        </span>
                                    </button>
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
                                    <button className="primary btn-add">
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
                                                    <button className="b-info xsmall btn-edit"></button>
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
                                {/* CARD ALAMAT */}
                                <div className="col-sm card-container">
                                    <div className="card product-card card-outline-primary h-80" style={{ width: "15rem" }}>
                                        <div className="card-body">
                                            <div className="row badge-container align-items-start">
                                                <div className="col-sm">
                                                    <span class="status-badge b-primary px-2">Utama</span>
                                                </div>
                                                <div className="col-sm d-flex justify-content-end">
                                                    <button className="b-danger btn-trash me-2"></button>
                                                    <button className="b-info btn-edit"></button>
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
                                                    <button className="b-info xsmall btn-edit"></button>
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
        </>
    )
}

export default UserAlamat
