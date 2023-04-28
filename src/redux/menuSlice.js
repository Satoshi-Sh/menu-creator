import { createSlice } from "@reduxjs/toolkit";
import sushiya from "../menus/sushiya.json";
export const menuSlice = createSlice({
  name: "menu",
  initialState: sushiya,
  reducers: {
    startOver: (state, action) => {
      return action.payload.data;
    },
    addNewCat: (state, action) => {
      state.menu.push({
        category: action.payload.category,
        description: "",
        items: [],
      });
    },
    switchCat: (state, action) => {
      const [index1, index2] = action.payload.indexes;
      const [dragged, over] = [state.menu[index1], state.menu[index2]];
      state.menu[index2] = dragged;
      state.menu[index1] = over;
    },
  },
});

export const { startOver, addNewCat, switchCat } = menuSlice.actions;

export default menuSlice.reducer;
