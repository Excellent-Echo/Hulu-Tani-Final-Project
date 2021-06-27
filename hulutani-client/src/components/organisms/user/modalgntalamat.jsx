import React,{useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import addressAction from '../../../redux/user/address/adressAction';
import userTransactionAction from '../../../redux/user/transaction/userTransactionAction';

const ModalGntAlamat = () => {
    const daftarAlamat = useSelector(state => state.userAddress.daftarAlamat)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(addressAction.setDaftarAlamat())
    }, [])

    const onClickHandler = (id, alamat, nama, cityId)=>{
        dispatch(addressAction.setId(id))
        dispatch(userTransactionAction.getCost(cityId))
        dispatch(addressAction.setAlamatLengkap(alamat))
        dispatch(addressAction.setNama(nama))
    }

    return (
        <>
            <div class="modal fade modalGntAlamat" id="modalGntAlamat" tabindex="-1" aria-labelledby="modalGntAlamatLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title title accent-text">Pilih Alamat</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="row justify-content-center">
                                <div className="col-sm-12">
                                {daftarAlamat.map((data,index)=> {
                                    return (
                                    <button className="long outline-primary" key={index} onClick={()=>onClickHandler(data.id, data.alamat_detail,data.nama_penerima,data.city_id)}>
                                        <div className="row">
                                            <div className="col-sm-12 d-flex justify-content-start">
                                                <span className="me-3 accent-title">
                                                    {index+1}
                                                </span>
                                                <span className="me-3 accent-title">
                                                    {data.nama_penerima}
                                                </span>
                                                <span className="mx-auto accent-title">
                                                    {data.nomor_handphone_penerima}
                                                </span>
                                                <span className="ms-auto accent-title">
                                                    {data.alamat_detail}
                                                </span>
                                            </div>
                                        </div>
                                    </button>
                                    )
                                })} 
                                </div>                                
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="b-danger small" data-bs-dismiss="modal">Batal</button>
                            {/* <button type="button" class="primary small">Simpan</button> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalGntAlamat
