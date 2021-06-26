import React from 'react'

import '../../../assets/css/navbar.css'

const Navbar = () => {
    return (
        <>
            <div className="container-fluid nav-container">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container">
                        <a class="navbar-brand  title accent-text" href="#">HuluTani</a>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        {/* KALO BELOM LOGIN */}
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto d-flex align-items-center">
                        <li class="nav-item">
                        <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">Produk</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">
                        <button className="outline-primary small">Register</button>
                        </a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">
                        <button className="primary small">Log In</button>
                        </a>
                        </li>
                        </ul>
                        </div>
                        {/* END OF KALO BELOM LOGIN */}

                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar
