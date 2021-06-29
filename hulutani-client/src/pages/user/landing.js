import React, { useEffect } from 'react'

import '../../assets/css/userglobal.css'
import '../../assets/css/landing.css'
import ContactUs from '../../assets/images/contact-us.svg'
import GroceryShopping from '../../assets/images/landing-title.svg'
import Navbar from '../../components/organisms/user/navbar'
import Footer from '../../components/organisms/user/footer'
import { useHistory, Link } from 'react-router-dom'
import landingProductAction from '../../redux/public/landing/landingProductAction'
import {useSelector, useDispatch} from "react-redux"
import NumberFormat from 'react-number-format'
import adminAddContactAction from '../../redux/admin/contact/add/adminAddContactAction'

function LandingPage() {
    const history = useHistory()
    const landingProduct = useSelector(state => state.landingProduct)
    const dispatch = useDispatch()
    const contactData =  useSelector(state => state.addContact)

    useEffect(() => {
        dispatch(landingProductAction.getProductCategory1())
        dispatch(landingProductAction.getProductCategory2())
    }, [])

    const toProducts =()=>{
        history.push("/products")
    }

    const addContactHandler = (e)=>{
        e.preventDefault()
        //console.log("add contact")
        dispatch(adminAddContactAction.addContact(
            contactData.namaLengkap,
            contactData.telepon,
            contactData.email,
            contactData.setJenis,
            contactData.setPesan
        ))
    }

    return (
        <>
            <Navbar />
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

                            <button className="primary" onClick={toProducts}>
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
                    {/* Product with categori 1 */}
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
                                        {/* <button className="primary xsmall accent-title">
                                            Lihat Semua
                                        </button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-12">
                                <div className="row section3-card-container">
                                    {landingProduct.productByCategory1.map((data,index)=>{
                                return (
                                    <div className="col-sm product-card-container">
                                        <Link to={`/product/${data.id}`}>
                                        <div className="card product-card card-outline-primary h-100" style={{ width: "11.8rem" }}>
                                            <div className="img-container product-img bg-pattern">
                                                <img src={data.gambar} class="card-img-top img-fluid" alt="..." />
                                            </div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <span className="name-tag small-text mb-2">{data.nama}</span>
                                                    <h4 className="card-title accent-title"><NumberFormat value={data.harga} displayType={'text'} thousandSeparator={true} prefix={'Rp'}/></h4>
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
                    {/* end of Product with categori 1 */}
                    {/* Product with categori 2 */}
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
                                        {/* <button className="primary xsmall accent-title">
                                            Lihat Semua
                                        </button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-md-12">
                                <div className="row section3-card-container">
                                {landingProduct.productByCategory2.map((data,index)=>{
                                return (
                                    <div className="col-sm product-card-container">
                                         <Link to={`/product/${data.id}`}>
                                        <div className="card product-card card-outline-primary h-100" style={{ width: "11.8rem" }}>
                                            <div className="img-container product-img bg-pattern">
                                                <img src={data.gambar} class="card-img-top img-fluid" alt="..." />
                                            </div>
                                            <div className="card-body">
                                                <div className="row">
                                                    <span className="name-tag small-text mb-2">{data.nama}</span>
                                                    <h4 className="card-title accent-title"><NumberFormat value={data.harga} displayType={'text'} thousandSeparator={true} prefix={'Rp'}/></h4>
                                                </div>
                                            </div>
                                        </div>
                                        </Link>
                                    </div>
                                    )
                                })}
                                    {/* CARD END */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end of Product with categori 1 */}
                    <div className="row justify-content-center section3-row4">
                        <div className="col-md-3 justify-content-center d-flex">
                            <button className="primary" onClick={toProducts}>
                                Belanja Sekarang
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid fluid-page testi-container">
                <div className="container">
                    <div className="row">
                        <div className="col-sm">
                            <h5 className="text-muted">
                                Testimoni
                            </h5>
                            <h1 className="title accent-text">
                                Apa kata para petani tentang kami.
                            </h1>
                            <h1 className="title accent-text">
                                —
                            </h1>
                        </div>
                        <div className="col-sm">
                            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div className="row">
                                            <div className="col-sm d-flex justify-content-center">
                                                <div class="card card-outline-primary h-100" style={{ width: "25rem" }}>
                                                    <div class="card-body">
                                                        <p className="subtitle">
                                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim aliquam libero incidunt quis fuga dolorum sed corporis sit quas aspernatur porro, labore provident nihil? Dignissimos non ipsa provident possimus numquam?
                                                        </p>
                                                        <hr />
                                                        <h6 class="card-subtitle mb-2 text-muted">Petani</h6>
                                                        <h5 class="title">Helmi Yusuf Efendi</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div className="row">
                                            <div className="col-sm d-flex justify-content-center">
                                                <div class="card card-outline-primary h-100" style={{ width: "25rem" }}>
                                                    <div class="card-body">
                                                        <p className="subtitle">
                                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim aliquam libero incidunt quis fuga dolorum sed corporis sit quas aspernatur porro, labore provident nihil? Dignissimos non ipsa provident possimus numquam?
                                                        </p>
                                                        <hr />
                                                        <h6 class="card-subtitle mb-2 text-muted">Pembajak</h6>
                                                        <h5 class="title">Radika Yudhistira Early</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div className="row">
                                            <div className="col-sm d-flex justify-content-center">
                                                <div class="card card-outline-primary h-100" style={{ width: "25rem" }}>
                                                    <div class="card-body">
                                                        <p className="subtitle">
                                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim aliquam libero incidunt quis fuga dolorum sed corporis sit quas aspernatur porro, labore provident nihil? Dignissimos non ipsa provident possimus numquam?
                                                        </p>
                                                        <hr />
                                                        <h6 class="card-subtitle mb-2 text-muted">Pencocok Tanam</h6>
                                                        <h5 class="title">Randhika Rizkyaldi</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div className="row">
                                            <div className="col-sm d-flex justify-content-center">
                                                <div class="card card-outline-primary h-100" style={{ width: "25rem" }}>
                                                    <div class="card-body">
                                                        <p className="subtitle">
                                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim aliquam libero incidunt quis fuga dolorum sed corporis sit quas aspernatur porro, labore provident nihil? Dignissimos non ipsa provident possimus numquam?
                                                        </p>
                                                        <hr />
                                                        <h6 class="card-subtitle mb-2 text-muted">Pencangkul</h6>
                                                        <h5 class="title">Danang Estutomo Aji</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div className="row">
                                            <div className="col-sm d-flex justify-content-center">
                                                <div class="card card-outline-primary h-100" style={{ width: "25rem" }}>
                                                    <div class="card-body">
                                                        <p className="subtitle">
                                                            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim aliquam libero incidunt quis fuga dolorum sed corporis sit quas aspernatur porro, labore provident nihil? Dignissimos non ipsa provident possimus numquam?
                                                        </p>
                                                        <hr />
                                                        <h6 class="card-subtitle mb-2 text-muted">Penikmat Hasil Panen</h6>
                                                        <h5 class="title">Muhammad Fauzul Hanif</h5>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                                    <span class="btn-prev" aria-hidden="true"></span>
                                    <span class="visually-hidden">Previous</span>
                                </button>
                                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                                    <span class="btn-next" aria-hidden="true"></span>
                                    <span class="visually-hidden">Next</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid fluid-page contactus-container">
                <div className="container">
                    <div className="row justify-content-center">
                        <h1 className="title accent-text">
                            Kontak Kami
                        </h1>
                        <p className="subtitle">
                            Jika kamu memiliki hal untuk dibicarakan, silakan kontak kami.
                        </p>
                    </div>
                    {/* CONTACT FORM */}
                    <div className="row align-items-center">
                        <div className="col-sm d-flex justify-content-start">
                            <form className="row g-3" onSubmit={addContactHandler}>
                                <div className="col-sm-6">
                                    <label for="namaLengkap" className="form-label accent-title">Nama Lengkap</label>
                                    <input type="text" className="form-control small userpages" id="namaLengkap" 
                                    value={contactData.namaLengkap}
                                    onChange={(e)=>dispatch(adminAddContactAction.setNama(e.target.value))}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <label for="noTelp" className="form-label accent-title">No. Telepon</label>
                                    <input type="text" className="form-control small userpages" id="notelp" 
                                    value={contactData.telepon}
                                    onChange={(e)=>dispatch(adminAddContactAction.setTelepon(e.target.value))}
                                     />
                                </div>
                                <div className="col-sm-6">
                                    <label for="email" className="form-label accent-title">Email</label>
                                    <input type="text" className="form-control small userpages" id="email" 
                                    value={contactData.email}
                                    onChange={(e)=>dispatch(adminAddContactAction.setEmail(e.target.value))}
                                     />
                                </div>
                                <div className="col-sm-6">
                                    <label for="provinsi" className="form-label accent-title">Jenis Pesan</label>
                                    <select id="jnsPesan" className="form-select userpages small" 
                                    onChange={(e)=>dispatch(adminAddContactAction.setJenis(e.target.value))}
                                    >
                                        <option selected>Pilih salah satu</option>
                                        <option value={"Kritik"}>Kritik</option>
                                        <option value={"Saran"}>Saran</option>
                                        <option value={"Penilaian"}>Penilaian</option>
                                        <option value={"Undangan Kemitraan"}>Undangan Kemitraan</option>
                                        <option value={"Lainya"}>Lainnya</option>
                                    </select>
                                </div>
                                <div className="col-sm-12">
                                    <label for="pesan" class="form-label accent-title">Pesan</label>
                                    <textarea class="form-control small userpages" id="pesan" rows="3"
                                    value={contactData.pesan}
                                    onChange={(e)=>dispatch(adminAddContactAction.setPesan(e.target.value))}
                                    ></textarea>
                                </div>
                                <div className="col-12">
                                    <br />
                                    <button type="submit" className="button primary long" >Kirim</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-sm">
                            <div className="col-sm img-container">
                                <img src={ContactUs} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    {/* CONTACT FORM */}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default LandingPage
