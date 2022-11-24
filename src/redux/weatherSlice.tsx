import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  value: any;
  favalues: any;
}

const initialState: CounterState = {
  value: [],
  favalues: JSON.parse(localStorage.getItem("fav") || "[]"),
};

export const weatherSlice = createSlice({
  name: "weatherData",
  initialState,
  reducers: {
    weather: (state, action: PayloadAction<any>) => {
      state.value = action.payload;
    },
    addFavalue: (state, { payload }) => {
      state.favalues.push(payload);
      localStorage.setItem("fav", JSON.stringify(state.favalues));
      window.location.reload();
    },
  },
});

export const { weather, addFavalue } = weatherSlice.actions;

export default weatherSlice;
