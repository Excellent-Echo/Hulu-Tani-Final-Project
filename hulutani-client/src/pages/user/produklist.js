import React, {useEffect} from 'react'
import '../../assets/css/produk.css'
import {useSelector, useDispatch} from  "react-redux"
import catalogAction from '../../redux/public/catalog/catalogAction'
import {Link} from "react-router-dom"

function ProdukList() {
	const catalogProduct = useSelector(state => state.catalogProduct)
	const dispatch = useDispatch()

	useEffect(() => {	
		dispatch(catalogAction.getAllProducts())
	}, [])
	
        return (
                <>
					<div className="container-fluid fluid-page produk-list-container">
						<div className="container">
							<div className="row">
								<div className="col-sm-2 filter-sidebar-container">

								</div>

								<div className="col-sm content-container">
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
												<div className="card product-card card-outline-primary h-100" style={{ width: "12rem" }}>
													<span className="badge product-btn-wl b-transparent">
														<i class="far fa-heart fa-2x"></i>
													</span>
													<div className="img-container product-img bg-pattern">
														<img src={data.gambar} class="card-img-top img-fluid" alt="..." />
													</div>
													<div className="card-body">
														<div className="row">
															<h5 className="card-title price-tag title">{data.harga}</h5>
															<span className="subtitle name-tag small-text">{data.nama}</span>
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
                </>
        )
}

export default ProdukList
