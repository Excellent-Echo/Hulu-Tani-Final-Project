import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import adminEditProductAction from "../../../../redux/admin/product/edit/adminEditProductAction";
import adminShowCategoryAction from "../../../../redux/admin/category/show/adminShowCategoryAction";
import Swal from "sweetalert2";
import { storage } from "../../../../firebase/firebase";

const EditProductForm = () => {
  const adminEditProducts = useSelector((state) => state.adminEditProducts);
  const adminShowCategory = useSelector(
    (state) => state.adminShowCategory.categories
  );
  const dispatch = useDispatch();
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    dispatch(adminEditProductAction.getProduct(id));
    dispatch(adminShowCategoryAction.getCategories());
  }, []);

  const updateProductHandler = (e) => {
    e.preventDefault();
    dispatch(
      adminEditProductAction.updateProduct(
        id,
        adminEditProducts.name,
        adminEditProducts.description,
        String(adminEditProducts.price),
        adminEditProducts.promo,
        String(adminEditProducts.stock),
        adminEditProducts.measure,
        imageAsUrl.imgUrl,
        String(categoryId)
      )
    );
    handleSaveForm()
    history.push("/admin/dash/product")
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
      title: "Berhasil memperbaharui produk ",
    });
  };

  //image Upload to Clound
  const allInputs = { imgUrl: "" },
    [imageAsFile, setImageAsFile] = useState(""),
    [imageAsUrl, setImageAsUrl] = useState(allInputs),
    [categoryId, setCategoryId] = useState(0);

  //console.log(imageAsFile);

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

  return (
    <form
      className="border-3 border p-4 admin-form"
      onSubmit={updateProductHandler}
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
            value={adminEditProducts.name}
            onChange={(e) =>
              dispatch(adminEditProductAction.setName(e.target.value))
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
            id="inputProductCategory"
            onChange={(e) =>
              dispatch(adminEditProductAction.setCategoryId(e.target.value))
            }
          >
            <option selected>Pilih kategori produk</option>
            {adminShowCategory.map((data, index) => {
              return (
                <option value={data.id}>
                  {data.nama}
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
            value={adminEditProducts.description}
            onChange={(e) =>
              dispatch(adminEditProductAction.setDesctription(e.target.value))
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
              value={adminEditProducts.stock}
              onChange={(e) =>
                dispatch(adminEditProductAction.setStock(e.target.value))
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
              value={adminEditProducts.price}
              onChange={(e) =>
                dispatch(adminEditProductAction.setPrice(e.target.value))
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
        >
          Simpan
        </button>
      </div>
    </form>
  );
};

export default EditProductForm;