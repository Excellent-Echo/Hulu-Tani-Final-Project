import React from 'react'
import { useDispatch } from 'react-redux'
import { Link,useHistory } from 'react-router-dom'

import '../../../assets/css/navbar.css'
import userLoginAction from '../../../redux/user/login/userLoginAction'
import CategoryHeader from './categoryHeader'

const UserNav = () => {
    const history = useHistory()
    const dispatch = useDispatch()

    const logoutUser = () => {
        localStorage.removeItem("accessToken");
        history.push("/")
        dispatch(userLoginAction.logOut())
    }

    return (
        <>
            <div className="container-fluid nav-container">
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <div class="container">
                        <Link class="navbar-brand  title accent-text" to="/">HuluTani</Link>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        {/* KALO UDAH LOGIN */}
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <CategoryHeader/>
                            <form class="d-flex justify-content-center">
                                <input class="form-control userpages w-100" type="search" placeholder="Cari produk" aria-label="Search" />
                            </form>
                            <ul class="navbar-nav ms-auto">
                                <li class="nav-item">
                                    <Link class="nav-link" to="/products">Produk</Link>
                                </li>
                                <li class="nav-item dropdown me-1">
                                    <a class="nav-link btn-user" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li class="dropdown-item"><Link to="/user-profile">User Profile</Link></li>
                                        <li class="dropdown-item"><Link to="/user-transaction">Daftar Transaksi</Link></li>
                                    </ul>
                                </li>
                                <li class="nav-item dropdown me-5">
                                    <a class="nav-link btn-menu" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false"></a>
                                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li class="dropdown-item" onClick={logoutUser}>Log Out</li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        {/* END OF KALO UDAH LOGIN */}

                    </div>
                </nav>
            </div>
        </>
    )
}

export default UserNav
