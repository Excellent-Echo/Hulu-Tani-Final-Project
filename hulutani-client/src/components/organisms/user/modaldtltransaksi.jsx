import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import userTransactionAction from '../../../redux/user/transaction/userTransactionAction'
import NumberFormat from 'react-number-format'
import { useHistory } from 'react-router-dom'

const ModalDtlTransaksi = ({code}) => {
    const userTransaction = useSelector(state => state.userTransaction.dataTransaksi)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(()=>{
        // console.log(...code)
        dispatch(userTransactionAction.getDataTransaksi(code))
    },[code])

    const uploadHandler = (e)=>{
        e.preventDefault()
        if(userTransaction.bukti_transfer === ""){
            history.push(`/payment/${userTransaction.kode_transaksi}`)
        }else{
            history.puus("/products")
        }
    }
    return (
        <>
            <div class="modal fade" id="modalDtlTransaksi" tabindex="-1" aria-labelledby="modalDtlTransaksiLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title title accent-text">
                                Transaksi - <span className="accent-title text-muted">
                                    {userTransaction.kode_transaksi}
                                </span>
                            </h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-sm">
                                        <div className="row">
                                            <div className="col-sm">
                                                <h5 className="accent-title">
                                                    Detail
                                                </h5>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row mb-2">
                                            <div className="col-sm-6">
                                                <h6 className="accent-title">
                                                    Kode Transaksi :&nbsp;
                                                </h6>
                                            </div>
                                            <div className="col-sm text-end">
                                                <span className="">
                                                {userTransaction.kode_transaksi}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row mb-2">
                                            <div className="col-sm-4">
                                                <h6 className="accent-title">
                                                    Status :&nbsp;
                                                </h6>
                                            </div>
                                            <div className="col-sm text-end">
                                                <div className="">
                                                    <span class="status-badge b-danger">{userTransaction.status}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-2">
                                            <div className="col-sm-6">
                                                <h6 className="accent-title">
                                                    Tanggal :&nbsp;
                                                </h6>
                                            </div>
                                            <div className="col-sm text-end">
                                                <span className="">
                                                    {userTransaction.tanggal}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <h6 className="accent-title">
                                                    Total Biaya :&nbsp;
                                                </h6>
                                            </div>
                                            <div className="col-sm-6 text-end">
                                                <span className="">
                                                <NumberFormat value={userTransaction.harga} displayType={'text'} thousandSeparator={true} prefix={'Rp'}/>
                                                </span>
                                            </div>
                                            {/* <div className="col-sm text-end">
                                                <span className="">
                                                    {userTransaction.alamat.alamat_detail}
                                                </span>
                                            </div> */}
                                        </div>
                                        <hr />
                                    </div>
                                    {/* <div className="col-sm">
                                        <div className="row">
                                            <div className="col-sm">
                                                <h5 className="accent-title">
                                                    Produk
                                                </h5>
                                            </div>
                                        </div>
                                        <hr />

                                        
                                        <div className="row align-content-center">
                                            <div className="col-sm">
                                            {userTransaction.Produk[0].nama}
                                            </div>
                                            <div className="col-sm-1">
                                                <div className="row justify-content-end">
                                                    <small className="text-end">
                                                    {userTransaction.quantity}
                                                    </small>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="row justify-content-end">
                                                    <small className="text-end">
                                                    <NumberFormat value={userTransaction.Produk[0].harga * userTransaction.quantity} displayType={'text'} thousandSeparator={true} prefix={'Rp'}/>
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                       

                                        <hr />
                                        <div className="row align-items-center">
                                            <div className="col-sm">
                                                SUBTOTAL
                                            </div>
                                            <div className="col-sm">
                                                <div className="row justify-content-end">
                                                    <span className="accent-title text-end">
                                                    <NumberFormat value={userTransaction.Produk[0].harga * userTransaction.quantity} displayType={'text'} thousandSeparator={true} prefix={'Rp'}/>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-sm">
                                                <span>
                                                    BIAYA PENGIRIMAN
                                                </span>
                                            </div>
                                            <div className="col-sm d-flex justify-content-end">
                                                <span className="accent-title text-end">
                                                <NumberFormat value={userTransaction.harga-userTransaction.Produk[0].harga * userTransaction.quantity} displayType={'text'} thousandSeparator={true} prefix={'Rp'}/>
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-sm">
                                                <span>
                                                    TOTAL
                                                </span>
                                            </div>
                                            <div className="col-sm d-flex justify-content-end">
                                                <span className="accent-title text-end">
                                                <NumberFormat value={userTransaction.harga} displayType={'text'} thousandSeparator={true} prefix={'Rp'}/>
                                                </span>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="b-danger small" data-bs-dismiss="modal">Tutup</button>
                            <button type="button" class="b-primary small" data-bs-dismiss="modal" onClick={uploadHandler}>upload bukti</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalDtlTransaksi
