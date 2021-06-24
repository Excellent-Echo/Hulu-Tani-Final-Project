import React, {useEffect} from 'react'
import '../../assets/css/produk.css'
import {useSelector, useDispatch} from  "react-redux"
import catalogAction from '../../redux/public/catalog/catalogAction'

function ProdukList() {
	const catalogProduct = useSelector(state => state.catalogProduct)
	const dispatch = useDispatch()

	useEffect(() => {	
		dispatch(catalogAction.getAllProducts())
	}, [])
	
        return (
                <>
					<div className="container-fluid nav-container">
						<nav class="navbar navbar-expand-lg bg-light">
							<div class="container">
								<a class="navbar-brand title accent-text" href="#">HuluTani</a>
								<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
								<span class="navbar-toggler-icon"></span>
								</button>
								<div class="collapse navbar-collapse" id="navbarSupportedContent">
									<ul class="navbar-nav mx-4 mb-lg-0">
										<li class="nav-item dropdown">
											<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
												Kategori
											</a>
											<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
												<li><a class="dropdown-item" href="#">Action</a></li>
												<li><a class="dropdown-item" href="#">Another action</a></li>
											</ul>
										</li>
									</ul>
									<form class="">
										<input class="form-control nav-search long" type="search" placeholder="Cari 'wortel'" aria-label="Search"/>
									</form>
									{/* <div class="navbar-nav ms-2">
										
									</div> */}
								</div>
							</div>
						</nav>
					</div>
					<div className="container-fluid">
						<div className="container">
							<div className="col-sm-2 filter-sidebar-container">
								<div className="container-fluid filter-sidebar">
									<div className="row sidebar-title">
										<h4 className="title text-center">
											FILTER PRODUK
										</h4>
									</div>
									<div className="row sidebar-content">
										<div className="row filter">
											<h6 className="accent-text accent-title">
												KATEGORI
											</h6>
											<ul className="list-unstyled">
												<li>
													<a href="">Sayuran</a>
												</li>
												<li>
													<a href="">Buah</a>
												</li>
												<li>
													<a href="">Olahan Pangan</a>
												</li>
												<li>
													<a href="">Ikan</a>
												</li>
											</ul>
										</div>
										<div className="row filter">
											<h6 className="accent-text accent-title">
												HARGA
											</h6>
											<ul className="list-unstyled">
												<li>
													<a href=""> Rp. 50k</a>
												</li>
												<li>
													<a href="">Buah</a>
												</li>
												<li>
													<a href="">Olahan Pangan</a>
												</li>
												<li>
													<a href="">Ikan</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="container-fluid fluid-page produk-list-container">
						<div className="container">
							<div className="row justify-content-end">

								<div className="col-sm-9 content-container x">
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
												<div className="card product-card card-outline-primary h-100" style={{ width: "12rem" }}>
													<span className="badge product-btn-wl b-transparent">
														<i class="far fa-heart fa-2x"></i>
													</span>
													<div className="img-container product-img bg-pattern">
														<img src={data.gambar} class="card-img-top img-fluid" alt="..." />
													</div>
													<div className="card-body">
														<div className="row">
															<span className="name-tag small-text mb-2">{data.nama}</span>
															<h4 className="card-title accent-title"><sup>Rp</sup>{data.harga}</h4>
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
					</div>
                </>
        )
}

export default ProdukList
