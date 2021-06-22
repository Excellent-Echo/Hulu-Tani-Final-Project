import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import { useSelector,useDispatch } from "react-redux";
import adminShowCategoryAction from "../../../redux/admin/category/show/adminShowCategoryAction";
import {storage} from "../../../firebase/firebase";

import HeaderAdmin from "../../../components/organisms/admin/HeaderAdmin/HeaderAdmin";
import SideAdminNavBar from "../../../components/organisms/admin/SideNavBar/SideAdminNavBar";

const AdminAddProductDashPage = () => {
  const adminShowCategory = useSelector(state => state.adminShowCategory.categories)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(adminShowCategoryAction.getCategories())
    }, [])


    //image Upload to Clound
    const allInputs = {imgUrl: ''}
    const [imageAsFile, setImageAsFile] = useState('')
    const [imageAsUrl, setImageAsUrl] = useState(allInputs)

    console.log(imageAsFile)

    const handleImageAsFile = (e) => {
      const image = e.target.files[0]
      setImageAsFile(imageFile => (image))
    }

    const handleFireBaseUpload = e => {
        e.preventDefault()

        console.log('start of upload')
        //Upload Picture 
        if(imageAsFile === '') {
          console.error(`not an image, the image file is a ${typeof(imageAsFile)}`)
        }
        const uploadTask = storage.ref(`/images/${imageAsFile.name}`).put(imageAsFile)
        //initiates the firebase side uploading 
        uploadTask.on('state_changed', 
        (snapShot) => {
          //takes a snap shot of the process as it is happening
          console.log(snapShot)
        }, (err) => {
          //catches the errors
          console.log(err)
        }, () => {
          // gets the functions from storage refences the image storage in firebase by the children
          // gets the download url then sets the image from firebase as the value for the imgUrl key:
          storage.ref('images').child(imageAsFile.name).getDownloadURL()
           .then(fireBaseUrl => {
             //dispatch()
             setImageAsUrl(prevObject => ({...prevObject, imgUrl: fireBaseUrl}))
           })
        })


    }


  return (
    <div className="user-select-none">
      <HeaderAdmin />
      <SideAdminNavBar />

        <div className="h-100 w-100 px-4">
          <div className="h-75 ahdp_recent">
            <h3 className="h-25 d-flex align-items-center">Produk &gt; Tambah</h3>

            <form className="bg-white p-3 rounded-3">
              {/* product name */}
              <div className="mb-3 row">
                <label
                  htmlFor="inputProductName"
                  className="col-sm-2 col-form-label"
                >
                  Nama
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control"
                    id="inputProductName"
                    placeholder="Enter product name"
                  />
                </div>
              </div>
              {/* product name */}

              {/* product category */}
              <div className="mb-3 row">
                <label
                  htmlFor="inputProductCategory"
                  className="col-sm-2 col-form-label"
                >
                  Kategori
                </label>
                <div className="col-sm-10">
                  <select 
                  id="inputProductCategory" 
                  className="form-select"
                  onChange={e=> dispatch()}
                  >
                      <option value="0">Select product category</option>
                  {adminShowCategory.map((data,index) =>{
                    return(
                       <option value={data.id}>{data.nama}</option>
                    )
                  })}
                  </select>
                  
                </div>
              </div>
            {/* product category */}

            {/* product description */}
            <div className="mb-3 row">
              <label
                htmlFor="inputProductDescription"
                className="col-sm-2 col-form-label"
              >
                Description
              </label>
              <div className="col-sm-10">
                <textarea
                  className="form-control"
                  id="inputProductDescription"
                  rows="3"
                  placeholder="Enter product description"
                />
              </div>
            </div>
            {/* product description */}

            {/* amount product */}
            <div className="mb-3 d-flex">
              <label
                htmlFor="inputAmountProduct"
                className="col-sm-2 col-form-label"
              >
                Jumlah
              </label>
              <div className="input-group mb-3">
                <input
                  id="inputAmountProduct"
                  type="text"
                  className="form-control"
                  placeholder="Enter amount product"
                />
                <span className="input-group-text" id="inputAmountProduct">
                  PCS
                </span>
              </div>
            </div>
            {/* amount product */}

            {/* product price */}
            <div className="mb-3 d-flex">
              <label
                htmlFor="inputProductPrice"
                className="col-sm-2 col-form-label"
              >
                Harga
              </label>
              <div className="input-group mb-3">
                <span className="input-group-text" id="inputProductPrice">
                  IDR
                </span>
                <input
                  id="inputProductPrice"
                  type="text"
                  className="form-control"
                  placeholder="Enter product price"
                />
              </div>
            </div>
            {/* product price */}

            {/* product image */}
            <div className="mb-3 d-flex">
              <label
                htmlFor="inputPassword"
                className="col-sm-2 col-form-label"
              >
                Gambar
              </label>
              <div className="input-group mb-3">
                <input
                  type="file"
                  className="form-control"
                  id="inputGroupFile01"
                  onChange={handleImageAsFile}
                />
              </div>
            </div>
            {/* product image */}
            
            <Link to="/admin/dash/product">
              <button type="button" className="btn btn-outline-danger">
                Batal
              </button>
            </Link>
            <button type="button" className="btn btn-primary">
              Simpan
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminAddProductDashPage;