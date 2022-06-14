import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: false,
  status: "",
  error: "",
  recentTrans: [],
};

const transactionSlice = createSlice({
  name: "transactionList",
  initialState,
  reducers: {
    recentSpendingPending: (state) => {
      state.isLoading = true;
    },
    recentSpendingSuccess: (state, {payload}) => {
      state.isLoading = false;
      state.recentTrans = payload;
      state.error = "";
    },
    recentSpendingFail: (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    },
  },
});

const { reducer, actions } = transactionSlice;

export const { recentSpendingPending, recentSpendingSuccess, recentSpendingFail } = actions;

export default reducer;

