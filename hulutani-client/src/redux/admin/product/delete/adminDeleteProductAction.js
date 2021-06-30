import hulutaniClient from "../../../../APIs/hulutaniClient";
import { ADMIN_UPDATE_CATEGORY_SET_ID_CATEGORY } from "../../actionType";
import adminShowProductAction from "../show/adminShowProductAction";

const deleteProduct = (id) => async dispatch => {
    try {
        console.log("Deleting Product...")
        const token = localStorage.getItem("adminToken");
        const deletedProduct = await hulutaniClient({
            method : "DELETE",
            url: `/produk/${id}`,
            headers: { Authorization: token },
        })
        dispatch(adminShowProductAction.getProducts())
        console.log("Success Delete Product")
    } catch (error) {
        console.log(error)
    }
}

const setIdProduct = id => {
    return {
        type: ADMIN_UPDATE_CATEGORY_SET_ID_CATEGORY,
        payload: {
            categoryId: id
        }
    }
}

const adminDeleteProductAction = {
    deleteProduct,
    setIdProduct
}

export default adminDeleteProductAction;