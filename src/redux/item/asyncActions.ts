import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { SearchItemParams, Item } from "./types";

export const fetchItems = createAsyncThunk<Item[], SearchItemParams>(
    "item/fetchItemsStatus",
    async (params) => {
      const { sortBy, order, currentPage, categoryId } = params;
      const { data } = await axios.get<Item[]>(
        `https:641f4719ad55ae01ccb9e4bd.mockapi.io/items?page=${currentPage}&limit=6&category=${categoryId}&sortBy=${sortBy}&order=${order}`
      );
      return data;
    }
  );
