import hulutaniClient from "../../../../APIs/hulutaniClient";
import {
  ADMIN_UPDATE_CATEGORY_SET_CATEGORY,
  ADMIN_UPDATE_CATEGORY_SET_ERROR_MESSAGE,
  ADMIN_UPDATE_CATEGORY_SET_ID_CATEGORY,
  ADMIN_UPDATE_CATEGORY_SET_SUCCESS_MESSAGE,
  ADMIN_UPDATE_CATEGORY_START_LOADING,
  ADMIN_UPDATE_CATEGORY_STOP_LOADING,
} from "../../actionType";
import adminShowCategoryAction from "../show/adminShowCategoryAction";

const setCategoryID = (categoryID) => {
  return {
    type: ADMIN_UPDATE_CATEGORY_SET_ID_CATEGORY,
    payload: {
      categoryID: categoryID,
    },
  };
};

const setCategory = (categoryName) => {
  return {
    type: ADMIN_UPDATE_CATEGORY_SET_CATEGORY,
    payload: {
      categoryName: categoryName,
    },
  };
};

const setErrorMessage = (errorMessage) => {
  return {
    type: ADMIN_UPDATE_CATEGORY_SET_ERROR_MESSAGE,
    payload: {
      errorMessage: errorMessage,
    },
  };
};

const setSuccessMessage = (successMessage) => {
  return {
    type: ADMIN_UPDATE_CATEGORY_SET_SUCCESS_MESSAGE,
    payload: {
      successMessage: successMessage,
    },
  };
};

const startLoading = () => {
  return {
    type: ADMIN_UPDATE_CATEGORY_START_LOADING,
  };
};

const stopLoading = () => {
  return {
    type: ADMIN_UPDATE_CATEGORY_STOP_LOADING,
  };
};

const getCategory = (id, categoryName) => async (dispatch) => {
  try {
    console.log("updating category..");
    dispatch(startLoading());

    const res = await hulutaniClient({
      method: "GET",
      url: `/kategori/${id}`,
    });

    dispatch(setCategory(res.data.data.nama));
    dispatch(stopLoading());
    console.log("success updating data");
  } catch (error) {
    console.log(error);
  }
};

const editCategory = (id, categoryName) => async (dispatch) => {
  try {
    console.log("updating category..");
    dispatch(startLoading());
    const token = localStorage.getItem("adminToken");
    const updateData = {
      nama: categoryName,
    };

    const update = await hulutaniClient({
      method: "PUT",
      url: `/kategori/${id}`,
      data: updateData,
      headers: { Authorization: token },
    });

    dispatch(adminShowCategoryAction.getCategories());
    dispatch(stopLoading());
    console.log("success updating data");
  } catch (error) {
    console.log(error);
  }
};

const adminEditCategoryAction = {
  setCategory,
  setCategoryID,
  editCategory,
  getCategory,
};

export default adminEditCategoryAction;