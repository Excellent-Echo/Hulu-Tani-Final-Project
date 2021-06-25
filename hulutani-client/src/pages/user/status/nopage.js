import React from 'react'

import AuthShape from '../../../assets/images/auth-bg-shape.svg'
import LostImg from '../../../assets/images/no-page.svg'
import '../../../assets/css/status.css'

function NoPage() {
    return (
        <>
            <div className="container-fluid fluid-page status-page-container no-page-container">
                <img src={AuthShape} alt="" className="img-fluid auth-bg-shape login" />
                <div className="container">
                    <div className="row justify-content-center align-items-center img-status-container">
                        <div className="col-sm d-flex justify-content-end d-flex">
                            <div className="row">
                                <h1 className="display-4 title t-dark accent-title text-end">
                                    404!
                                </h1>
                                <h2 className="title t-dark text-end">
                                    Tersesat, oh tersesat.
                                </h2>
                                <h5 className="accent-title mt-4 text-end">
                                    <a href="" className="btn-lanjut-belanja">
                                        Kembali
                                    </a>
                                </h5>
                            </div>
                        </div>
                        <div className="col-sm-9">
                            <div className="row align-items-start img-status-container">
                                <img src={LostImg} alt="" className="img-fluid img-status" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NoPage
