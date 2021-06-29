const initState = { transactionDetails: {} };

const adminShowTransactionDetail = (state = initState, action) => {
  switch (action.type) {
    case "ADMIN_SHOW_SET_TRANSACTION_DETAIL":
      return {
        ...state,
        transactionDetails: action.payload,
      };
    default:
      return state;
  }
};

export default adminShowTransactionDetail;