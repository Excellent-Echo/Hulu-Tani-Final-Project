import hulutaniClient from "../../../../APIs/hulutaniClient"
import admiShowContactAction from "../show/adminShowContactAction"

const setNama = (nama)=>{
    return {
        type:"CONTACT_ADD_NAMA_LENGKAP",
        payload: nama
    }
}

const setTelepon = (telepon)=>{
    return {
        type:"CONTACT_ADD_NO_TELEPON",
        payload: telepon
    }
}

const setEmail = (email)=>{
    return {
        type:"CONTACT_ADD_EMAIL",
        payload:email
    }
}

const setJenis  = (jenis)=>{
    return {
        type:"CONTACT_ADD_JENIS",
        payload:jenis
    }
}

const setPesan = (pesan)=>{
    return {
        type:"CONTACT_ADD_PESAN",
        payload:pesan
    }
}


const addContact = (nama,telepon,email,jenis,pesan) => async dispatch =>{
    try {
        const data = {
            alamat: pesan,
            jenis_kelamin: email,
            nama: nama,
            nomor_handphone: telepon,
            tanggal_lahir: jenis
        }

        const add = await hulutaniClient({
            method:"POST",
            url:"/kontak",
            data:data
        })
        //console.log(add)
        window.alert("Berhasil mengirim pesan")
        dispatch(resetForm())
        dispatch(admiShowContactAction.getContacts())
    } catch (error) {
        console.log(error)
    }
}

const resetForm = ()=>{
    return {
        type:"CONTACT_RESET_FORM",
    }
}

const adminAddContactAction ={
    addContact,
    setNama,
    setTelepon,
    setEmail,
    setJenis,
    setPesan
}

export default adminAddContactAction;