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
    updateIt: (state, action) => {
      const { index, index2, name, description, price } = action.payload;
      const item = state.menu[index].items[index2];
      item.name = name;
      item.description = description;
      item.price = price;
    },
    deleteIt: (state, action) => {
      const { index, index2 } = action.payload;
      state.menu[index].items.splice(index2, 1);
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
    addNewGr: (state, action) => {
      const newGroup = {
        required: true,
        name: "New Group",
        options: [{ name: "New Option", price: 0 }],
      };
      const { index, index2 } = action.payload;
      const item = state.menu[index].items[index2];
      if ("groups" in item) {
        item.groups.push(newGroup);
      } else {
        item["groups"] = [newGroup];
      }
    },
    switchGr: (state, action) => {
      const { startidx, endidx, index, index2 } = action.payload;
      const groups = state.menu[index].items[index2].groups;
      const [dragged, over] = [groups[startidx], groups[endidx]];
      groups[startidx] = over;
      groups[endidx] = dragged;
    },
    deleteGr: (state, action) => {
      const { index, index2, index3 } = action.payload;
      state.menu[index].items[index2].groups.splice(index3, 1);
    },
    deleteOp: (state, action) => {
      const { index, index2, index3, index4 } = action.payload;
      state.menu[index].items[index2].groups[index3].options.splice(index4, 1);
    },
    addOp: (state, action) => {
      const newOption = { name: "New Option", price: 0 };
      const { index, index2, index3 } = action.payload;
      const options = state.menu[index].items[index2].groups[index3].options;
      options.push(newOption);
    },
    updateOp: (state, action) => {
      const { index, index2, index3, newData } = action.payload;
      const groups = state.menu[index].items[index2].groups;
      groups[index3] = newData;
    },
    switchOp: (state, action) => {
      const { startIdx, endIdx, index, index2, index3 } = action.payload;
      const options = state.menu[index].items[index2].groups[index3].options;
      const [start, end] = [options[startIdx], options[endIdx]];
      options[startIdx] = end;
      options[endIdx] = start;
    },
    saveBlur: (state, action) => {
      const { index, index2, index3, i, n, newValue } = action.payload;
      const option = state.menu[index].items[index2].groups[index3].options[i];
      if (n == "optionName") {
        option["name"] = newValue;
      } else {
        option["price"] = parseFloat(newValue);
      }
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
  addNewGr,
  switchGr,
  updateIt,
  deleteIt,
  deleteOp,
  deleteGr,
  addOp,
  switchOp,
  saveBlur,
  updateOp,
} = menuSlice.actions;

export default menuSlice.reducer;
