import React,{useEffect} from 'react'
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import '../../assets/css/userglobal.css'
import '../../assets/css/userpage.css'
import Navbar from '../../components/organisms/user/navbar';
import Footer from '../../components/organisms/user/footer'
import ModalTbAlamat from '../../components/organisms/user/modaltbalamat';
import ModalEdAlamat from '../../components/organisms/user/modaledalamat';
import UserSidebar from '../../components/organisms/user/usersidebar';
import { useSelector, useDispatch } from 'react-redux';
import addressAction from '../../redux/user/address/adressAction';

function UserAlamat() {
    const daftarAlamat = useSelector(state => state.userAddress.daftarAlamat)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(addressAction.setDaftarAlamat())
    }, [])

    const handleClickDelete = (id) => {
        Swal.fire({
          title: "Apakah Hapus alamat ini?",
          text: "Ini tidak akan bisa dikembalikan!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Ya, Hapus!",
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch(addressAction.deleteAddress(id));
            Swal.fire("Deleted!", "Berhasil Hapus Alamat.", "success");
          }
        });
      };

    return (
        <>
            <Navbar />
            <div className="container-fluid breadcrumbs">
                <div className="container">
                    <div className="row breadcrumbs-container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item"><Link to="/user-edit">Profil Saya</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Alamat Saya</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <UserSidebar />
            <div className="container-fluid fluid-page user-page-container">
                <div className="container">
                    <div className="row user-content-container">
                        <div className="col-sm user-content">
                            <div className="row content-title">
                                <div className="col-sm">
                                    <h1 className="accent-title accent-text">
                                        Alamat Saya
                                    </h1>
                                </div>
                                <div className="col-sm d-flex justify-items-end">
                                    <button className="primary btn-add" data-bs-toggle="modal" data-bs-target="#modalTbAlamat">
                                    </button>
                                </div>
                            </div>
                            <br />
                            <br />
                            <div className="row content-content">
                                {/* CARD ALAMAT */}
                                {daftarAlamat.map((data,index)=> {
                                    return (
                                        <div className="col-sm card-alamat-user card-container">
                                            <div className="card card-outline-primary h-100">
                                                <div className="card-body">
                                                    <div className="row badge-container align-items-start">
                                                        <div className="col-sm">
                                                            <span class="status-badge b-primary px-2">Alamat</span>
                                                        </div>
                                                        <div className="col-sm d-flex justify-content-end">
                                                            <button className="b-danger xsmall btn-trash me-2" onClick={()=>handleClickDelete(data.id)}></button>
                                                        </div>
                                                    </div>
                                                    <br />
                                                    <br />
                                                    <div className="row align-items-end">
                                                        <h5 className="card-title accent-title">{data.nama_penerima}</h5>
                                                        <span className="small-text">{data.nomor_handphone_penerima}</span>
                                                        <span className="">
                                                            {data.alamat_detail}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })} 
                                {/* END OF CARD ALAMAT */} 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />

            {/* MODALS */}
                <ModalTbAlamat />
                <ModalEdAlamat />
            {/* END OF MODALS */}
        </>
    )
}

export default UserAlamat
