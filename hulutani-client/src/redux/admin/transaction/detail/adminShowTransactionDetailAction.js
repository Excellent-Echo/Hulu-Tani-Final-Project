import hulutaniClient from "../../../../APIs/hulutaniClient";
import adminShowTransactionAction from "../show/adminShowTransactionAction";

const getTransactionDetail = (transaction_code) => async (dispatch) => {
  try {
    console.log("showing transaction detail...");

    const token = localStorage.getItem("adminToken"),
      res = await hulutaniClient({
        method: "GET",
        url: `/transaksi/${transaction_code}`,
        headers: { Authorization: token },
      });
    
    dispatch(setNama(res.data.data.alamat.nama_penerima))
    dispatch(setTelepon(res.data.data.alamat.nomor_handphone_penerima))
    dispatch(setKodeTransaksi(res.data.data.kode_transaksi))
    dispatch(setMetodePembayaran(res.data.data.metode_pembayaran))
    dispatch(setAlamat(res.data.data.alamat.alamat_detail))
    dispatch(setStatus(res.data.data.status))
    dispatch(setNamaProduk(res.data.data.Produk[0].nama))
    dispatch(setQty(res.data.data.quantity))
    dispatch(setHarga(res.data.data.harga))
    dispatch(setHargaProduk(res.data.data.Produk[0].harga))
    dispatch(setBukti(res.data.data.bukti_transfer))

    // dispatch({
    //   type: "ADMIN_SHOW_SET_TRANSACTION_DETAIL",
    //   payload: res.data.data,
    // });

    // console.log(transaction_code);
    // console.log(res.data.data);
    console.log("completed");
  } catch (error) {
    console.log(error);
  }
};

const setHarga = (harga) => {
  return {
      type: "ADMIN_TRANSAKSI_SET_HARGA",
      payload: harga
  };
};
const setHargaProduk = (harga) => {
  return {
      type: "ADMIN_TRANSAKSI_SET_HARGA_PRODUK",
      payload: harga
  };
};

const setTelepon = (telepon) =>{
  return {
      type: "ADMIN_TRANSAKSI_SET_TELEPON",
      payload: telepon
  };
}

const setKodeTransaksi = (kode) =>{
  return {
      type: "ADMIN_TRANSAKSI_SET_KODE",
      payload: kode
  };
}

const setMetodePembayaran = (metode) =>{
  return {
      type: "ADMIN_TRANSAKSI_SET_METODE",
      payload: metode
  };
}

const setQty = (qty) =>{
  return {
      type: "ADMIN_TRANSAKSI_SET_QUANTITY",
      payload: qty
  };
}

const setStatus = (status) =>{
  return {
      type: "ADMIN_TRANSAKSI_SET_STATUS",
      payload: status
  };
}

const setNama = (nama) =>{
  return {
      type: "ADMIN_TRANSAKSI_SET_NAMA",
      payload: nama
  };
}

const setNamaProduk = (produk) =>{
  return {
      type: "ADMIN_TRANSAKSI_SET_PRODUK",
      payload: produk
  };
}

const setAlamat = (alamat) =>{
  return {
      type: "ADMIN_TRANSAKSI_SET_ALAMAT",
      payload: alamat
  };
}

const setBukti = (bukti) =>{
  return {
      type: "ADMIN_TRANSAKSI_SET_BUKTI",
      payload: bukti
  };
}

const konfirmStatus = (kode) => async dispatch =>{
  try {
    console.log("Mengkonfirmasi")
    const token = localStorage.getItem("adminToken")

    const data = {
      status:"Di Proses"
    }
    
    const res = await hulutaniClient({
      method:"PUT",
      url:`/transaksi/${kode}`,
      data:data,
      headers:{ Authorization: token },
    })
    dispatch(adminShowTransactionAction.getTransactions())
    //console.log("Berhasil konfirmasi")
    window.alert("Berhasil Konfirmasi!")
  } catch (error) {
    console.log(error)
  }
}

const cancelStatus = (kode) => async dispatch => {
  try {
    //console.log("Mengkonfirmasi")
    const token = localStorage.getItem("adminToken")

    const data = {
      status:"Di Batalkan"
    }
    
    const res = await hulutaniClient({
      method:"PUT",
      url:`/transaksi/${kode}`,
      data:data,
      headers:{ Authorization: token },
    })
    dispatch(adminShowTransactionAction.getTransactions())
    //console.log("Berhasil konfirmasi")
    window.alert("Berhasil dibatalkan!")
  } catch (error) {
    console.log(error)
  }
}
const adminShowTransactionDetailAction = {
  getTransactionDetail,
  konfirmStatus,
  cancelStatus
};

export default adminShowTransactionDetailAction;