const initState = { 
  transactionDetails: {},
  nama:"",
  telepon: "",
  kode:"",
  metode:"",
  alamat:"",
  status:"",
  produk:"",
  qty:0,
  harga:0,
  hargaProduk:0,
  bukti:"",
};

const adminShowTransactionDetail = (state = initState, action) => {
  switch (action.type) {
    case "ADMIN_SHOW_SET_TRANSACTION_DETAIL":
      return {
        ...state,
        transactionDetails: action.payload,
      };
    case "ADMIN_TRANSAKSI_SET_HARGA":
      return {
            ...state,
            harga: action.payload
      }
    case "ADMIN_TRANSAKSI_SET_HARGA_PRODUK":
      return {
            ...state,
            hargaProduk: action.payload
      }
    case "ADMIN_TRANSAKSI_SET_TELEPON":
        return {
            ...state,
            telepon: action.payload
        }
    case "ADMIN_TRANSAKSI_SET_KODE":
        return {
            ...state,
            kode: action.payload
        }
    case "ADMIN_TRANSAKSI_SET_METODE":
        return {
            ...state,
            metode: action.payload
        }
    case "ADMIN_TRANSAKSI_SET_QUANTITY":
        return {
            ...state,
            qty: action.payload
        }
    case "ADMIN_TRANSAKSI_SET_STATUS":
        return {
            ...state,
            status: action.payload
        }
    case "ADMIN_TRANSAKSI_SET_NAMA":
        return {
            ...state,
            nama: action.payload
        }
    case "ADMIN_TRANSAKSI_SET_PRODUK":
        return {
            ...state,
            produk: action.payload
        }
    case "ADMIN_TRANSAKSI_SET_ALAMAT":
        return {
            ...state,
            alamat: action.payload
        }
    case "ADMIN_TRANSAKSI_SET_BUKTI":
        return {
            ...state,
            bukti: action.payload
        }
    default:
      return state;
  }
};

export default adminShowTransactionDetail;