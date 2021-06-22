import hulutaniClient from "../../../../APIs/hulutaniClient"
import { ADMIN_ADD_PRODUCT_RESET_FORM, ADMIN_UPDATE_PRODUCT_SET_PRODUCT_CATEGORY_ID, ADMIN_UPDATE_PRODUCT_SET_PRODUCT_DESCRIPTION, ADMIN_UPDATE_PRODUCT_SET_PRODUCT_IMAGE, ADMIN_UPDATE_PRODUCT_SET_PRODUCT_MEASURE, ADMIN_UPDATE_PRODUCT_SET_PRODUCT_NAME, ADMIN_UPDATE_PRODUCT_SET_PRODUCT_PRICE, ADMIN_UPDATE_PRODUCT_SET_PRODUCT_PROMO, ADMIN_UPDATE_PRODUCT_SET_PRODUCT_STOCK } from "../../actionType"

const setName = name => {
    return {
        type: ADMIN_UPDATE_PRODUCT_SET_PRODUCT_NAME,
        payload: {
            name: name
        }
    }
}

const setDesctription = description => {
    return {
        type: ADMIN_UPDATE_PRODUCT_SET_PRODUCT_DESCRIPTION,
        payload: {
            description: description
        }
    }
}

const setPrice = price => {
    return {
        type: ADMIN_UPDATE_PRODUCT_SET_PRODUCT_PRICE,
        payload: {
            price: price
        }
    }
}

const setPromo = promo => {
    return {
        type: ADMIN_UPDATE_PRODUCT_SET_PRODUCT_PROMO,
        payload: {
            promo:promo
        }
    }
}

const setStock = stock => {
    return {
        type: ADMIN_UPDATE_PRODUCT_SET_PRODUCT_STOCK,
        payload: {
            stock: stock
        }
    }
}

const setMeasure = measure => {
    return {
        type : ADMIN_UPDATE_PRODUCT_SET_PRODUCT_MEASURE,
        payload: {
            measure: measure
        }
    }
}

const setImage = image => {
    return {
        type : ADMIN_UPDATE_PRODUCT_SET_PRODUCT_IMAGE,
        payload: {
            image: image
        }
    }
}

const setCategoryId = categoryId => {
    return {
        type : ADMIN_UPDATE_PRODUCT_SET_PRODUCT_CATEGORY_ID,
        payload: {
            categoryId: categoryId
        }
    }
}

const updateProduct = (id,nama,description,price,promo,stock,measure,image,categoryId) => async dispatch =>{
    try {
        console.log("updating Product..")

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

        const updateData = await hulutaniClient({
            method: "PUT",
            url: `/produk/${id}`,
            data: dataProduct
        })
        
        console.log("update product success")
    } catch (error) {
        console.log(error)
    }
}

const adminEditProductAction = {
    setName,
    setPrice,
    setPromo,
    setDesctription,
    setStock,
    setMeasure,
    setImage,
    setCategoryId,
}

export default adminEditProductAction;