import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import adminShowCategoryAction from "../../../../redux/admin/category/show/adminShowCategoryAction";
import adminAddProductAction from "../../../../redux/admin/product/add/adminAddProductAction";
import { storage } from "../../../../firebase/firebase";
import Swal from "sweetalert2";

const AddProductForm = () => {
  const adminShowCategory = useSelector(
      (state) => state.adminShowCategory.categories
    ),
    addProductData = useSelector((state) => state.adminAddProducts),
    dispatch = useDispatch(),
    history = useHistory();

  useEffect(() => {
    dispatch(adminShowCategoryAction.getCategories());
  }, []);

  //image Upload to Clound
  const allInputs = { imgUrl: "" },
    [imageAsFile, setImageAsFile] = useState(""),
    [imageAsUrl, setImageAsUrl] = useState(allInputs),
    [categoryId, setCategoryId] = useState(0);

  console.log(imageAsFile);

  const handleImageAsFile = (e) => {
    const image = e.target.files[0];
    setImageAsFile((imageFile) => image);
  };

  const handleImageUpload = (e) => {
    e.preventDefault();
    console.log("start of upload");
    // async magic goes here...
    if (imageAsFile === "") {
      console.error(`not an image, the image file is a ${typeof imageAsFile}`);
    }
    const uploadTask = storage
      .ref(`/images/${imageAsFile.name}`)
      .put(imageAsFile);
    //initiates the firebase side uploading
    uploadTask.on(
      "state_changed",
      (snapShot) => {
        //takes a snap shot of the process as it is happening
        console.log(snapShot);
      },
      (err) => {
        //catches the errors
        console.log(err);
      },
      () => {
        // gets the functions from storage refences the image storage in firebase by the children
        // gets the download url then sets the image from firebase as the value for the imgUrl key:
        storage
          .ref("images")
          .child(imageAsFile.name)
          .getDownloadURL()
          .then((fireBaseUrl) => {
            setImageAsUrl((prevObject) => ({
              ...prevObject,
              imgUrl: fireBaseUrl,
            }));
            window.alert("simpan gambar berhasil");
          });
      }
    );
  };

  const addProductHandler = (e) => {
    e.preventDefault();
    dispatch(
      adminAddProductAction.addProduct(
        addProductData.name,
        addProductData.description,
        addProductData.price,
        addProductData.promo,
        addProductData.stock,
        addProductData.measure,
        imageAsUrl.imgUrl,
        categoryId
      )
    );
    history.push("/admin/dash/product");
  };

  const handleSaveForm = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener("mouseenter", Swal.stopTimer);
        toast.addEventListener("mouseleave", Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: "success",
      title: "Berhasil simpan produk baru",
    });
  };

  return (
    <form
      className="border-3 border p-2 admin-form"
      onSubmit={addProductHandler}
    >
      <div className="row mb-3">
        <label htmlFor="inputProductName" className="col-sm-2 col-form-label">
          Nama Produk
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="inputProductName"
            placeholder="Masukan nama produk"
            value={addProductData.name}
            onChange={(e) =>
              dispatch(adminAddProductAction.setName(e.target.value))
            }
          />
        </div>
      </div>

      <div className="row mb-3">
        <label
          htmlFor="inputProductCategory"
          className="col-sm-2 col-form-label"
        >
          Kategori
        </label>
        <div className="col-sm-10">
          <select
            className="form-select"
            id="inputProductCategory" // onChange={(e) => dispatch(adminAddProductAction.setCategoryId(e.target.value))}
            onChange={(e) => setCategoryId(e.target.value)}
          >
            <option selected>Pilih kategori produk</option>
            {adminShowCategory.map((data, index) => {
              return (
                <option value={data.id}>
                  {data.nama}
                  {data.id}
                </option>
              );
            })}
          </select>
        </div>
      </div>

      <div className="row mb-3">
        <label
          htmlFor="inputProductDescription"
          className="col-sm-2 col-form-label"
        >
          Deskripsi
        </label>
        <div className="col-sm-10">
          <textarea
            className="form-control"
            id="inputProductDescription"
            rows="3"
            placeholder="Masukan deskripsi produk"
            value={addProductData.description}
            onChange={(e) =>
              dispatch(adminAddProductAction.setDesctription(e.target.value))
            }
          >
            Masukan deskrpsi produk
          </textarea>
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="inputProductAmount" className="col-sm-2 col-form-label">
          Jumlah
        </label>
        <div className="col-sm-10">
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Masukan jumlah produk"
              id="inputProductAmount"
              value={addProductData.stock}
              onChange={(e) =>
                dispatch(adminAddProductAction.setStock(e.target.value))
              }
            />
            <span className="input-group-text" id="inputProductAmount">
              PCS
            </span>
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">
          Harga
        </label>
        <div className="col-sm-10">
          <div className="input-group">
            <span className="input-group-text" id="inputProductPrice">
              IDR
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="Masukan harga produk"
              id="inputProductPrice"
              value={addProductData.price}
              onChange={(e) =>
                dispatch(adminAddProductAction.setPrice(e.target.value))
              }
            />
          </div>
        </div>
      </div>

      <div className="row mb-3">
        <label htmlFor="inputProductImage" className="col-sm-2 col-form-label">
          Gambar
        </label>
        <div className="col-sm-10">
          <div className="input-group">
            <input
              type="file"
              className="form-control"
              id="inputProductImage"
              onChange={handleImageAsFile}
            />
            <button
              className="btn btn-outline-secondary"
              type="button"
              id="inputProductImage"
              onClick={handleImageUpload}
            >
              Simpan
            </button>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-end">
        <Link className="me-2" to="/admin/dash/product">
          <button type="submit" className="btn btn-outline-danger">
            Batal
          </button>
        </Link>
        <button
          type="submit"
          className="btn btn-primary ms-2"
          onClick={handleSaveForm}
        >
          Simpan
        </button>
      </div>
    </form>
  );
};

export default AddProductForm;