import hulutaniClient from '../../../../APIs/hulutaniClient'
import { ADMIN_SHOW_SET_PRODUCTS } from '../../actionType'

const getProducts = () => async dispatch => {
    try {
        console.log("showing product..")

        const res = await hulutaniClient({
            method: "GET",
            url: "/produk"
        })

        console.log(res)

        dispatch({
            type: ADMIN_SHOW_SET_PRODUCTS,
            payload: res.data.data
        })

        console.log("completed")
    } catch (error) {
        console.log(error)
    }
}

const adminShowProductAction = {
    getProducts
}

export default adminShowProductAction