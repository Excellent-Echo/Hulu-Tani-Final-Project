import React from 'react'
import { useHistory, Link } from "react-router-dom";

import '../../assets/css/userglobal.css'
import '../../assets/css/userpage.css'
import Navbar from '../../components/organisms/user/navbar';
import Footer from '../../components/organisms/user/footer'
import ModalDtlTransaksi from '../../components/organisms/user/modaldtltransaksi';

function UserTransaksi() {
    const history = useHistory()

    const logoutUser = () => {
        localStorage.removeItem("accessToken");
        history.push("/")
    }

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
                                <h1 className="accent-title accent-text">
                                    Daftar Transaksi
                                </h1>
                            </div>
                            <div className="row content-button">
                                <div className="col-sm">
                                    <div className="btn-group status-filter">
                                        <button type="button" className="btn-sm small outline-primary hover-no-scale dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                            Semua Status
                                        </button>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Menunggu Pembayaran</a></li>
                                            <li><a className="dropdown-item" href="#">Diproses</a></li>
                                            <li><a className="dropdown-item" href="#">Dikirim</a></li>
                                            <li><a className="dropdown-item" href="#">Selesai</a></li>
                                            <li><hr className="dropdown-divider" /></li>
                                            <li><a className="dropdown-item" href="#">Dibatalkan</a></li>
                                        </ul>
                                    </div>
                                    <input type="date" className="small outline-primary hover-no-scale dropdown-toggle" />
                                </div>
                            </div>

                            {/* CARD TRANSAKSI */}
                            <div className="row justify-content-center">
                                <div className="col-sm-12 transaction-list" data-bs-toggle="modal" data-bs-target="#modalDtlTransaksi">
                                    <div className="row align-items-center">
                                        <div className="col-sm">
                                            <div className="row align-items-center">
                                                <div className="col-sm-4">
                                                    <div className="img-container bg-pattern img-loading">
                                                        <img src="" alt="" className="img-fluid rounded" />
                                                    </div>
                                                </div>
                                                <div className="col-sm">
                                                    <span className="text-muted lh-lg">
                                                        [Tanggal]
                                                    </span>
                                                    <h4 className="accent-title">
                                                        <a href="">
                                                            [Kode]
                                                        </a>
                                                    </h4>
                                                    <span className="lh-lg">
                                                        [Jml Item]
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-sm">
                                           <div className="row align-items-center justify-content-end">
                                               <span className="text-muted text-end">
                                                   Total Belanja
                                               </span>
                                               <h4 className="accent-title accent-text text-end">
                                                   [Total Belanja]
                                               </h4>
                                           </div>
                                        </div>
                                        <div className="col-sm-2">
                                            <div className="row align-items-center justify-content-end transaction-status-badge">
                                                <span class="status-badge b-danger">Dibatalkan</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* END OF CARD TRANSAKSI */}
                            
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            {/* MODALS */}
            <ModalDtlTransaksi />
            {/* END OF MODALS */}
        </>
    )
}

export default UserTransaksi
