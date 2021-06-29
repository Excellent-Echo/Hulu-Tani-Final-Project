import React from 'react'
import { Link } from 'react-router-dom'

import '../../../assets/css/usersidebar.css'

const UserSidebar = () => {
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
                                                    Profil Saya
                                                </button>
                                            </h4>
                                        </div>
                                        <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse " aria-labelledby="panelsStayOpen-headingOne">
                                            <div className="container-fluid sidebar-content-container">
                                                <div className="row sidebar-content">
                                                    <div className="col-sm">
                                                        <div className="row filter">
                                                            <div className="list-group">
                                                                <Link to="user-transaction">
                                                                    <button className="list-group-item list-group-item-action user-sidebar-button">
                                                                        <span className="sidebar-button">
                                                                            <span className="user-sidebar-icon transaksi"></span>
                                                                            Transaksi Saya
                                                                        </span>
                                                                    </button>
                                                                </Link>
                                                                <Link to="user-address">
                                                                    <button className="list-group-item list-group-item-action user-sidebar-button">
                                                                        <span className="sidebar-button">
                                                                            <span className="user-sidebar-icon alamat"></span>
                                                                            Alamat Saya
                                                                        </span>
                                                                    </button>
                                                                </Link>
                                                                <Link to="user-edit">
                                                                    <button className="list-group-item list-group-item-action user-sidebar-button">
                                                                        <span className="sidebar-button">
                                                                            <span className="user-sidebar-icon edit"></span>
                                                                            Edit Profil
                                                                        </span>
                                                                    </button>
                                                                </Link>
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
            </div>
        </>
    )
}

export default UserSidebar
