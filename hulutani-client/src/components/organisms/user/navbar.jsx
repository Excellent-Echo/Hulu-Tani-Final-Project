import React from 'react'

import '../../../assets/css/navbar.css'

const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav-container">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container">
                        <a class="navbar-brand  title accent-text" href="/">HuluTani</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        {/* KALO UDAH LOGIN */}
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <div class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Kategori
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a class="dropdown-item" href="#">[KATEGORI]</a></li>
                                    <li><a class="dropdown-item" href="#">[KATEGORI]</a></li>
                                    <li><a class="dropdown-item" href="#">[KATEGORI]</a></li>
                                </ul>
                            </div>
                            <form class="d-flex justify-content-center">
                                <input class="form-control w-100 small" type="search" placeholder="Cari produk" aria-label="Search" />
                            </form>
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item">
                                    <a class="nav-link btn-user" href="#"></a>
                                </li>
                                <li class="nav-item dropdown me-5">
                                    <a class="nav-link btn-menu" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a class="dropdown-item" href="#">Log Out</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        {/* END OF KALO UDAH LOGIN */}

                        {/* KALO BELOM LOGIN */}
                        {/* <div class="collapse navbar-collapse" id="navbarSupportedContent"> */}
                        {/* <ul class="navbar-nav ms-auto d-flex align-items-center"> */}
                        {/* <li class="nav-item"> */}
                        {/* <a class="nav-link" href="#">Home</a> */}
                        {/* </li> */}
                        {/* <li class="nav-item"> */}
                        {/* <a class="nav-link" href="#">Produk</a> */}
                        {/* </li> */}
                        {/* <li class="nav-item"> */}
                        {/* <a class="nav-link" href="#"> */}
                        {/* <button className="outline-primary small">Register</button> */}
                        {/* </a> */}
                        {/* </li> */}
                        {/* <li class="nav-item"> */}
                        {/* <a class="nav-link" href="#"> */}
                        {/* <button className="primary small">Log In</button> */}
                        {/* </a> */}
                        {/* </li> */}
                        {/* </ul> */}
                        {/* </div> */}
                        {/* END OF KALO BELOM LOGIN */}

                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
