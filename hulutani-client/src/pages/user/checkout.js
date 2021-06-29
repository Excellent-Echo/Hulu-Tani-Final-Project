import React,{useEffect} from 'react'
import '../../assets/css/userglobal.css'
import '../../assets/css/transaksi.css'
import CheckoutImg from '../../assets/images/checkout.svg'
import Navbar from '../../components/organisms/user/navbar'
import Footer from '../../components/organisms/user/footer'
import ModalGntAlamat from '../../components/organisms/user/modalgntalamat'
import { useDispatch, useSelector } from 'react-redux'
import addressAction from '../../redux/user/address/adressAction';
import userTransactionAction from '../../redux/user/transaction/userTransactionAction';
import NumberFormat from 'react-number-format'
import { Link, useHistory } from 'react-router-dom'

function Checkout() {
    const userTransaction = useSelector(state => state.userTransaction)
    const daftarAlamat = useSelector(state => state.userAddress)
    const dispatch = useDispatch()
    const history = useHistory()
    //const {code} = useParams()

    useEffect(() => {
        dispatch(addressAction.setDaftarAlamat())
    }, [])

    const checkoutHandler = (e)=>{
        e.preventDefault()
        dispatch(userTransactionAction.setTanggal(daftarAlamat.id))
        dispatch(userTransactionAction.Transaction(
            userTransaction.harga * userTransaction.quantity + userTransaction.cost,
            userTransaction.id_produk,
            userTransaction.metode_pembayaran,
            userTransaction.quantity,
            userTransaction.status,
            daftarAlamat.id,
            userTransaction.bukti
        ))
        history.push(`/payment/${userTransaction.kode_transaksi}`)
    }
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
                                                                <button className="b-info xsmall btn-edit" data-bs-toggle="modal" data-bs-target="#modalGntAlamat">

                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className="row align-items-center">
                                                            <div className="col-sm">
                                                                <p>{daftarAlamat.nama}</p>
                                                                <p>{daftarAlamat.alamatLengkap}</p>
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
                                                                    Hulu X
                                                                </h5>
                                                            </div>
                                                            <div className="col-sm jsharga">
                                                                <h5 className="">
                                                                    <NumberFormat value={userTransaction.cost} displayType={'text'} thousandSeparator={true} prefix={'Rp'}/>
                                                                </h5>
                                                            </div>
                                                        </div>
                                                        <div className="row align-items-center">
                                                            <div className="col-sm">
                                                                <p>1-2 Hari</p>
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
                                                            {userTransaction.namaProduk}
                                                        </b>
                                                    </span>
                                                </div>
                                                <div className="col-md cekot-produk-qty">
                                                    <span className="text-end">
                                                        {userTransaction.quantity}
                                                    </span>
                                                </div>
                                                <div className="col-md cekot-produk-harga">
                                                    <span className="text-end">
                                                        <NumberFormat value={userTransaction.harga} displayType={'text'} thousandSeparator={true} prefix={'Rp'}/>
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
                                                        <NumberFormat value={userTransaction.harga * userTransaction.quantity} displayType={'text'} thousandSeparator={true} prefix={'Rp'}/>
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
                                                        <NumberFormat value={userTransaction.cost} displayType={'text'} thousandSeparator={true} prefix={'Rp'}/>
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
                                                        <NumberFormat value={userTransaction.harga * userTransaction.quantity + userTransaction.cost} displayType={'text'} thousandSeparator={true} prefix={'Rp'}/>
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
                                                    <select id="rekening" className="form-select userpages" onChange={(e)=>dispatch(userTransactionAction.setMetodePembayaran(e.target.value))}>
                                                        <option selected>Pilih salah satu</option>
                                                        <option>Bank Jago</option>
                                                        <option>Bank BCA</option>
                                                        <option>Bank BRI</option>
                                                    </select>
                                                </div>
                                                <div className="col-sm">
                                                    <div className="row">
                                                        <div className="col-sm d-flex align-items-center justify-content-end">
                                                            <button className="primary text-center" onClick={checkoutHandler}>Bayar Sekarang</button>
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
            {/* MODALS */}
                <ModalGntAlamat />
            {/* END OF MODALS */}
        </>
    )
}

export default Checkout
