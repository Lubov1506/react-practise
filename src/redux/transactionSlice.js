import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  transactions: [],
  balance: 0,
  totalIncome: 0,
  totalExpence: 0,
};

const slice = createSlice({
  name: "transactions",
  initialState,
  selectors: {
    selectTransactions: (state) => state.transactions,
    selectBalance: (state) => state.balance,
    selectIncome: (state) => state.totalIncome,
    selectExpence: (state) => state.totalExpence,
  },
  reducers: {
    addTransactions: (state, { payload }) => {
      state.transactions.push(payload);
    },
    deleteTransaction: (state, { payload }) => {
      state.transactions = state.transactions.filter(
        (item) => item.id !== payload
      );
    },
  },
});

export const transactionsReducer = slice.reducer;
export const { addTransactions, deleteTransaction } = slice.actions;
export const {
  selectTransactions,
  selectBalance,
  selectIncome,
  selectExpence,
} = slice.selectors;
