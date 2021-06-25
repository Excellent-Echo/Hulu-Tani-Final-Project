import hulutaniClient from "../../../APIs/hulutaniClient"

const setIdProduct = idProduct =>{
    return {
        type:"ADD_CART_SET_IDPRODUCT",
        payload :{
            idProduct: idProduct
        }
    }
}

const setQuantity = quantity =>{
    return {
        type:"ADD_CART_SET_QUANTITY",
        payload :{
            quantity: quantity
        }
    }
}

const addCart = (idProduct, quantity) => async dispatch =>{
    try {
        console.log("Add Cart")

        const data = {
            id_produk:idProduct,
            quantity: quantity
        }
        //console.log(data)

        const post = await hulutaniClient({
            method:"POST",
            url:"/keranjang",
            headers:{
                Authorization: localStorage.getItem("accessToken"),
              },
            data:data
        })

        // dispatch({
        //     type: "ADD_CART_SET_CART_CODE",
        //     payload: post.data.data.
        // })

        console.log("success")
        window.alert("succes add product")
    } catch (error) {
        console.log(error)
    }
}

const addCartAction = {
    setIdProduct,
    setQuantity,
    addCart
}

export default addCartAction