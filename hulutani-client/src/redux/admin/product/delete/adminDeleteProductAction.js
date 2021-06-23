import hulutaniClient from "../../../../APIs/hulutaniClient";
import { ADMIN_UPDATE_CATEGORY_SET_ID_CATEGORY } from "../../actionType";

const deleteProduct = (id) => async dispatch => {
    try {
        console.log("Deleting Product...")

        const deletedCategory = await hulutaniClient({
            method : "DELETE",
            url: `/produk/${id}`
        })

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