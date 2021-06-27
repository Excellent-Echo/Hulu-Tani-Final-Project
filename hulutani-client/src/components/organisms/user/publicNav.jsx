import React from 'react'
import { Link } from 'react-router-dom'

import '../../../assets/css/navbar.css'
import CategoryHeader from './categoryHeader'

const PublicNav = () => {


    return (
        <>
            <div className="container-fluid nav-container">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container">
                        <Link class="navbar-brand  title accent-text" to="/">HuluTani</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <CategoryHeader/>
                            <form class="d-flex justify-content-center">
                                <input class="form-control w-100" type="search" placeholder="Cari produk" aria-label="Search" />
                            </form>
                            <ul class="navbar-nav ms-auto d-flex align-items-center">
                                <li class="nav-item">
                                    <Link class="nav-link" to="/">Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/products">Produk</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/register">
                                        <button className="outline-primary small">Register</button>
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link" to="/login">
                                        <button className="primary small">Log In</button>
                                    </Link>
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

export default PublicNav
