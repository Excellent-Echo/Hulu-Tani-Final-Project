import React from 'react'

const ModalGntAlamat = () => {
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
                                    <button className="long outline-primary">
                                        <div className="row">
                                            <div className="col-sm-12 d-flex justify-content-start">
                                                <span className="me-3 accent-title">
                                                    1.
                                                </span>
                                                <span className="me-3 accent-title">
                                                    Nama
                                                </span>
                                                <span className="mx-auto accent-title">
                                                    No-Telp
                                                </span>
                                                <span className="ms-auto accent-title">
                                                    Kota
                                                </span>
                                            </div>
                                        </div>
                                    </button>
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
