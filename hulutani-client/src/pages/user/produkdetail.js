import React, { useEffect } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import NumberFormat from 'react-number-format'
import detailProductAction from "../../redux/public/detailProduct/detailProductAction";
import addCartAction from '../../redux/user/cart/addCartAction'

import '../../assets/css/userglobal.css'
import Navbar from '../../components/organisms/user/navbar'
import Footer from '../../components/organisms/user/footer'

function ProdukDetail() {
    const detailProduct = useSelector(state => state.detailProduct.productDetail)
    const token = localStorage.getItem("accessToken")
    const cart = useSelector(state => state.addCart.quantity)
    const dispatch = useDispatch()
    const history = useHistory()
    const {id} = useParams()

    useEffect(()=>{
        dispatch(detailProductAction.getDetailProduct(id))
    },[])

    const addCartHandler=(e)=>{
        e.preventDefault()
        // if (token === null){ 
        //     history.push("/login")
        // } else {
            dispatch(addCartAction.addCart(
                String(detailProduct.id),
                cart
            ))
        // }
    }

    return (
        <>
            <Navbar />
            <div className="container-fluid breadcrumbs">
                <div className="container">
                    <div className="row breadcrumbs-container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item"><Link to="/products">Produk</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">{detailProduct.nama}</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="container-fluid fluid-page product-detail-container">
                <div className="container">
                    <div className="row content-container justify-content-center">
                        <div className="col-sm product-img-container justify-content-start">
                            <div className="row">
                                <img src={detailProduct.gambar} alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-sm product-content">
                            <div className="row product-name-container">
                                <h4 className="text-muted">
                                    [Kategori]
                                </h4>
                                <h1 className="title">
                                    {detailProduct.nama}
                                </h1>
                            </div>
                            <div className="row">
                                <h1 className="accent-title accent-text">
                                <NumberFormat value={detailProduct.harga} displayType={"text"} thousandSeparator={true} prefix={"Rp"}/>
                                </h1>
                                <form onSubmit={addCartHandler}>
                                    <div className="col-sm-3 stock-range mb-3">
                                        <label for="jumlah" className="form-label">Jumlah</label>
                                        <input 
                                        type="number" 
                                        className="form-control small" 
                                        id="jumlah" placeholder="1" 
                                        value={cart} 
                                        onChange={(e)=>dispatch(addCartAction.setQuantity(e.target.value))}
                                        />
                                    </div>
                                    <div className="col-sm-7 d-flex align-items-end">
                                        <button type="submit" className="primary long">Beli Sekarang</button>
                                    </div>
                                </form>
                                <div className="row product-desc">
                                    <h5>
                                        Informasi Produk
                                    </h5>
                                    <div className="col-sm-11">
                                        <p className="subtitle">
                                            {detailProduct.deskripsi}
                                        </p>
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

export default ProdukDetail
