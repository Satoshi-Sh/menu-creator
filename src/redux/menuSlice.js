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
    deleteCat: (state, action) => {
      const index = action.payload.index;
      state.menu.splice(index, 1);
    },
    updateCat: (state, action) => {
      const { index, category, description } = action.payload;
      state.menu[index].category = category;
      state.menu[index].description = description;
    },
    addNewIt: (state, action) => {
      const newItem = { name: "New Item", description: "", price: 0 };
      const index = action.payload.index;
      state.menu[index].items.push(newItem);
    },
    switchIt: (state, action) => {
      const { index1, index2, index } = action.payload;
      const [dragged, over] = [
        state.menu[index].items[index1],
        state.menu[index].items[index2],
      ];
      state.menu[index].items[index1] = over;
      state.menu[index].items[index2] = dragged;
    },
  },
});

export const {
  startOver,
  addNewCat,
  switchCat,
  addNewIt,
  switchIt,
  deleteCat,
  updateCat,
} = menuSlice.actions;

export default menuSlice.reducer;
