import hulutaniClient from "../../../APIs/hulutaniClient"

const setHarga = (harga) => {
    return {
        type: "USER_TRANSAKSI_SET_HARGA",
        payload: harga
    };
};

const setIdProduk = (id) =>{
    return {
        type: "USER_TRANSAKSI_SET_ID_PRODUK",
        payload: id
    };
}

const setKodeTransaksi = (kode) =>{
    return {
        type: "USER_TRANSAKSI_SET_KODE_TRANSAKSI",
        payload: kode
    };
}

const setMetodePembayaran = (metode) =>{
    return {
        type: "USER_TRANSAKSI_SET_METODE_PEMBAYARAN",
        payload: metode
    };
}

const setQty = (qty) =>{
    return {
        type: "USER_TRANSAKSI_SET_QUANTITY",
        payload: qty
    };
}

const setStatus = (status) =>{
    return {
        type: "USER_TRANSAKSI_SET_STATUS",
        payload: status
    };
}

const setNama = (nama) =>{
    return {
        type: "USER_TRANSAKSI_SET_NAMA",
        payload: nama
    };
}

const setNamaProduk = (namaProduk) =>{
    return {
        type: "USER_TRANSAKSI_SET_NAMA_PRODUK",
        payload: namaProduk
    };
}

const setAlamat = (alamat) =>{
    return {
        type: "USER_TRANSAKSI_SET_ALAMAT",
        payload: alamat
    };
}

const setCost = (cost) =>{
    return {
        type: "USER_TRANSAKSI_SET_COST",
        payload: cost
    };
}

const setTanggal = (tanggal) =>{
    return {
        type: "USER_TRANSAKSI_SET_TANGGAL",
        payload: tanggal
    };
}

const Transaction = (harga,idProduk,metode,qty,status,idAlamat)=> async dispatch =>{
    try {
        console.log("make transaction..")
        const token = localStorage.getItem("accessToken")
        const data = {
            harga:harga,
            id_alamat:idAlamat,
            id_produk:idProduk,
            metode_pembayaran:metode,
            quantity:qty,
            status:status
        }

        const res = await hulutaniClient({
            method:"POST",
            url:"/transaksi",
            data: data,
            headers:{
                Authorization: token
            }
        })

        const data2 = {
            id_produk:idProduk,
            id_transaksi:res.data.data.id
        }

        const res2 = await hulutaniClient({
            method:"POST",
            url:"/produk-transaksi",
            data: data2,
            headers:{
                Authorization: token
            }
        })

        console.log("transaction create")
    } catch (error) {
        console.log(error)
    }
}

const getCost = (CityID) => async dispatch =>{
    try {
        
        const res = await hulutaniClient({
            method:"POST",
            url:`/cost/${CityID}`
        })
        console.log(res.data.data.rajaongkir.results[1].cost.value)
        dispatch(setCost(res.data.data.rajaongkir.results[1].cost.value))

    } catch (error) {
        console.log(error)
    }
}

const userTransactionAction = {
    setCost,
    setHarga,
    setIdProduk,
    setKodeTransaksi,
    setMetodePembayaran,
    setNama,
    setQty,
    setStatus,
    setTanggal,
    getCost,
    Transaction,
    setNamaProduk
}

export default userTransactionAction;