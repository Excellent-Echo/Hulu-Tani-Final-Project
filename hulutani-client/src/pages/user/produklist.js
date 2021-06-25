import React, {useEffect} from 'react'
import '../../assets/css/produk.css'
import {useSelector, useDispatch} from  "react-redux"
import catalogAction from '../../redux/public/catalog/catalogAction'
import categoryAction from "../../redux/admin/category/show/adminShowCategoryAction"
import NumberFormat from 'react-number-format'
import {Link} from "react-router-dom"

function ProdukList() {
	const catalogProduct = useSelector(state => state.catalogProduct)
	const category = useSelector(state => state.adminShowCategory.categories)
	const dispatch = useDispatch()
	const harga1 = new FormData()
	const harga2 = new FormData()
	const harga3 = new FormData()
	const harga4 = new FormData()

	harga1.append("dari",0)
	harga1.append("sampai",50000)
	harga2.append("dari",50000)
	harga2.append("sampai",10000000)
	harga3.append("dari",0)
	harga3.append("sampai",100000)
	harga4.append("dari",100000)
	harga4.append("sampai",10000000)

	useEffect(() => {	
		dispatch(catalogAction.getAllProducts())
		dispatch(categoryAction.getCategories())
	}, [])

	const filterCategoryHandler =(id)=> {
		//console.log(id)
		dispatch(catalogAction.getFilterdProductsByCategory(id))
	}

	const filterHargaHandler = (start,end) => {
		dispatch(catalogAction.getFilterdProductsByPrice(start,end))
	}
	
        return (
                <>
					<div className="container-fluid nav-container">
						<nav class="navbar navbar-expand-lg bg-light">
							<div class="container">
								<a class="navbar-brand title accent-text" href="#">HuluTani</a>
								<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
								<span class="navbar-toggler-icon"></span>
								</button>
								<div class="container-fluid collapse navbar-collapse" id="navbarSupportedContent">
									<div className="row justify-content-center">
										<div className="col-sm-4 d-flex justify-self-end">
											<ul class="navbar-nav">
												<li class="nav-item dropdown">
													<a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
														Kategori
													</a>
													<ul class="dropdown-menu" aria-labelledby="navbarDropdown">
														<li>
															<div onClick={()=>{dispatch(catalogAction.getAllProducts())}} class="dropdown-item">All Product</div>
														</li>
														{category.map((data,index)=>{
															return (
															<li key={index}>
																
																<div onClick={()=>{filterCategoryHandler(data.id)}} class="dropdown-item">{data.nama}</div>
															</li>
															)
														})}
													</ul>
												</li>
											</ul>
										</div>
										<div className="col-sm-8">
											<form class="">
												<input class="form-control nav-search" type="search" placeholder="Cari 'wortel'" aria-label="Search"/>
											</form>
										</div>
									</div>
								</div>
							</div>
						</nav>
					</div>
					<div className="container-fluid">
						<div className="container">
							<div className="filter-sidebar-container">
								<div className="col-sm-2 filter-sidebar">
									<div className="container-fluid sidebar-title d-flex justify-content-center">
										<h4 className="title text-center">
											FILTER PRODUK
										</h4>
									</div>
									<div className="container-fluid sidebar-content-container">
										<br />
										<div className="row sidebar-content">
											<div className="row filter">
												<h6 className="accent-text accent-title">
													KATEGORI
												</h6>
												<ul className="list-unstyled">
													<li><div onClick={()=>{dispatch(catalogAction.getAllProducts())}}>All Product</div></li>
													{category.map((data,index)=>{
														return (
														<li key={index}>
															
															<div onClick={()=>{filterCategoryHandler(data.id)}}>{data.nama}</div>
														</li>
														)
													})}
												
												</ul>
											</div>
											<div className="row filter">
												<h6 className="accent-text accent-title">
													HARGA
												</h6>
												<ul className="list-unstyled">
													<li>
														<div onClick={()=> filterHargaHandler(harga1)}>dibawah Rp 50rb</div>
													</li>
													<li>
														<div onClick={()=> filterHargaHandler(harga2)}>diatas Rp 50rb</div>
													</li>
													<li>
														<div onClick={()=> filterHargaHandler(harga3)}>dibawah Rp 100rb</div>
													</li>
													<li>
														<div onClick={()=> filterHargaHandler(harga4)}>diatas Rp 100rb</div>
													</li>
												</ul>
											</div>
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
												<Link to={`/product/${data.id}`}>
												<div className="card product-card card-outline-primary h-100" style={{ width: "11.8rem" }}>
													<span className="badge product-btn-wl b-transparent">
														<i class="far fa-shopping-cart fa-2x"></i>
													</span>
													<div className="img-container product-img bg-pattern">
														<img src={data.gambar} class="card-img-top img-fluid" alt="..." />
													</div>
													<div className="card-body">
														<div className="row">
															<span className="name-tag small-text mb-2">{data.nama}</span>
															<h4 className="card-title accent-title">
																<NumberFormat value={data.harga} displayType={"text"} thousandSeparator={true} prefix={"Rp"}/>
															</h4>
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
