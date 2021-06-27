import React from 'react'

import '../../../assets/css/productfilter.css'

const ProductFilter = () => {
    return (
        <>
            <div className="container-fluid sidebar-container">
                <div className="container">
                    <div className="filter-sidebar-container">
                        <div className="row">
                            <div className="col-sm filter-sidebar">
                                <div class="accordion" id="accordionPanelsStayOpenExample">
                                    <div class="accordion-item">
                                        <div className="container-fluid sidebar-title d-flex justify-content-center">
                                            <h4 className="title text-center">
                                                <button class="title text-center" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                                                    FILTER PRODUK
                                                </button>
                                            </h4>
                                        </div>
                                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse " aria-labelledby="panelsStayOpen-headingOne">
                                            <div className="container-fluid sidebar-content-container">
                                                <div className="row sidebar-content">
                                                    <div className="col-sm">
                                                        <div className="row filter">
                                                            <div className="col-sm">
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
                                                            <div className="col-sm">
                                                                <h6 className="accent-text accent-title">
                                                                    HARGA
                                                                </h6>
                                                                <ul className="list-unstyled">
                                                                    <li>
                                                                        <a href="">dibawah Rp 50k</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">diatas Rp 50k</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">dibawah Rp 100k</a>
                                                                    </li>
                                                                    <li>
                                                                        <a href="">diatas Rp 100k</a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                        </div>
                                                        <div className="row filter">

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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

export default ProductFilter
