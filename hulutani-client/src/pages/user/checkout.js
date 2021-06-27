import React from 'react'

import '../../assets/css/userglobal.css'
import '../../assets/css/transaksi.css'
import CheckoutImg from '../../assets/images/checkout.svg'
import Navbar from '../../components/organisms/user/navbar'
import Footer from '../../components/organisms/user/footer'
import { Link } from 'react-router-dom'

function Checkout() {
    return (
        <>
            <Navbar />
            <div className="container-fluid">
                <div className="container">
                    <div className="row breadcrumbs-container"> 
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Checkout</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="container-fluid fluid-page cekot-container">
                <div className="container">
                    <div className="row">
                        <div className="col-sm cekot-content-container">
                            <div className="row align-items-center">
                                <div className="col-sm-6">
                                    <div className="row justify-content-start cekot">
                                        <div className="row align-items-start cekot-title">
                                            <div className="row">
                                                <div className="col-sm">
                                                    <h1 className="title">
                                                        Checkout
                                                    </h1>
                                                </div>
                                            </div>
                                            <div className="col-sm detpengiriman">
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
                                            <div className="col-sm jspengiriman">
                                                <div className="row">
                                                    <div className="col-sm">
                                                        <h4 className="accent-title mb-4">
                                                            Ongkos Kirim
                                                        </h4>
                                                        <div className="row align-items-center">
                                                            <div className="col-sm">
                                                                <h5 className="accent-title">
                                                                    HULU EX
                                                                </h5>
                                                            </div>
                                                            <div className="col-sm jsharga">
                                                                <h5 className="">
                                                                    RP. 12000
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
                                        <div className="row cekot-produk align-items-center align-self-end">
                                            <hr />
                                            <div className="row">
                                                <div className="col-sm">
                                                    <h4 className="accent-title mb-4">
                                                        PESANAN KAMU
                                                    </h4>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-md cekot-produk-nama">
                                                    <span>
                                                        <b>
                                                            [Nama Produk]
                                                        </b>
                                                    </span>
                                                </div>
                                                <div className="col-md cekot-produk-qty">
                                                    <span className="text-end">
                                                        [QTY]
                                                    </span>
                                                </div>
                                                <div className="col-md cekot-produk-harga">
                                                    <span className="text-end">
                                                        [Harga]
                                                    </span>
                                                </div>
                                            </div>
                                            <br />
                                            <hr />
                                            <br />
                                            <div className="row">
                                                <div className="col-sm">
                                                    <div className="row">
                                                        <span>
                                                            <b>
                                                                SUBTOTAL
                                                            </b>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-sm">
                                                    <div className="row">
                                                        <span className="text-end">
                                                            [SUBTOTAL]
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm">
                                                    <div className="row">
                                                        <span>
                                                            <b>
                                                                BIAYA PENGIRIMAN
                                                            </b>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-sm">
                                                    <div className="row">
                                                        <span className="text-end">
                                                            [BIAYA PENGIRIMAN]
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm">
                                                    <div className="row">
                                                        <span>
                                                            <b>
                                                                TOTAL PEMBAYARAN
                                                            </b>
                                                        </span>
                                                    </div>
                                                </div>
                                                <div className="col-sm">
                                                    <div className="row">
                                                        <span className="text-end">
                                                            [TOTAL PEMBAYARAN]
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row cekot-footer align-items-center align-self-end">
                                            <hr />
                                            <div className="row">
                                                <div className="col-sm">
                                                    <h4 className="accent-title mb-4">
                                                        REKENING PEMBAYARAN
                                                    </h4>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-sm rekeningselect">
                                                    <select id="rekening" className="form-select">
                                                        <option selected>Pilih salah satu</option>
                                                        <option>Jank Bago</option>
                                                    </select>
                                                </div>
                                                <div className="col-sm">
                                                    <div className="row">
                                                        <div className="col-sm d-flex align-items-center justify-content-end">
                                                            <button className="primary text-center">Bayar Sekarang</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm white-space">
                                    <div className="col-sm img-container">
                                        <img src={CheckoutImg} alt="" className="img-fluid" />
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
