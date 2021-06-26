import React from 'react'

import '../../assets/css/transaksi.css'
import Navbar from '../../components/organisms/user/navbar'

function KantongBelanja() {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="container">
                    <div className="row breadcrumbs-container"> 
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Kantong Belanja</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="container-fluid fluid-page kabel-container">
                <div className="row">
                    <div className="col-sm kabel-content-container">
                        <div className="container-fluid">
                            <div className="container">
                                <div className="col-sm">
                                    <div className="row align-items-center justify-content-center kabel">
                                        <div className="row align-items-center kabel-title">
                                            <div className="col-sm d-flex justify-content-start">
                                                <h1 className="title">
                                                    Kantong Belanja
                                                </h1>
                                            </div>
                                            <div className="col-sm d-flex justify-content-end">
                                                <h3 className="accent-title">
                                                    [Jml] Produk
                                                </h3>
                                            </div>
                                        </div>
                                        <div className="row kabel-content align-self-middle justify-content-center">
                                            {/* Kantong Item */}
                                            <div className="row kabel-item justify-content-center align-items-center">
                                                <div className="col-sm-12 item-list">
                                                    <div className="row align-items-center">
                                                        <div className="col-sm">
                                                            <div className="row align-items-center">
                                                                <div className="col-sm-5">
                                                                    <div className="img-container bg-pattern">
                                                                        <img src="" alt="" className="img-fluid rounded" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm">
                                                                    <h4 className="accent-title">
                                                                        [Nama]
                                                                    </h4>
                                                                    <span className="text-muted lh-lg">
                                                                        [Kategori]
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm">
                                                            <div className="row align-items-center justify-content-center">
                                                                <span className="text-end">
                                                                    [QTY]
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <div className="row justify-content-end align-items-center ">
                                                                <div className="col-sm me-5 d-flex justify-content-end">
                                                                    <span className="text-end">
                                                                        <h5>
                                                                            Rp. 111.000
                                                                        </h5>
                                                                    </span>
                                                                </div>
                                                                <div className="col-sm-2 d-flex align-items-center justify-content-end">
                                                                    <button className="b-danger small btn-trash"></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End of Kantong Item */}
                                            {/* Kantong Item */}
                                            <div className="row justify-content-center align-items-center">
                                                <div className="col-sm-12 item-list">
                                                    <div className="row align-items-center">
                                                        <div className="col-sm">
                                                            <div className="row align-items-center">
                                                                <div className="col-sm-5">
                                                                    <div className="img-container bg-pattern">
                                                                        <img src="" alt="" className="img-fluid rounded" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm">
                                                                    <h4 className="accent-title">
                                                                        [Nama]
                                                                    </h4>
                                                                    <span className="text-muted lh-lg">
                                                                        [Kategori]
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm">
                                                            <div className="row align-items-center justify-content-center">
                                                                <span className="text-end">
                                                                    [QTY]
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <div className="row justify-content-end align-items-center ">
                                                                <div className="col-sm me-5 d-flex justify-content-end">
                                                                    <span className="text-end">
                                                                        <h5>
                                                                            Rp. 111.000
                                                                        </h5>
                                                                    </span>
                                                                </div>
                                                                <div className="col-sm-2 d-flex align-items-center justify-content-end">
                                                                    <button className="b-danger small btn-trash"></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End of Kantong Item */}
                                            {/* Kantong Item */}
                                            <div className="row justify-content-center align-items-center">
                                                <div className="col-sm-12 item-list">
                                                    <div className="row align-items-center">
                                                        <div className="col-sm">
                                                            <div className="row align-items-center">
                                                                <div className="col-sm-5">
                                                                    <div className="img-container bg-pattern">
                                                                        <img src="" alt="" className="img-fluid rounded" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm">
                                                                    <h4 className="accent-title">
                                                                        [Nama]
                                                                    </h4>
                                                                    <span className="text-muted lh-lg">
                                                                        [Kategori]
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm">
                                                            <div className="row align-items-center justify-content-center">
                                                                <span className="text-end">
                                                                    [QTY]
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <div className="row justify-content-end align-items-center ">
                                                                <div className="col-sm me-5 d-flex justify-content-end">
                                                                    <span className="text-end">
                                                                        <h5>
                                                                            Rp. 111.000
                                                                        </h5>
                                                                    </span>
                                                                </div>
                                                                <div className="col-sm-2 d-flex align-items-center justify-content-end">
                                                                    <button className="b-danger small btn-trash"></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End of Kantong Item */}
                                            {/* Kantong Item */}
                                            <div className="row justify-content-center align-items-center">
                                                <div className="col-sm-12 item-list">
                                                    <div className="row align-items-center">
                                                        <div className="col-sm">
                                                            <div className="row align-items-center">
                                                                <div className="col-sm-5">
                                                                    <div className="img-container bg-pattern">
                                                                        <img src="" alt="" className="img-fluid rounded" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-sm">
                                                                    <h4 className="accent-title">
                                                                        [Nama]
                                                                    </h4>
                                                                    <span className="text-muted lh-lg">
                                                                        [Kategori]
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm">
                                                            <div className="row align-items-center justify-content-center">
                                                                <span className="text-end">
                                                                    [QTY]
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <div className="row justify-content-end align-items-center ">
                                                                <div className="col-sm me-5 d-flex justify-content-end">
                                                                    <span className="text-end">
                                                                        <h5>
                                                                            Rp. 111.000
                                                                        </h5>
                                                                    </span>
                                                                </div>
                                                                <div className="col-sm-2 d-flex align-items-center justify-content-end">
                                                                    <button className="b-danger small btn-trash"></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* End of Kantong Item */}
                                        </div>
                                        <div className="row kabel-footer align-items-center align-self-end">
                                            <div className="col-sm d-flex justify-content-start">
                                                <h5 className="accent-title">
                                                    <a href="" className="btn-lanjut-belanja">
                                                        Lanjut Belanja
                                                    </a>
                                                </h5>
                                            </div>
                                            <div className="col-sm-6">
                                                <div className="row justify-content-end">
                                                    <div className="col-sm me-5 d-flex align-items-center justify-content-end">
                                                        <span className="text-end">
                                                            Subtotal : &nbsp;
                                                            <h3 className="accent-title">
                                                                Rp. 111.000
                                                            </h3>
                                                        </span>
                                                    </div>
                                                    <div className="col-sm-2 d-flex align-items-center justify-content-end">
                                                        <button className="primary btn-checkout"></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-2 img-kabel-container">
                        gambar
                    </div>
                </div>
            </div>
        </>
    )
}

export default KantongBelanja
