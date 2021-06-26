import React from 'react'

import '../../assets/css/transaksi.css'
import WaitingPayment from '../../assets/images/waiting-payment.svg'
import Navbar from '../../components/organisms/user/navbar'

function Pembayaran() {
    return (
        <>
            <Navbar />
            <div className="container-fluid breadcrumbs-container">
                <div className="container">
                    <div className="row breadcrumbs-container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Transaksi</a></li>
                                <li className="breadcrumb-item active" aria-current="page">Pembayaran</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="container-fluid fluid-page payment-page-container">
                <div className="container">
                    <div className="row payment-content-container">
                        <div className="col-sm-6">
                            <div className="row page-title-container align-items-center">
                                <div className="col-sm">
                                    <h1 className="title">
                                        Pembayaran
                                    </h1>
                                </div>
                                <div className="col-sm d-flex justify-content-end">
                                    <h4 className="align-middle text-muted">
                                        #KD010101
                                    </h4>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col-sm-12">
                                    STATUS : <span><b className="warning-text">MENUNGGU PEMBAYARAN</b></span>
                                </div>
                                <div className="col-sm-12">
                                    <br />
                                    SELESAIKAN PEMBAYARAN SEBELUM :
                                </div>
                                <div className="col-sm-12">
                                    <h1 className="accent-text accent-title">
                                        1:59:43
                                    </h1>
                                    <p className="text-muted">
                                        Silakan lakukan pembayaran sebelum batas waktu 
                                        yang ditentukan agar transaksi anda tidak dibatakan oleh sistem.
                                    </p>
                                </div>
                            </div>
                            <div className="row page-title-container align-items-center">
                                <div className="col-sm-12">
                                    <h1 className="title">
                                        Rincian
                                    </h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <p className="">
                                        JUMLAH YANG HARUS DIBAYAR
                                    </p>
                                    <h3 className="accent-title">
                                        RP. 111.000,00
                                    </h3>
                                </div>
                                <div className="col-sm-6">
                                    <p className="text-end">
                                        JANK BAGO
                                    </p>
                                    <h2 className="accent-title accent-text text-end">
                                        023452121345
                                    </h2>
                                    <p className="text-end">
                                        PT. HULU TANI INDONESIA
                                    </p>
                                </div>
                            </div>
                            <div className="row">
                                <p>
                                    Sudah bayar? Silakan upload <span className="accent-text">Bukti Pembayaran.</span>
                                </p>
                                <div className="col-sm-12">
                                    <form action="">
                                        <div className="row align-items-center">
                                            <div className="col-sm-7">
                                                <input className="form-control" type="file" id="formFile" />
                                            </div>
                                            <div className="col-sm-5">
                                                <button type="submit" className="primary small long">Konfirmasi Pembayaran</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm img-payment-container">
                            <img src={ WaitingPayment } alt="" className="img-fluid img-payment" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Pembayaran
