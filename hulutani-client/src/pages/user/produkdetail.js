import React, { useEffect } from 'react'
import { useParams, Link, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import NumberFormat from 'react-number-format'
import detailProductAction from "../../redux/public/detailProduct/detailProductAction";
import cartAction from '../../redux/user/cart/cartAction';

function ProdukDetail() {
    const detailProduct = useSelector(state => state.detailProduct.productDetail)
    const token = localStorage.getItem("accessToken")
    const qty = useSelector(state => state.addCart.quantity)
    const cart = useSelector(state => state.addCart)
    const dispatch = useDispatch()
    const history = useHistory()
    const {id} = useParams()

    useEffect(()=>{
        dispatch(detailProductAction.getDetailProduct(id))
    },[])

    const addToCart = (e) => {
        e.preventDefault()
        // let match = cart.cart.filter(item =>{
        //     if(item.id === id)
        //         return true;
        // });
        // if(match && match[0])
        //     console.log(match[0])
        // const idd = false
        // if(id === cart.idproduct){
        //     dispatch(cartAction.increaseCart(id,1,cart.cart))
        // }else {
            dispatch(cartAction.addCart(id,"BAYAM",1,10000,"INIGAMBAR"))
            //console.log(cart)
            dispatch(cartAction.syncCart(cart.cart,cart.key))
        // }
    }

    const removeFromCart = (e) => {
        e.preventDefault()
        dispatch(cartAction.removeCart(1,cart.cart))
        dispatch(cartAction.syncCart(cart.cart,cart.key))
    }

    const increaseQty = (e) => {
        e.preventDefault()
        dispatch(cartAction.increaseCart(1,1,cart.cart))
        dispatch(cartAction.syncCart(cart.cart,cart.key))
    }

    const decreaseQty = (e) => {
        e.preventDefault()
        dispatch(cartAction.reduceCart(1,1,cart.cart))
        dispatch(cartAction.syncCart(cart.cart,cart.key))
    }

    const resetCart = (e) => {
        e.preventDefault()
        dispatch(cartAction.resetCart())
        dispatch(cartAction.syncCart(cart.cart,cart.key))
    }

    
    return (
        <>
            <div className="container-fluid">
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
                                <h4 className="text-muted accent-title">
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
                                {/* <form onSubmit={addCartHandler}> */}
                                    <div className="col-sm-3 stock-range">
                                        <label for="jumlah" className="form-label">Jumlah</label>
                                        <input 
                                        type="number" 
                                        className="form-control" 
                                        id="jumlah" placeholder="1" 
                                        value={qty} 
                                        onChange={(e)=>dispatch(cartAction.setQuantity(e.target.value))}
                                        />
                                    </div>
                                    <div className="col-sm-7 d-flex align-items-end">
                                        <button type="submit" className="primary long" onClick={e=>addToCart(e)}>Tambah ke Keranjang</button>
                                        <button type="submit" className="primary long" onClick={e=>removeFromCart(e)}>Hapus dari Keranjang</button>
                                        <button type="submit" className="primary long" onClick={e=>increaseQty(e)}>Tambah jumlah ke Keranjang</button>
                                        <button type="submit" className="primary long" onClick={e=>decreaseQty(e)}>kurangi jumlah ke Keranjang</button>
                                        <button type="submit" className="primary long" onClick={e=>resetCart(e)}>Reset Keranjang</button>
                                    </div>
                                {/* </form> */}
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
        </>
    )
}

export default ProdukDetail
