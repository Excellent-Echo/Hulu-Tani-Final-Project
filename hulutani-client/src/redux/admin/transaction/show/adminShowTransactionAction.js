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

    console.log("completed");
  } catch (error) {
    console.log(error);
  }
};

const adminShowTransactionAction = {
  getTransactions,
};

export default adminShowTransactionAction;