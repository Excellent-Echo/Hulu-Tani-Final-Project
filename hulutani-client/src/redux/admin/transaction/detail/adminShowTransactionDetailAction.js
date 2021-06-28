import hulutaniClient from "../../../../APIs/hulutaniClient";

const getTransactionDetail = (transaction_code) => async (dispatch) => {
  try {
    console.log("showing transaction detail...");

    const token = localStorage.getItem("adminToken"),
      res = await hulutaniClient({
        method: "GET",
        url: `/transaksi/${transaction_code}`,
        headers: { Authorization: token },
      });

    dispatch({
      type: "ADMIN_SHOW_SET_TRANSACTION_DETAIL",
      payload: res.data.data,
    });

    console.log(transaction_code);
    console.log(res.data.data);
    console.log("completed");
  } catch (error) {
    console.log(error);
  }
};

const adminShowTransactionDetailAction = {
  getTransactionDetail,
};

export default adminShowTransactionDetailAction;