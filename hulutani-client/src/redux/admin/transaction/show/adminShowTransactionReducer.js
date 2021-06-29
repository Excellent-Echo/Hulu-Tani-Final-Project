const initialState = {
  transactions: [],
  recents:[],
  amount:0
};

const adminShowTransactionsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADMIN_SHOW_SET_TRANSACTIONS":
      return {
        ...state,
        transactions: action.payload,
      };
    case "ADMIN_SHOW_SET_AMOUNT":
      return {
        ...state,
        amount: action.payload,
      };
    case "ADMIN_SHOW_RECENT":
      return {
        ...state,
        recents: [...state.recents,action.payload]
      }
    default:
      return state;
  }
};

export default adminShowTransactionsReducer;