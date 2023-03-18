import { createSlice } from "@reduxjs/toolkit";

const bookmarkSlice = createSlice({
  name: "bookmarkSlice",
  initialState: {
    bookmarks: [],
  },
  reducers: {
    addBookmark: (state, action) => {
      state.bookmarks.push(action.payload);
    },
    deleteBookmark: (state, action) => {
      state.bookmarks = state.bookmarks.filter(
        item => item["01. symbol"] !== action.payload["01. symbol"]
      );

    },
  },
});
export default bookmarkSlice.reducer;
export const { addBookmark, deleteBookmark } = bookmarkSlice.actions;

