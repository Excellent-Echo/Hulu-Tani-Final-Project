import React from 'react'

import '../../assets/css/userglobal.css'
import '../../assets/css/transaksi.css'
import Navbar from '../../components/organisms/user/navbar'
import Footer from '../../components/organisms/user/footer'

function Checkout() {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="container">
                    <div className="row breadcrumbs-container"> 
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Checkout</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="container-fluid fluid-page cekot-container">
                <div className="row">
                    <div className="col-sm cekot-content-container">
                        <div className="container-fluid">
                            <div className="container">
                                <div className="col-sm">
                                    <div className="row">
                                        <div className="col-sm">
                                            <h1 className="title">
                                                Checkout
                                            </h1>
                                        </div>
                                        <div className="col-sm">
                                            <h1 className="title text-end">
                                                Kantong Belanja
                                            </h1>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="row align-items-center justify-content-start cekot">
                                                <div className="row align-items-start cekot-title">
                                                    <div className="col-sm d-flex justify-content-start me-4  mb-4">
                                                        <div className="row">
                                                            <div className="col-sm">
                                                                <h4 className="accent-title mb-4">
                                                                    DETAIL PENGIRIMAN
                                                                </h4>
                                                                <div className="row align-items-center">
                                                                    <div className="col-sm">
                                                                        <h5 className="accent-title">
                                                                            ALAMAT
                                                                        </h5>
                                                                    </div>
                                                                    <div className="col-sm d-flex justify-content-end">
                                                                        <button className="b-info xsmall btn-edit"></button>
                                                                    </div>
                                                                </div>
                                                                <div className="row align-items-center">
                                                                    <div className="col-sm">
                                                                        <p>NAMA PENERIMA - NO TELP</p>
                                                                        <p>Arcu euismod pharetra adipiscing donec. Neque tortor ipsum ac, sed ornare nec tempor dui ut.</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-sm d-flex justify-content-end">
                                                        <div className="row">
                                                            <div className="col-sm">
                                                                <h4 className="accent-title mb-4 text-end">
                                                                    JASA PENGIRIMAN
                                                                </h4>
                                                                <div className="row align-items-center">
                                                                    <div className="col-sm">
                                                                        <h5 className="accent-title">
                                                                            JNE REG
                                                                        </h5>
                                                                    </div>
                                                                    <div className="col-sm d-flex justify-content-end">
                                                                        <h5>
                                                                            Rp. 12.000
                                                                        </h5>
                                                                    </div>
                                                                </div>
                                                                <div className="row align-items-center">
                                                                    <div className="col-sm">
                                                                        <p>3-4 Hari</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row kabel-footer align-items-center align-self-end">
                                                    <div className="row">
                                                        <div className="col-sm">
                                                            <h4 className="accent-title mb-4">
                                                                REKENING PEMBAYARAN
                                                            </h4>
                                                        </div>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-sm d-flex justify-content-start">
                                                            <select id="jnsKelamin" className="form-select">
                                                                <option selected>Pilih salah satu</option>
                                                                <option>Jank Bago</option>
                                                            </select>
                                                        </div>
                                                        <div className="col-sm">
                                                            <div className="row justify-content-end">
                                                                <div className="col-sm d-flex align-items-center justify-content-end">
                                                                    <button className="primary text-end">Bayar Sekarang</button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm">
                                            {/* white space */}
                                        </div>
                                        <div className="col-sm-5 cekot-kabel-container">
                                            <div className="row align-items-center justify-content-end cekot">
                                                <div className="row align-items-start justify-content-end cekot-title">
                                                    <div className="col-sm d-flex justify-content-end">
                                                        {/* Kantong Item */}
                                                        <div className="row kabel-item justify-content-center align-items-center">
                                                            <div className="col-sm item-list">
                                                                <div className="row align-items-center">
                                                                    <div className="col-sm">
                                                                        <div className="row">
                                                                            <div className="col-sm-4">
                                                                                <div className="sm-img-container bg-pattern">
                                                                                    <img src="" alt="" className="img-fluid rounded" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-sm">
                                                                                <span className="accent-title">
                                                                                    [Nama]
                                                                                </span>
                                                                                <span className="text-muted lh-lg">
                                                                                    [Kategori]
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-sm">
                                                                        <div className="row justify-content-end align-items-center ">
                                                                            <div className="col-sm">
                                                                                <span className="text-end">
                                                                                    [QTY]
                                                                                </span>
                                                                            </div>
                                                                            <div className="col-sm d-flex justify-content-end">
                                                                                <span className="text-end">
                                                                                    Rp. 111.000
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <hr />
                                                                {/* End of Kantong Item */}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row align-self-end justify-content-end cekot-title">
                                                    <div className="col-sm">
                                                        <div className="row kabel-item justify-content-end align-items-center">
                                                            <div className="col-sm-10 item-list">
                                                                <div className="row align-items-center">
                                                                    <div className="col-sm">
                                                                        <h5>
                                                                            SUBTOTAL
                                                                        </h5>
                                                                    </div>
                                                                    <div className="col-sm d-flex justify-content-end">
                                                                        <h5 className="accent-title">
                                                                            Rp. 12.000
                                                                        </h5>
                                                                    </div>
                                                                </div>
                                                                <div className="row align-items-center">
                                                                    <div className="col-sm">
                                                                        <h5>
                                                                            BIAYA PENGIRIMAN
                                                                        </h5>
                                                                    </div>
                                                                    <div className="col-sm d-flex justify-content-end">
                                                                        <h5 className="accent-title">
                                                                            Rp. 12.000
                                                                        </h5>
                                                                    </div>
                                                                </div>
                                                                <hr />
                                                                <div className="row align-items-center">
                                                                    <div className="col-sm">
                                                                        <h5>
                                                                            TOTAL
                                                                        </h5>
                                                                    </div>
                                                                    <div className="col-sm d-flex justify-content-end">
                                                                        <h5 className="accent-title">
                                                                            Rp. 0
                                                                        </h5>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Checkout
