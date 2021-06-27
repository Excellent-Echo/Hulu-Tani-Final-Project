import React, {useEffect} from 'react'
import {useSelector, useDispatch} from  "react-redux"
import { Link } from 'react-router-dom'
import NumberFormat from 'react-number-format'
import catalogAction from '../../redux/public/catalog/catalogAction'

import '../../assets/css/userglobal.css'
import '../../assets/css/produk.css'
import ProductFilter from '../../components/organisms/user/productfilter'
import Navbar from '../../components/organisms/user/navbar'
import Footer from '../../components/organisms/user/footer.jsx'

function ProdukList() {
	const catalogProduct = useSelector(state => state.catalogProduct)
	const dispatch = useDispatch()

	useEffect(() => {	
		dispatch(catalogAction.getAllProducts())
	}, [])
	
        return (
                <>
					<Navbar />	
					<div className="container-fluid">
						<div className="container">
							<div className="row breadcrumbs-container">
								<nav aria-label="breadcrumb">
									<ol className="breadcrumb">
										<li className="breadcrumb-item"><Link to="/">Home</Link></li>
										<li className="breadcrumb-item active" aria-current="page">Produk</li>
									</ol>
								</nav>
							</div>
						</div>
					</div>
					<ProductFilter />
					<div className="container-fluid fluid-page produk-list-container">
						<div className="container">
							<div className="row product-list justify-content-end">								
								<div className="col-sm content-container x">
									<div className="row banner-container">
										<div className="col-sm-8 promo-banner bg-pattern banner-1">

										</div>
										<div className="col-sm promo-banner bg-pattern banner-2">

										</div>
									</div>
									<div className="row product-card-container">
										{catalogProduct.allProduct.map((data,index)=>{
											return (
											<div className="col-sm card-container" key={index}>
												<Link to={`/product/${data.id}`}>
												<div className="card product-card card-outline-primary h-100" style={{ width: "11.8rem" }}>
													<span className="badge product-btn-wl b-transparent">
														{/* <i class="far fa-heart fa-2x"></i> */}
													</span>
													<div className="img-container product-img bg-pattern">
														<img src={data.gambar} class="card-img-top img-fluid" alt="..." />
													</div>
													<div className="card-body">
														<div className="row">
															<span className="name-tag small-text mb-2">{data.nama}</span>
															<h4 className="card-title accent-title"><NumberFormat value={data.harga} displayType={"text"} thousandSeparator={true} prefix={'Rp'}/></h4>
														</div>
													</div>
												</div>
												</Link>
											</div>
											)
										})}
									</div>
								</div>
							</div>
						</div>					
					</div>
					<Footer />
                </>
        )
}

export default ProdukList
