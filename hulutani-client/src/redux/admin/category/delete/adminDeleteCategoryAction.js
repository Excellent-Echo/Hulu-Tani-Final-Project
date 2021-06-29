import hulutaniClient from "../../../../APIs/hulutaniClient";
import { ADMIN_DELETE_CATEGORY_SET_ID_CATEGORY } from "../../actionType";
import adminShowCategoryAction from "../show/adminShowCategoryAction";

const deleteCategory = (id) => async dispatch => {
    try {
        console.log("Deleting Category...")
        const token = localStorage.getItem("adminToken");
        const deletedCategory = await hulutaniClient({
            method : "DELETE",
            url: `/kategori/${id}`,
            headers: { Authorization: token },
        })

        dispatch(adminShowCategoryAction.getCategories())
        console.log("Success Delete Category")
    } catch (error) {
        console.log(error)
    }
}

const setIdCategory = id => {
    return {
        type: ADMIN_DELETE_CATEGORY_SET_ID_CATEGORY,
        payload: {
            categoryId: id
        }
    }
}

const adminDeleteCategoryAction = {
    deleteCategory,
    setIdCategory
}

export default adminDeleteCategoryAction;