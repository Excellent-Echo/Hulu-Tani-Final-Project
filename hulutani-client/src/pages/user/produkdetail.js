import React, { useEffect } from 'react'
import {useSelector, useDispatch} from "react-redux"
import { useParams } from 'react-router'

import detailProductAction from "../../redux/public/detailProduct/detailProductAction"

function ProdukDetail() {
    const detailProduct = useSelector(state => state.detailProduct.productDetail)
    const dispatch = useDispatch()
    const {id} = useParams()

    useEffect(()=>{
        dispatch(detailProductAction.getDetailProduct(id))
    },[])
    return (
        <>
            <div className="container-fluid">
                <div className="container">
                    <div className="row breadcrumbs-container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item"><a href="#">Produk</a></li>
                                <li className="breadcrumb-item active" aria-current="page">[Nama Produk]</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="container-fluid fluid-page product-detail-container">
                <div className="container">
                    <div className="row content-container align-items-center justify-content-center">
                        <div className="col-sm product-img-container justify-content-start">
                            <div className="row">
                                <img src={detailProduct.gambar} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-sm product-content">
                            <div className="row product-name-container">
                                <h3 className="text-muted accent-title">
                                    [Kategori]
                                </h3>
                                <h1 className="title">
                                    {detailProduct.nama}
                                </h1>
                            </div>
                            <div className="row">
                                <h1 className="accent-title accent-text">
                                    Rp. {detailProduct.harga}
                                </h1>
                                <div className="col-sm-3 stock-range mb-3">
                                    <label for="jumlah" className="form-label">Jumlah</label>
                                    <input type="number" className="form-control" id="jumlah" placeholder="1" />
                                </div>
                                <div className="row">
                                    <div className="col-sm-5">
                                        <button className="primary long">Beli Sekarang</button>
                                    </div>
                                    <div className="col-sm-2">
                                        <button className="outline-primary btn-love"></button>
                                    </div>
                                </div>
                                <div className="row product-desc">
                                    <h5>
                                        Informasi Produk
                                    </h5>
                                    <p className="subtitle">
                                        {detailProduct.deskripsi}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProdukDetail
