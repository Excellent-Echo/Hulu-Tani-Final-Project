import React from 'react'

const ModalGntAlamat = () => {
    return (
        <>
            <div class="modal fade" id="modalGntAlamat" tabindex="-1" aria-labelledby="modalGntAlamatLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title title accent-text">Pilih Alamat</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="row justify-content-center">
                                {/* CARD ALAMAT */}
                                <div className="col-sm alamat-card card-container d-flex justify-content-center">
                                    <div className="card product-card card-outline-primary h-80">
                                        <div className="card-body">
                                            <div className="row badge-container align-items-start">
                                                <div className="col-sm">
                                                    <span class="status-badge b-primary px-2">Utama</span>
                                                </div>
                                            </div>
                                            <br />
                                            <br />
                                            <div className="row align-items-end">
                                                <h5 className="card-title accent-title">[Nama Penerima]</h5>
                                                <span className="small-text">[No Telp]</span>g
                                                <span className="">
                                                    [Alamat]
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* END OF CARD ALAMAT */}
                                
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
