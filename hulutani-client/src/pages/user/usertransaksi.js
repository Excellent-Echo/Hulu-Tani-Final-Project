import React,{useEffect, useState} from 'react'
import { useHistory, Link } from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux';
import '../../assets/css/userglobal.css'
import '../../assets/css/userpage.css'
import UserSidebar from '../../components/organisms/user/usersidebar';
import Navbar from '../../components/organisms/user/navbar';
import Footer from '../../components/organisms/user/footer'
import ModalDtlTransaksi from '../../components/organisms/user/modaldtltransaksi';
import userTransactionAction from '../../redux/user/transaction/userTransactionAction';
import NumberFormat from 'react-number-format'

function UserTransaksi() {
    const userTransaction = useSelector(state => state.userTransaction.daftarTransaksi)
    const dispatch = useDispatch()
    const [code, setCode] = useState("")
    useEffect(() => {
        dispatch(userTransactionAction.getDaftarTransaksi())
        //dispatch(userTransactionAction.getDataTransaksi(code))
    }, [])

    return (
        <>
            <Navbar />
            <div className="container-fluid breadcrumbs">
                <div className="container">
                    <div className="row breadcrumbs-container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item"><Link to="/user-transaction">Profil Saya</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Transaksi</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <UserSidebar />
            <div className="container-fluid fluid-page user-page-container">
                <div className="container">
                    <div className="row user-content-container">
                        <div className="col-sm user-content">
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
                            {userTransaction.map((data,index)=>{
                                return (
                            <div className="row justify-content-center">
                                <div className="col-sm-12 transaction-list" data-bs-toggle="modal" data-bs-target="#modalDtlTransaksi" onClick={()=>{setCode(data.kode_transaksi);dispatch(userTransactionAction.getDataTransaksi(data.kode_transaksi))}}>
                                    <div className="row align-items-center">
                                        <div className="col-sm">
                                            <div className="row align-items-center">
                                                <div className="col-sm-4">
                                                    <div className="img-container bg-pattern img-loading">
                                                        <img src={data.Produk[0].gambar} alt="" className="img-fluid rounded" />
                                                    </div>
                                                </div>
                                                <div className="col-sm">
                                                    <span className="text-muted lh-lg">
                                                        {/* {data.tanggal} */}
                                                    </span>
                                                    <h4 className="accent-title">
                                                        <a href="">
                                                            {data.kode_transaksi}
                                                        </a>
                                                    </h4>
                                                    <span className="lh-lg">
                                                        {data.quantity}
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
                                               <NumberFormat value={data.harga} displayType={'text'} thousandSeparator={true} prefix={'Rp'}/>
                                               </h4>
                                           </div>
                                        </div>
                                        <div className="col-sm-3">
                                            <div className="row align-items-center justify-content-end transaction-status-badge">
                                                <span class="status-badge b-warning">{data.status}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
            {/* MODALS */}
            <ModalDtlTransaksi code={code}/>
            {/* END OF MODALS */}
        </>
    )
}

export default UserTransaksi
