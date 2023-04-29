import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const { itemOrder, name } = action.payload;
      state.push({ ...itemOrder, name });
    },
    emptyCart: (state, action) => {
      return [];
    },
    incrementItem: (state, action) => {
      const index = action.payload.index;
      state[index]["quantities"] += 1;
    },
    decrementItem: (state, action) => {
      const index = action.payload.index;
      if (state[index]["quantities"] === 1) {
        state.splice(index, 1);
      } else {
        state[index]["quantities"] -= 1;
      }
    },
  },
});

export const { addItem, emptyCart, incrementItem, decrementItem } =
  cartSlice.actions;

export default cartSlice.reducer;
