import React from 'react'

import GroceryShopping from '../../assets/images/landing-title.svg'
import '../../assets/css/landing.css'

function LandingPage() {
    return (
        <>
            <div className="container-fluid fluid-page landing-title-container">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-7 title-text-container">
                            <h1 className="display-4 title">
                                Belanja <span className="title accent-text">bahan pangan</span> tanpa harus keluar rumah!
                            </h1>
                            <p className="subtitle">
                                Di masa PSBBv2.0 seperti ini, yakin buat ngambil resiko dengan pergi ke pasar?
                                Apalagi sekarang sudah eranya teknologi, semuanya serba online, termasuk sekolah, apalagi 
                                kalo cuman belanja bahan masak. Tunggu apa lagi?
                            </p>

                            <button className="primary">
                                Belanja Sekarang
                            </button>
                        </div>
                        <div className="col-sm title-image-container">
                            <img className="img-fluid title-image" src={ GroceryShopping } alt="" srcset="" />
                        </div>
                    </div>
                </div>  
            </div>
            <div className="container-fluid fluid-page landing-section1-container">
                <div className="container">
                    <div className="row justify-content-center section1-row1">
                        <h1 className="title text-center">
                            Why <span className="accent-text title">HuluTani?</span>
                        </h1>
                        <p className="subtitle text-center">
                            Kami bisa menjamin kalau kami ngga kalah hebat dari
                            amang-amang sayur langganan kamu.
                        </p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-sm-11">
                            <div className="row justify-content-center">
                                <div className="col-sm justify-content-center d-flex card-container">
                                    <div className="card card-primary landing-card h-100" style= {{ width: "18rem" }}>
                                        <div className="card-body">
                                            <div className="row card-icon">
                                                <i class="fas fa-tags"></i>
                                            </div>
                                            <div className="row">
                                                <h4 className="card-title title">Harga Terjangkau</h4>
                                                <p className="subtitle">
                                                    Produk kami bukan datang dari tengkulak, tapi dari para petani itu sendiri.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm justify-content-center d-flex card-container">
                                    <div className="card card-primary landing-card h-100" style= {{ width: "18rem" }}>
                                        <div className="card-body">
                                            <div className="row card-icon">
                                                <i class="fas fa-clipboard-list"></i>
                                            </div>
                                            <div className="row">
                                                <h4 className="card-title title">Produk Lengkap</h4>
                                                <p className="subtitle">
                                                    Para petani menghasilkan lebih dari ratusan jenis hasil panen.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm justify-content-center d-flex card-container">
                                    <div className="card card-primary landing-card h-100" style= {{ width: "18rem" }}>
                                        <div className="card-body">
                                            <div className="row card-icon">
                                                <i class="fas fa-shipping-fast"></i>
                                            </div>
                                            <div className="row">
                                                <h4 className="card-title title">Pengiriman Cepat</h4>
                                                <p className="subtitle">
                                                    Pengiriman kami lakukan lebih cepat, agar menghindari produk basi.                          
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid fluid-page landing-section2-container">
                <div className="container">
                    <div className="row justify-content-center section2-row1">
                        <h1 className="title text-center">
                            Kategori Pilihan
                        </h1>
                        <p className="subtitle text-center">
                            Produk kami lengkap, berikut beberapa kategori produk yang paling sering dicari oleh ibu-ibu.                            
                        </p>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-sm card-container">
                                    <div className="card landing-section2-card h-100" style= {{ width: "15rem" }}>
                                        <div className="card-body">
                                            <div className="row card-icon">
                                                <i class="fas fa-carrot"></i>
                                            </div>
                                            <div className="row">
                                                <h3 className="card-title title">Sayuran</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm card-container">
                                    <div className="card landing-section2-card h-100" style= {{ width: "15rem" }}>
                                        <div className="card-body">
                                            <div className="row card-icon">
                                                <i class="fas fa-lemon"></i>
                                            </div>
                                            <div className="row">
                                                <h3 className="card-title title">Buah</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm card-container">
                                    <div className="card landing-section2-card h-100" style= {{ width: "15rem" }}>
                                        <div className="card-body">
                                            <div className="row card-icon">
                                                <i class="fas fa-seedling"></i>
                                            </div>
                                            <div className="row">
                                                <h3 className="card-title title">Olahan Pangan</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm card-container">
                                    <div className="card landing-section2-card h-100" style= {{ width: "15rem" }}>
                                        <div className="card-body">
                                            <div className="row card-icon">
                                                <i class="fas fa-fish"></i>
                                            </div>
                                            <div className="row">
                                                <h3 className="card-title title">Ikan</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid fluid-page landing-section3-container">
                <div className="container">
                    <div className="row justify-content-center section3-row1">
                        <h1 className="title text-center accent-text">
                            Jelajahi lebih banyak produk HuluTani
                        </h1>
                        <p className="subtitle text-center">
                            Kategori di atas masih terasa kurang? Bagaimana kalau kamu liat sendiri seperti beberapa
                            produk di bawah ini.                           
                        </p>
                    </div>
                    <div className="row justify-content-center section3-row2">
                        <div className="row justify-content-center">
                            <div className="col-md-12">
                                <div className="row justify-content-center align-items-center">
                                    <div className="col-sm">
                                        <h4 className="accent-title">
                                            Sayuran
                                        </h4>
                                    </div>
                                    <div className="col-sm-3 section3-btntitle-container">
                                        <button className="primary xsmall accent-title">
                                            Lihat Semua
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-12">
                                <div className="row section3-card-container">
                                    <div className="col-sm card-container">
                                        <div className="card product-card card-outline-primary h-100" style={{ width: "11.8rem" }}>
                                            <div className="img-container product-img bg-pattern">
                                                <img src=" ... " class="card-img-top img-fluid" alt="..." />
                                            </div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <span className="name-tag small-text mb-2">[Nama]</span>
                                                    <h4 className="card-title accent-title"><sup>Rp</sup>[Harga]</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm card-container">
                                        <div className="card product-card card-outline-primary h-100" style={{ width: "11.8rem" }}>
                                            <div className="img-container product-img bg-pattern">
                                                <img src=" ... " class="card-img-top img-fluid" alt="..." />
                                            </div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <span className="name-tag small-text mb-2">[Nama]</span>
                                                    <h4 className="card-title accent-title"><sup>Rp</sup>[Harga]</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm card-container">
                                        <div className="card product-card card-outline-primary h-100" style={{ width: "11.8rem" }}>
                                            <div className="img-container product-img bg-pattern">
                                                <img src=" ... " class="card-img-top img-fluid" alt="..." />
                                            </div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <span className="name-tag small-text mb-2">[Nama]</span>
                                                    <h4 className="card-title accent-title"><sup>Rp</sup>[Harga]</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm card-container">
                                        <div className="card product-card card-outline-primary h-100" style={{ width: "11.8rem" }}>
                                            <div className="img-container product-img bg-pattern">
                                                <img src=" ... " class="card-img-top img-fluid" alt="..." />
                                            </div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <span className="name-tag small-text mb-2">[Nama]</span>
                                                    <h4 className="card-title accent-title"><sup>Rp</sup>[Harga]</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm card-container">
                                        <div className="card product-card card-outline-primary h-100" style={{ width: "11.8rem" }}>
                                            <div className="img-container product-img bg-pattern">
                                                <img src=" ... " class="card-img-top img-fluid" alt="..." />
                                            </div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <span className="name-tag small-text mb-2">[Nama]</span>
                                                    <h4 className="card-title accent-title"><sup>Rp</sup>[Harga]</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm card-container">
                                        <div className="card product-card card-outline-primary h-100" style={{ width: "11.8rem" }}>
                                            <div className="img-container product-img bg-pattern">
                                                <img src=" ... " class="card-img-top img-fluid" alt="..." />
                                            </div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <span className="name-tag small-text mb-2">[Nama]</span>
                                                    <h4 className="card-title accent-title"><sup>Rp</sup>[Harga]</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm card-container">
                                        <div className="card product-card card-outline-primary h-100" style={{ width: "11.8rem" }}>
                                            <div className="img-container product-img bg-pattern">
                                                <img src=" ... " class="card-img-top img-fluid" alt="..." />
                                            </div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <span className="name-tag small-text mb-2">[Nama]</span>
                                                    <h4 className="card-title accent-title"><sup>Rp</sup>[Harga]</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center section3-row3">
                        <div className="row justify-content-center">
                            <div className="col-md-12">
                                <div className="row justify-content-center align-items-center">
                                    <div className="col-sm">
                                        <h4 className="accent-title">
                                            Aneka Buah
                                        </h4>
                                    </div>
                                    <div className="col-sm-3 section3-btntitle-container">
                                        <button className="primary xsmall accent-title">
                                            Lihat Semua
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-12">
                                <div className="row section3-card-container">
                                    <div className="col-sm card-container">
                                        <div className="card product-card card-outline-primary h-100" style={{ width: "11.8rem" }}>
                                            <div className="img-container product-img bg-pattern">
                                                <img src=" ... " class="card-img-top img-fluid" alt="..." />
                                            </div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <span className="name-tag small-text mb-2">[Nama]</span>
                                                    <h4 className="card-title accent-title"><sup>Rp</sup>[Harga]</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm card-container">
                                        <div className="card product-card card-outline-primary h-100" style={{ width: "11.8rem" }}>
                                            <div className="img-container product-img bg-pattern">
                                                <img src=" ... " class="card-img-top img-fluid" alt="..." />
                                            </div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <span className="name-tag small-text mb-2">[Nama]</span>
                                                    <h4 className="card-title accent-title"><sup>Rp</sup>[Harga]</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm card-container">
                                        <div className="card product-card card-outline-primary h-100" style={{ width: "11.8rem" }}>
                                            <div className="img-container product-img bg-pattern">
                                                <img src=" ... " class="card-img-top img-fluid" alt="..." />
                                            </div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <span className="name-tag small-text mb-2">[Nama]</span>
                                                    <h4 className="card-title accent-title"><sup>Rp</sup>[Harga]</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm card-container">
                                        <div className="card product-card card-outline-primary h-100" style={{ width: "11.8rem" }}>
                                            <div className="img-container product-img bg-pattern">
                                                <img src=" ... " class="card-img-top img-fluid" alt="..." />
                                            </div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <span className="name-tag small-text mb-2">[Nama]</span>
                                                    <h4 className="card-title accent-title"><sup>Rp</sup>[Harga]</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm card-container">
                                        <div className="card product-card card-outline-primary h-100" style={{ width: "11.8rem" }}>
                                            <div className="img-container product-img bg-pattern">
                                                <img src=" ... " class="card-img-top img-fluid" alt="..." />
                                            </div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <span className="name-tag small-text mb-2">[Nama]</span>
                                                    <h4 className="card-title accent-title"><sup>Rp</sup>[Harga]</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm card-container">
                                        <div className="card product-card card-outline-primary h-100" style={{ width: "11.8rem" }}>
                                            <div className="img-container product-img bg-pattern">
                                                <img src=" ... " class="card-img-top img-fluid" alt="..." />
                                            </div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <span className="name-tag small-text mb-2">[Nama]</span>
                                                    <h4 className="card-title accent-title"><sup>Rp</sup>[Harga]</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm card-container">
                                        <div className="card product-card card-outline-primary h-100" style={{ width: "11.8rem" }}>
                                            <div className="img-container product-img bg-pattern">
                                                <img src=" ... " class="card-img-top img-fluid" alt="..." />
                                            </div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <span className="name-tag small-text mb-2">[Nama]</span>
                                                    <h4 className="card-title accent-title"><sup>Rp</sup>[Harga]</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center section3-row4">
                        <div className="col-md-3 justify-content-center d-flex">
                            <button className="primary">
                                Belanja Sekarang
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LandingPage
