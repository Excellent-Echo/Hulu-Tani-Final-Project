import React from 'react'

import '../../../assets/css/userglobal.css'
import Navbar from '../../../components/organisms/user/navbar'
import Footer from '../../../components/organisms/user/footer'
import AuthShape from '../../../assets/images/auth-bg-shape.svg'
import PaymentSuccess from '../../../assets/images/payment-success.svg'
import '../../../assets/css/status.css'
import { Link } from 'react-router-dom'

function PembayaranSukses() {
    return (
        <>
            <Navbar />
            <div className="container-fluid fluid-page success-page-container">
                <img src={AuthShape} alt="" className="img-fluid bg-shape login" />
                <div className="container">
                    <div className="row justify-content-center align-items-center img-status-container">
                        <div className="col-sm d-flex justify-content-end d-flex">
                            <div className="row">
                                <h1 className="display-4 title accent-text accent-title text-end">
                                    Selamat!
                                </h1>
                                <h2 className="title accent-text text-end">
                                    Pembayaran sedang diverifikasi!
                                </h2>
                                <h5 className="accent-title mt-4 text-end">
                                    <Link to="/products" className="btn-lanjut-belanja">
                                        Lanjut Belanja
                                    </Link>
                                </h5>
                            </div>
                        </div>
                        <div className="col-sm-9">
                            <img src={PaymentSuccess} alt="" className="img-fluid img-status" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default PembayaranSukses
