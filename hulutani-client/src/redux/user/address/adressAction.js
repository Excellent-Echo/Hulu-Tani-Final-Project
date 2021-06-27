import hulutaniClient from "../../../APIs/hulutaniClient"

const setNama = nama =>{
    return {
        type: "ADDRESS_SET_NAMA",
        payload: {
            nama:nama
        }
    }
}
const setTelepon = telepon =>{
    return {
        type: "ADDRESS_SET_TELEPON",
        payload: {
            telepon:telepon
        }
    }
}
const setAlamatLengkap = alamatLengkap =>{
    return {
        type: "ADDRESS_SET_ALAMAT_LENGKAP",
        payload: {
            alamatLengkap:alamatLengkap
        }
    }
}
const setKota = kota =>{
    return {
        type: "ADDRESS_SET_KOTA",
        payload: {
            kota:kota
        }
    }
}
const setProvinsi = provinsi =>{
    return {
        type: "ADDRESS_SET_PROVINSI",
        payload: {
            provinsi:provinsi
        }
    }
}

const setId = id =>{
    return {
        type: "ADDRESS_SET_ID",
        payload: {
            id:id
        }
    }
}

const setCityId = cityId =>{
    return {
        type: "ADDRESS_SET_CITY_ID",
        payload: {
            cityId:cityId
        }
    }
}

const setDaftarAlamat = ()=> async dispatch =>{
    try {
        const token = localStorage.getItem("accessToken")
        const res = await hulutaniClient({
            method:"GET",
            url:"/alamat",
            headers:{
                Authorization: token
            }
        })

        dispatch({
            type: "ADDRESS_SET_DAFTAR_ALAMAT",
            payload: {
                daftarAlamat: res.data.data
            }
        })
    } catch (error) {
        console.log(error)
    }
}
const setDaftarKota = () => async dispatch=>{
    try {

    const res = await hulutaniClient({
        method:"GET",
        url:"/kota"
    })

    dispatch({
        type: "ADDRESS_SET_DAFTAR_KOTA",
        payload: {
            daftarKota: res.data.data
        }
    })

    } catch(error){
        console.log(error)
    }
}
const setDaftarProvinsi = () => async dispatch=>{
    try {

        const res = await hulutaniClient({
            method:"GET",
            url:"/provinsi",
        })
    
        dispatch({
            type: "ADDRESS_SET_DAFTAR_PROVINSI",
            payload: {
                daftarProvinsi: res.data.data
            }
        })
    
    } catch(error){
        console.log(error)
    }
}

const addAddress = (nama,telepon,alamat,kota,provinsi) => async dispatch =>{
    try {
        console.log("add address")
        const token = localStorage.getItem("accessToken")
        const data = {
            nama_penerima:nama,
            nomor_handphone_penerina:telepon,
            alamat_detail:alamat,
            kota:kota,
            provinsi:provinsi
        }

        const add = await hulutaniClient({
            method:"POST",
            url:"/alamat",
            data:data,
            headers:{
                Authorization: token
            }
        })
        dispatch(setDaftarAlamat())
        console.log("success")
    } catch (error) {
        console.log(error)
    }
}

const updateAddress = (id,nama,telepon,alamat,kota,provinsi)=> async dispatch=>{
    try {
        console.log("add address")
        const token = localStorage.getItem("accessToken")
        const data = {
            nama_penerima:nama,
            nomor_handphone_penerima:telepon,
            alamat_detail:alamat,
            kota:kota,
            provinsi:provinsi
        }

        const update = await hulutaniClient({
            method:"PUT",
            url:`/alamat/${id}`,
            data:data,
            headers:{
                Authorization: token
            }
        })
        dispatch(setDaftarAlamat())
        console.log("success")
    } catch (error) {
        console.log(error)
    }
}

const deleteAddress = (id) => async dispatch =>{
    try {
        console.log("add address")
        const token = localStorage.getItem("accessToken")
        const res = await hulutaniClient({
            method:"DELETE",
            url:`/alamat/${id}`,
            headers:{
                Authorization: token
            }
        })
        dispatch(setDaftarAlamat())
        console.log("success")
    } catch (error) {
        console.log(error)
    }
}

const resetForm = ()=> {
    return {
        type: "ADDRESS_RESET_FORM"
    }
}

const addressAction = {
    setNama,
    setTelepon,
    setAlamatLengkap,
    setKota,
    setProvinsi,
    setDaftarKota,
    setDaftarProvinsi,
    setDaftarAlamat,
    addAddress,
    updateAddress,
    deleteAddress,
    resetForm,
    setId,
    setCityId
}

export default addressAction;