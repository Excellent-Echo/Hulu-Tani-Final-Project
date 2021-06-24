import React from 'react'

function ProdukDetail() {
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
                    <div className="row content-container justify-content-center">
                        <div className="col-sm product-img-container justify-content-start">
                            <div className="row bg-pattern">
                                <img src="" alt="" className="img-fluid" />
                            </div>
                        </div>
                        <div className="col-sm product-content">
                            <div className="row product-name-container">
                                <h4 className="text-muted accent-title">
                                    [Kategori]
                                </h4>
                                <h1 className="title">
                                    [Nama Produk]
                                </h1>
                            </div>
                            <div className="row">
                                <h1 className="accent-title accent-text">
                                    Rp. 33.000
                                </h1>
                                <div className="col-sm-3 stock-range">
                                    <label for="jumlah" className="form-label">Jumlah</label>
                                    <input type="number" className="form-control" id="jumlah" placeholder="1" />
                                </div>
                                <div className="col-sm-7 d-flex align-items-end">
                                    <button className="primary long">Beli Sekarang</button>
                                </div>
                                <div className="row product-desc">
                                    <h5>
                                        Informasi Produk
                                    </h5>
                                    <div className="col-sm-11">
                                        <p className="subtitle">
                                            Massa mattis elementum metus purus a, venenatis lorem. Sagittis elit consequat in odio faucibus elementum.
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
