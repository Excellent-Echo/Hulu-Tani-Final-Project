import React from 'react'
import '../../assets/css/transaksi.css'

function Checkout() {
    return (
        <>
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
                                <div className="row mb-3">
                                    <div className="col-sm">
                                        <h1 className="title">
                                            Checkout
                                        </h1>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm">
                                        <div className="row align-items-center justify-content-center cekot">
                                            <div className="row align-items-center cekot-title mb-4">
                                                <div className="col-sm d-flex justify-content-start me-4">
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
                                            <div className="row kabel-content align-self-middle justify-content-center">

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
                                    <div className="col-sm">
                                        aksdjasjdlajsldkj
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Checkout
