import { ADMIN_SHOW_CATEGORY_SET_ERROR_MESSAGE, ADMIN_SHOW_CATEGORY_START_LOADING, ADMIN_SHOW_CATEGORY_STOP_LOADING, ADMIN_SHOW_SET_CATEGORIES } from "../../actionType";
import hulutaniClient from "../../../../APIs/hulutaniClient"

const setErrorMessage = errorMessage => {
    return {
        type: ADMIN_SHOW_CATEGORY_SET_ERROR_MESSAGE,
        payload: {
            errorMessage: errorMessage,
        },
    };
};

const startLoading = () => {
    return {
        type: ADMIN_SHOW_CATEGORY_START_LOADING,
    };
};

const stopLoading = () => {
    return {
        type: ADMIN_SHOW_CATEGORY_STOP_LOADING,
    };
};

const setCategories = categories =>{
    return {
        type: ADMIN_SHOW_SET_CATEGORIES,
        payload: categories
    }
}

const getCategories = () => async dispatch =>{
    try {
        dispatch(startLoading())
        dispatch(setErrorMessage(""))

        const res = await hulutaniClient({
            method: "GET",
            url:"/kategori"
        })

        dispatch(setCategories(res.data.data))

    } catch (error) {
        console.log(error);
        dispatch(setErrorMessage(error.response));
        dispatch(stopLoading())
    }
}

const adminShowCategoryAction = {
    getCategories
}

export default adminShowCategoryAction;