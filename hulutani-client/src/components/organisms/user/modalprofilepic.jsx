import React from 'react'

import BlankUser from '../../../assets/images/blank-user.png'

const ModalProfilePic = () => {
    return (
        <>
            <div className="modal fade" id="modalProfilePic" tabindex="-1" aria-labelledby="modalProfilePicLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title title accent-text">Ubah Foto Profil</h4>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
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
                        <div className="modal-footer">
                            <button type="button" className="b-danger small" data-bs-dismiss="modal">Tutup</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalProfilePic
