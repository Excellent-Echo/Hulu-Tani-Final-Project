import hulutaniClient from "../../../../APIs/hulutaniClient";

const getTransactions = () => async (dispatch) => {
  try {
    console.log("showing transaction..");

    const token = localStorage.getItem("adminToken");

    const res = await hulutaniClient({
      method: "GET",
      url: "/transaksi/all",
      headers: { Authorization: token },
    });

    //console.log(res)

    dispatch({
      type: "ADMIN_SHOW_SET_TRANSACTIONS",
      payload: res.data.data,
    });

    for(let x=0; x<10;x++){
      dispatch({
        type: "ADMIN_SHOW_RECENT",
        payload: res.data.data[x]
      })
   } 
    //console.log(res.data.data.length)
    dispatch(setAmount(res.data.data.length))

    console.log("completed");
  } catch (error) {
    console.log(error);
  }
};

const setAmount=(amount)=>{
  return {
    type:"ADMIN_SHOW_SET_AMOUNT",
    payload:amount
  }
}

const adminShowTransactionAction = {
  getTransactions,
};

export default adminShowTransactionAction;