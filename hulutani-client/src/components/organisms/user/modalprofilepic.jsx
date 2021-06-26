import React from 'react'

import BlankUser from '../../../assets/images/blank-user.png'

const ModalProfilePic = () => {
    return (
        <>
            <div class="modal fade" id="modalProfilePic" tabindex="-1" aria-labelledby="modalProfilePicLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title title accent-text">Ubah Foto Profil</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="row justify-content-center mb-3">
                                <div className="row user-avatar-container" >
                                    <img src={BlankUser} alt="" className="img-fluid user-avatar" />
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <form action="">
                                    <div className="row align-items-center">
                                        <div className="col-sm-12 mb-2">
                                            <input className="form-control" type="file" id="formFile" />
                                        </div>
                                        <div className="col-sm-12">
                                            <button type="submit" className="primary small long">Upload</button>
                                        </div>
                                    </div>
                                </form>
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

export default ModalProfilePic
