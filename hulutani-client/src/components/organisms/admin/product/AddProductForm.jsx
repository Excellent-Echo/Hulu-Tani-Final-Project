import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { storage } from "../../../../firebase/firebase";
import adminAddProductAction from "../../../../redux/admin/product/add/adminAddProductAction";
import adminShowCategoryAction from "../../../../redux/admin/category/show/adminShowCategoryAction";

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

  return (
    <form
      className="bg-white p-3 border border-3 admin-add-product-form"
      onSubmit={addProductHandler}
    >
      <div className="mb-3 row">
        <label htmlFor="inputProductName" className="col-sm-2 col-form-label">
          Nama
        </label>
        <div className="col-sm-10">
          <input
            type="text"
            className="form-control"
            id="inputProductName"
            placeholder="Masukan nama produk"
            value={addProductData.name}
            value={addProductData.name}
            onChange={(e) =>
              dispatch(adminAddProductAction.setName(e.target.value))
            }
          />
        </div>
      </div>

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
            // onChange={(e) => dispatch(adminAddProductAction.setCategoryId(e.target.value))}
            onChange={(e) => setCategoryId(e.target.value)}
          >
            <option value="0">Select product category</option>
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

      <div className="mb-3 row">
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
          />
        </div>
      </div>

      <div className="mb-3 d-flex">
        <label htmlFor="inputAmountProduct" className="col-sm-2 col-form-label">
          Jumlah
        </label>
        <div className="input-group mb-3">
          <input
            id="inputAmountProduct"
            type="number"
            className="form-control"
            placeholder="Masukan jumlah produk"
            value={addProductData.stock}
            onChange={(e) =>
              dispatch(adminAddProductAction.setStock(e.target.value))
            }
          />
          <span className="input-group-text" id="inputAmountProduct">
            PCS
          </span>
        </div>
      </div>

      <div className="mb-3 d-flex">
        <label htmlFor="inputProductPrice" className="col-sm-2 col-form-label">
          Harga
        </label>
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputProductPrice">
            IDR
          </span>
          <input
            id="inputProductPrice"
            type="number"
            className="form-control"
            placeholder="Enter product price"
            value={addProductData.price}
            onChange={(e) =>
              dispatch(adminAddProductAction.setPrice(e.target.value))
            }
          />
        </div>
      </div>

      <div className="mb-3 d-flex">
        <label htmlFor="inputProductImage" className="col-sm-2 col-form-label">
          Gambar
        </label>
        <div className="input-group">
          <input
            type="file"
            className="form-control"
            id="inputProductImage"
            aria-describedby="inputGroupFileAddon04"
            aria-label="Upload"
            onChange={handleImageAsFile}
          />
          <button
            className="btn btn-outline-success"
            type="button"
            onClick={handleImageUpload}
          >
            Simpan
          </button>
        </div>
      </div>

      <div className="d-flex justify-content-end">
        <Link to="/admin/dash/product" className="me-1">
          <button type="button" className="btn btn-outline-danger">
            Batal
          </button>
        </Link>

        <button type="button" className="btn btn-primary ms-1">
          Tambah
        </button>
      </div>
    </form>
  );
};

export default AddProductForm;