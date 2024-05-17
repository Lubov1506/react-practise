import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  income: ["salary", "present", "bonus", "freelance"],
  expense: ["house", "products", "family", "entertaiment", "car", "helth"],
};

const slice = createSlice({
  name: "cats",
  initialState,
  selectors: {
    selectIncome: (state) => state.income,
    selectExpense: (state) => state.expence,
  },
  reducers: {
    // addCatsReducer: (state, { payload }) => {
    //   state.cats.push(payload);
    // },
    // deleteCatsReducer: (state, { payload }) => {
    // },
  },
});
export const catsReducer = slice.reducer;
export const { selectIncome, selectExpense } = slice.selectors;
