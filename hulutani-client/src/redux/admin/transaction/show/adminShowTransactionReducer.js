const initialState = {
  transactions: [],
};

const adminShowTransactionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADMIN_SHOW_SET_TRANSACTIONS":
      return {
        ...state,
        transactions: action.payload,
      };
    default:
      return state;
  }
};

export default adminShowTransactionsReducer;