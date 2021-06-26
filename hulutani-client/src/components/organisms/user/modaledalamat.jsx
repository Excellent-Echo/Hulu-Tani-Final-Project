import React from 'react'

const ModalEdAlamat = () => {
    return (
        <>
            <div class="modal fade" id="modalEdAlamat" tabindex="-1" aria-labelledby="modalEdAlamatLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title title accent-text">Ubah Alamat</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form className="row g-3">
                                <div className="col-sm-6">
                                    <label for="namaLengkap" className="form-label accent-title">Nama Lengkap</label>
                                    <input type="text" className="form-control" id="namaLengkap" />
                                </div>
                                <div className="col-sm-6">
                                    <label for="noTelp" className="form-label accent-title">No. Telepon</label>
                                    <input type="text" className="form-control" id="notelp" />
                                </div>
                                <div className="col-sm-12">
                                    <label for="alamat" class="form-label accent-title">Alamat Lengkap</label>
                                    <textarea class="form-control" id="alamat" rows="3"></textarea>
                                </div>
                                <div className="col-sm-6">
                                    <label for="kota" className="form-label accent-title">Kota</label>
                                    <input type="text" className="form-control" id="kota" />
                                </div>
                                <div className="col-sm-6">
                                    <label for="provinsi" className="form-label accent-title">Provinsi</label>
                                    <input type="text" className="form-control" id="provinsi" />
                                </div>
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="b-danger small" data-bs-dismiss="modal">Batal</button>
                            <button type="button" class="primary small">Simpan</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalEdAlamat
