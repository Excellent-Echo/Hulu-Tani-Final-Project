import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'

import addressAction from "../../../redux/user/address/adressAction"
const ModalTbAlamat = () => {
    const alamatData = useSelector(state => state.userAddress)
    const dispatch = useDispatch()
    const history = useHistory()

    useEffect(() => {
        dispatch(addressAction.setDaftarKota())
        dispatch(addressAction.setDaftarProvinsi())
    }, [])

    const addHandler = (e) => {
        e.preventDefault()
        console.log(alamatData.daftarKota)
        dispatch(addressAction.addAddress(alamatData.nama,alamatData.telepon,alamatData.alamatLengkap,alamatData.provinsi,alamatData.cityId))
        dispatch(addressAction.resetForm())
        history.push("/user-address")
    }
    return (
        <>
            <div class="modal fade" id="modalTbAlamat" tabindex="-1" aria-labelledby="modalTbAlamatLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title title accent-text">Tambah Alamat</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form className="row g-3">
                                <div className="col-sm-6">
                                    <label for="namaLengkap" className="form-label accent-title">Nama Lengkap</label>
                                    <input type="text" className="form-control" id="namaLengkap" 
                                    value={alamatData.nama}
                                    onChange={(e) => dispatch(addressAction.setNama(e.target.value))}
                                    />
                                </div>
                                <div className="col-sm-6">
                                    <label for="noTelp" className="form-label accent-title">No. Telepon</label>
                                    <input type="text" className="form-control" id="notelp" 
                                    value={alamatData.telepon}
                                    onChange={(e) => dispatch(addressAction.setTelepon(e.target.value))}
                                    />
                                </div>
                                <div className="col-sm-12">
                                    <label for="alamat" class="form-label accent-title">Alamat Lengkap</label>
                                    <textarea class="form-control" id="alamat" rows="3"
                                    value={alamatData.alamatLengkap}
                                    onChange={(e) => dispatch(addressAction.setAlamatLengkap(e.target.value))}
                                    ></textarea>
                                </div>
                                <div className="col-sm-6">
                                    <label for="kota" className="form-label accent-title">Kota</label>
                                    <select type="text" className="form-control" id="kota" 
                                    onChange={(e) => {
                                        dispatch(addressAction.setCityId(e.target.value));
                                        }}>
                                        {alamatData.daftarKota.map((data,index)=>{
                                            return (
                                                <option value={data.city_id}>{data.city_name}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                                <div className="col-sm-6">
                                    <label for="provinsi" className="form-label accent-title">Provinsi</label>
                                    <select type="text" className="form-control" id="provinsi" onChange={(e) => dispatch(addressAction.setProvinsi(e.target.value))}>
                                    {alamatData.daftarProvinsi.map((data,index)=>{
                                            return (
                                                <option value={data.province}>{data.province}</option>
                                            )
                                        })}
                                    </select>
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="b-danger small" data-bs-dismiss="modal">Batal</button>
                            <button type="button" class="primary small" data-bs-dismis="modal" onClick={addHandler}>Simpan</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalTbAlamat
