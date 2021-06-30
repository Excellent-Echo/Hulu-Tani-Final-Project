const initialState = {
    harga: 0,
    id_produk: 0,
    kode_transaksi: 0,
    metode_pembayaran: "",
    quantity: 0,
    status: "Menunggu Pembayaran",
    tanggal: "",
    cost:0,
    nama:"",
    alamat:"",
    namaProduk:"",
    bukti:"",
    dataTransaksi:{},
    daftarTransaksi:[]
}

const userTransactionReducer = (state = initialState, action) =>{
    switch(action.type){
        case "USER_TRANSAKSI_SET_HARGA":
            return {
                ...state,
                harga: action.payload
            }
        case "USER_TRANSAKSI_SET_ID_PRODUK":
            return {
                ...state,
                id_produk: action.payload
            }
        case "USER_TRANSAKSI_SET_KODE_TRANSAKSI":
            return {
                ...state,
                kode_transaksi: action.payload
            }
        case "USER_TRANSAKSI_SET_METODE_PEMBAYARAN":
            return {
                ...state,
                metode_pembayaran: action.payload
            }
        case "USER_TRANSAKSI_SET_QUANTITY":
            return {
                ...state,
                quantity: action.payload
            }
        case "USER_TRANSAKSI_SET_STATUS":
            return {
                ...state,
                status: action.payload
            }
        case "USER_TRANSAKSI_SET_TANGGAL":
            return {
                ...state,
                tanggal: action.payload
            }
        case "USER_TRANSAKSI_SET_NAMA":
            return {
                ...state,
                nama: action.payload
            }
        case "USER_TRANSAKSI_SET_NAMA_PRODUK":
            return {
                ...state,
                namaProduk: action.payload
            }
        case "USER_TRANSAKSI_SET_ALAMAT":
            return {
                ...state,
                alamat: action.payload
            }
            case "USER_TRANSAKSI_SET_COST":
                return {
                    ...state,
                    cost: action.payload
                }
            case "USER_TRANSAKSI_SET_BUKTI":
                return {
                    ...state,
                    bukti: action.payload
                }
            case "USER_TRANSAKSI_SET_DATA":
                return {
                    ...state,
                    dataTransaksi: action.payload
                }
            case "USER_TRANSAKSI_SET_DAFTAR":
                return {
                    ...state,
                    daftarTransaksi: action.payload
                }
        default:
            return state
    }   
}

export default userTransactionReducer;