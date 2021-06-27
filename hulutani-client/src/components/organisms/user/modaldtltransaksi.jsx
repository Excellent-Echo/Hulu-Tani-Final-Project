import React from 'react'

const ModalDtlTransaksi = () => {
    return (
        <>
            <div class="modal fade" id="modalDtlTransaksi" tabindex="-1" aria-labelledby="modalDtlTransaksiLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title title accent-text">
                                Transaksi - <span className="accent-title text-muted">
                                    [Kode]
                                </span>
                            </h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-sm">
                                        <div className="row">
                                            <div className="col-sm">
                                                <h5 className="accent-title">
                                                    Detail
                                                </h5>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="row mb-2">
                                            <div className="col-sm-6">
                                                <h6 className="accent-title">
                                                    Kode Transaksi :&nbsp;
                                                </h6>
                                            </div>
                                            <div className="col-sm text-end">
                                                <span className="">
                                                    [Kode]
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row mb-2">
                                            <div className="col-sm-6">
                                                <h6 className="accent-title">
                                                    Status :&nbsp;
                                                </h6>
                                            </div>
                                            <div className="col-sm text-end">
                                                <div className="">
                                                    <span class="status-badge b-danger">Dibatalkan</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row mb-2">
                                            <div className="col-sm-6">
                                                <h6 className="accent-title">
                                                    Tanggal :&nbsp;
                                                </h6>
                                            </div>
                                            <div className="col-sm text-end">
                                                <span className="">
                                                    [Tanggal]
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <h6 className="accent-title">
                                                    Detail Penerima :&nbsp;
                                                </h6>
                                            </div>
                                            <div className="col-sm-6 text-end">
                                                <span className="">
                                                    [Nama Penerima]
                                                </span>
                                            </div>
                                            <div className="col-sm text-end">
                                                <span className="">
                                                    [No-Telp]&nbsp;-&nbsp;
                                                </span>
                                                <span className="">
                                                    [Alamat]
                                                </span>
                                            </div>
                                        </div>
                                        <hr />
                                    </div>
                                    <div className="col-sm">
                                        <div className="row">
                                            <div className="col-sm">
                                                <h5 className="accent-title">
                                                    Produk
                                                </h5>
                                            </div>
                                        </div>
                                        <hr />

                                        {/* PRODUK */}
                                        <div className="row align-content-center">
                                            <div className="col-sm">
                                                [Nama Produk]
                                            </div>
                                            <div className="col-sm-1">
                                                <div className="row justify-content-end">
                                                    <small className="text-end">
                                                        x120
                                                    </small>
                                                </div>
                                            </div>
                                            <div className="col-sm-4">
                                                <div className="row justify-content-end">
                                                    <small className="text-end">
                                                        Rp. 111.000
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                        {/* END OF PRODUK */}

                                        <hr />
                                        <div className="row align-items-center">
                                            <div className="col-sm">
                                                SUBTOTAL
                                            </div>
                                            <div className="col-sm">
                                                <div className="row justify-content-end">
                                                    <span className="accent-title text-end">
                                                        Rp. 0
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-sm">
                                                <span>
                                                    BIAYA PENGIRIMAN
                                                </span>
                                            </div>
                                            <div className="col-sm d-flex justify-content-end">
                                                <span className="accent-title text-end">
                                                    Rp. 12.000
                                                </span>
                                            </div>
                                        </div>
                                        <div className="row align-items-center">
                                            <div className="col-sm">
                                                <span>
                                                    TOTAL
                                                </span>
                                            </div>
                                            <div className="col-sm d-flex justify-content-end">
                                                <span className="accent-title text-end">
                                                    Rp. 0
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="b-danger small" data-bs-dismiss="modal">Tutup</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalDtlTransaksi
