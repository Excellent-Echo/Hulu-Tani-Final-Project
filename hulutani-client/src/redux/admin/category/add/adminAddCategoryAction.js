import hulutaniClient from "../../../../APIs/hulutaniClient";
import { ADMIN_ADD_CATEGORY_RESET_FORM, ADMIN_ADD_CATEGORY_SET_CATEGORY, ADMIN_ADD_CATEGORY_SET_ERROR_MESSAGE, ADMIN_ADD_CATEGORY_SET_SUCCESS_MESSAGE, ADMIN_ADD_CATEGORY_START_LOADING, ADMIN_ADD_CATEGORY_STOP_LOADING } from "../../actionType"
import adminShowCategoryAction from "../show/adminShowCategoryAction";

const setCategory = categoryName => {
    return {
        type : ADMIN_ADD_CATEGORY_SET_CATEGORY,
        payload : {
            categoryName: categoryName
        }
    }
}

const setErrorMessage = errorMessage => {
    return {
        type: ADMIN_ADD_CATEGORY_SET_ERROR_MESSAGE,
        payload: {
            errorMessage: errorMessage,
        },
    };
};

const setSuccessMessage = successMessage => {
    return {
        type: ADMIN_ADD_CATEGORY_SET_SUCCESS_MESSAGE,
        payload: {
            successMessage: successMessage,
        },
    };
};

const startLoading = () => {
    return {
        type: ADMIN_ADD_CATEGORY_START_LOADING,
    };
};

const stopLoading = () => {
    return {
        type: ADMIN_ADD_CATEGORY_STOP_LOADING,
    };
};

const resetForm = () => {
    return {
        type: ADMIN_ADD_CATEGORY_RESET_FORM
    };
};

const addCategory = (categoryName) => async dispatch => {
    try {
        console.log("add category...");
        dispatch(startLoading());
        dispatch(setSuccessMessage(""));
        dispatch(setErrorMessage(""));

        const submitData = {
            nama:categoryName
        }

        const addCategory = await hulutaniClient({
                method: "POST",
                url: "/kategori",
                data:submitData
        });

        dispatch(setSuccessMessage("add category success"));
        dispatch(adminShowCategoryAction.getCategories())
        dispatch(stopLoading());
        console.log("add category success")

    } catch (error) {
        console.error(error.response);
        dispatch(setErrorMessage(error.response));
        dispatch(stopLoading())
    }
}

const adminAddCategoryAction = {
    setCategory,
    resetForm,
    addCategory
}

export default adminAddCategoryAction;