import React,{useEffect,useState} from 'react'
import { storage } from "../../firebase/firebase";
import '../../assets/css/userglobal.css'
import '../../assets/css/transaksi.css'
import WaitingPayment from '../../assets/images/waiting-payment.svg'
import Navbar from '../../components/organisms/user/navbar'
import Footer from '../../components/organisms/user/footer'
import NumberFormat from 'react-number-format'
import Countdown from 'react-countdown';
import {Link, useHistory} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import userTransactionAction from '../../redux/user/transaction/userTransactionAction';

function Pembayaran() {
    const dataTransaksi = useSelector(state => state.userTransaction.dataTransaksi)
    const kode = useSelector(state => state.userTransaction.kode_transaksi)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {   
        dispatch(userTransactionAction.getDataTransaksi("KT3276823"))
    }, [])

     //image Upload to Clound
    const allInputs = { imgUrl: "" },
    [imageAsFile, setImageAsFile] = useState(""),
    [imageAsUrl, setImageAsUrl] = useState(allInputs),
    [categoryId, setCategoryId] = useState(0);

    console.log(imageAsFile);

    const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    setImageAsFile((imageFile) => image);
    };

    const handleImageUpload = (e) => {
    e.preventDefault();
    console.log("start of upload");
    // async magic goes here...
    if (imageAsFile === "") {
        console.error(`not an image, the image file is a ${typeof imageAsFile}`);
    }
    const uploadTask = storage
        .ref(`/images/${imageAsFile.name}`)
        .put(imageAsFile);
    //initiates the firebase side uploading
    uploadTask.on(
        "state_changed",
        (snapShot) => {
        //takes a snap shot of the process as it is happening
        console.log(snapShot);
        },
        (err) => {
        //catches the errors
        console.log(err);
        },
        () => {
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        storage
            .ref("images")
            .child(imageAsFile.name)
            .getDownloadURL()
            .then((fireBaseUrl) => {
            setImageAsUrl((prevObject) => ({
                ...prevObject,
                imgUrl: fireBaseUrl,
            }));
            dispatch(userTransactionAction.uploadBukti(dataTransaksi.kode_transaksi,imageAsUrl.imgUrl))
            window.alert("upload bukti transfer berhasil");
            history.push("/success")
            });
        }
    );
    };


    return (
        <>
            <Navbar />
            <div className="container-fluid breadcrumbs-container">
                <div className="container">
                    <div className="row breadcrumbs-container">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                                <li className="breadcrumb-item"><Link to="/user-transaction">Transaksi</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Pembayaran</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div>
            <div className="container-fluid fluid-page payment-page-container">
                <div className="container">
                    <div className="row payment-content-container">
                        <div className="col-sm-6">
                            <div className="row page-title-container align-items-center">
                                <div className="col-sm">
                                    <h1 className="title">
                                        Pembayaran
                                    </h1>
                                </div>
                                <div className="col-sm d-flex kdpembayaran">
                                    <h4 className="align-middle text-muted">
                                        #{dataTransaksi.kode_transaksi}
                                    </h4>
                                </div>
                            </div>
                            <div className="row mb-4">
                                <div className="col-sm-12">
                                    STATUS : <span><b className="t-warning">{dataTransaksi.status}</b></span>
                                </div>
                                <div className="col-sm-12">
                                    <br />
                                    SELESAIKAN PEMBAYARAN SEBELUM :
                                </div>
                                <div className="col-sm-12">
                                    <h1 className="accent-text accent-title">
                                        <Countdown date={Date.now() + 7200000} daysInHours={true}/>
                                    </h1>
                                    <p className="text-muted">
                                        Silakan lakukan pembayaran sebelum batas waktu 
                                        yang ditentukan agar transaksi anda tidak dibatakan oleh sistem.
                                    </p>
                                </div>
                            </div>
                            <div className="row page-title-container align-items-center">
                                <div className="col-sm-12">
                                    <h1 className="title">
                                        Rincian
                                    </h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-6">
                                    <p className="">
                                        JUMLAH YANG HARUS DIBAYAR
                                    </p>
                                    <h3 className="accent-title">
                                    <NumberFormat value={dataTransaksi.harga} displayType={'text'} thousandSeparator={true} prefix={'Rp'}/>
                                    </h3>
                                </div>
                                <div className="col-sm-6">
                                    <div className="row rekening">
                                        <h1 className="title rekbayar">
                                            Rekening Pembayaran
                                        </h1>
                                        <p className="nmbank">
                                            {dataTransaksi.metode_pembayaran}
                                        </p>
                                        <h2 className="accent-title accent-text norek">
                                            023452121345
                                        </h2>
                                        <p className="anbank">
                                            PT. HULU TANI INDONESIA
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <p>
                                    Sudah bayar? Silakan upload <span className="accent-text">Bukti Pembayaran.</span>
                                </p>
                                <div className="col-sm-12">
                                    <form action="">
                                        <div className="row align-items-center">
                                            <div className="col-sm-7 mb-2">
                                                <input className="form-control small" type="file" id="formFile" onChange={handleImageAsFile}/>
                                            </div>
                                            <div className="col-sm-5">
                                                <button type="submit" className="primary small long" onClick={handleImageUpload}>Konfirmasi Pembayaran</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm img-payment-container">
                            <img src={ WaitingPayment } alt="" className="img-fluid img-payment" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Pembayaran
