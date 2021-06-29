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
        const token = localStorage.getItem("adminToken");
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
            data: dataProduct,
            headers: { Authorization: token },
        })
        
        console.log("update product success")
    } catch (error) {
        console.log(error)
    }
}

const getProduct = (id) => async dispatch =>{
    try {
        console.log("updating Product..")

        const res = await hulutaniClient({
            method: "GET",
            url: `/produk/${id}`,
        })

        dispatch(setName(res.data.data.nama))
        dispatch(setPrice(res.data.data.harga))
        dispatch(setStock(res.data.data.stok))
        dispatch(setPromo(res.data.data.promo))
        dispatch(setDesctription(res.data.data.deskripsi))
        dispatch(setMeasure(res.data.data.takaran))
        dispatch(setImage(res.data.data.gambar))
        dispatch(setCategoryId(res.data.data.id_kategori))
        
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
    updateProduct,
    getProduct
}

export default adminEditProductAction;