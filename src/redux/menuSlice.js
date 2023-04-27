import { createSlice } from "@reduxjs/toolkit";
import sushiya from "../menus/sushiya.json";
export const menuSlice = createSlice({
  name: "menu",
  initialState: sushiya,
  reducers: {
    startOver: (state, action) => {
      return action.payload.data;
    },
  },
});

export const { startOver } = menuSlice.actions;

export default menuSlice.reducer;
