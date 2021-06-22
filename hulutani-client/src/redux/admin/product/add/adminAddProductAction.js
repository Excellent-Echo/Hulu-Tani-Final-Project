import { ADMIN_ADD_PRODUCT_RESET_FORM, ADMIN_ADD_PRODUCT_SET_PRODUCT_CATEGORY_ID, ADMIN_ADD_PRODUCT_SET_PRODUCT_DESCRIPTION, ADMIN_ADD_PRODUCT_SET_PRODUCT_IMAGE, ADMIN_ADD_PRODUCT_SET_PRODUCT_NAME, ADMIN_ADD_PRODUCT_SET_PRODUCT_PRICE, ADMIN_ADD_PRODUCT_SET_PRODUCT_PROMO, ADMIN_ADD_PRODUCT_SET_PRODUCT_STOCK } from "../../actionType"
import hulutaniClient from "../../../../APIs/hulutaniClient"

const setName = name => {
    return {
        type: ADMIN_ADD_PRODUCT_SET_PRODUCT_NAME,
        payload: {
            name: name
        }
    }
}

const setDesctription = description => {
    return {
        type: ADMIN_ADD_PRODUCT_SET_PRODUCT_DESCRIPTION,
        payload: {
            description: description
        }
    }
}

const setPrice = price => {
    return {
        type: ADMIN_ADD_PRODUCT_SET_PRODUCT_PRICE,
        payload: {
            price: price
        }
    }
}

const setPromo = promo => {
    return {
        type: ADMIN_ADD_PRODUCT_SET_PRODUCT_PROMO,
        payload: {
            promo:promo
        }
    }
}

const setStock = stock => {
    return {
        type: ADMIN_ADD_PRODUCT_SET_PRODUCT_STOCK,
        payload: {
            stock: stock
        }
    }
}

const setMeasure = measure => {
    return {
        type : ADMIN_ADD_PRODUCT_SET_PRODUCT_STOCK,
        payload: {
            measure: measure
        }
    }
}

const setImage = image => {
    return {
        type : ADMIN_ADD_PRODUCT_SET_PRODUCT_IMAGE,
        payload: {
            image: image
        }
    }
}

const setCategoryId = categoryId => {
    return {
        type : ADMIN_ADD_PRODUCT_SET_PRODUCT_CATEGORY_ID,
        payload: {
            categoryId: categoryId
        }
    }
}

const resetForm = ()=>{
    return {
        type: ADMIN_ADD_PRODUCT_RESET_FORM
    }
}

const addProduct = (nama,description,price,promo,stock,measure,image,categoryId) => async dispatch =>{
    try {
        console.log("Adding Product..")

        const dataProduct = {
            nama:nama,
            deskripsi:description,
            harga:price,
            promo:promo,
            stok:stock,
            takaran:measure,
            gambar:image,
            id_kategori:categoryId
        }

        //console.log(dataProduct)

        const addData = await hulutaniClient({
            method: "POST",
            url: "/produk",
            data: dataProduct
        })
        
        console.log("add product success")
        dispatch(resetForm())
    } catch (error) {
        console.log(error)
    }
}

const adminAddProductAction = {
    setName,
    setPrice,
    setPromo,
    setDesctription,
    setStock,
    setMeasure,
    setImage,
    setCategoryId,
    addProduct
}

export default adminAddProductAction;