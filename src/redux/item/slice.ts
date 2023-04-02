import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Item, ItemSliceState } from "./types";
import { fetchItems } from "./asyncActions";

const initialState: ItemSliceState = {
  items: [],
};

const itemSlice = createSlice({
  name: "item",
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Item[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchItems.fulfilled, (state, action) => {
      state.items = action.payload;
    });
  },
});

export const { setItems } = itemSlice.actions;

export default itemSlice.reducer;
