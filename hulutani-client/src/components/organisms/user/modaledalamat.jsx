import React from 'react'

const ModalEdAlamat = () => {
    return (
        <>
            <div className="modal fade" id="modalEdAlamat" tabindex="-1" aria-labelledby="modalEdAlamatLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title title accent-text">Ubah Alamat</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <form className="row g-3">
                                <div className="col-sm-6">
                                    <label for="namaLengkap" className="form-label accent-title">Nama Lengkap</label>
                                    <input type="text" className="form-control userpages" id="namaLengkap" />
                                </div>
                                <div className="col-sm-6">
                                    <label for="noTelp" className="form-label accent-title">No. Telepon</label>
                                    <input type="text" className="form-control userpages" id="notelp" />
                                </div>
                                <div className="col-sm-12">
                                    <label for="alamat" className="form-label accent-title">Alamat Lengkap</label>
                                    <textarea className="form-control userpages" id="alamat" rows="3"></textarea>
                                </div>
                                <div className="col-sm-6">
                                    <label for="kota" className="form-label accent-title">Kota</label>
                                    <input type="text" className="form-control userpages" id="kota" />
                                </div>
                                <div className="col-sm-6">
                                    <label for="provinsi" className="form-label accent-title">Provinsi</label>
                                    <input type="text" className="form-control userpages" id="provinsi" />
                                </div>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="b-danger small" data-bs-dismiss="modal">Batal</button>
                            <button type="button" className="primary small">Simpan</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalEdAlamat
