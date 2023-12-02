import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 1,
};

export const cartitemSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increase: (state) => {
      state.value += 1;
    },
    decrease: (state) => {
      state.value -= 1;
    },
  },
 });

export const { increase, decrease } = cartitemSlice.actions;

export default cartitemSlice.reducer;
