import supabase from "@/config/supabaseClient";
import { createSlice } from "@reduxjs/toolkit";

const bookmarkSlice = createSlice({
  name: "bookmarkSlice",
  initialState: {
    bookmarks: [],
  },
  reducers: {
    setBookmarks: (state, action) => {
      state.bookmarks = action.payload;
    },
    addBookmarks: (state, action) => {
      state.bookmarks.push(action.payload);
    },
    deleteBookmark: (state, action) => {
      state.bookmarks = state.bookmarks.filter(
        (item) => item["01. symbol"] !== action.payload["01. symbol"]
      );
    },
  sortBookmarks:(state,action)=>{
     state.bookmarks = action.payload
    }
  },
});
export default bookmarkSlice.reducer;
export const { setBookmarks, deleteBookmark, addBookmarks,sortBookmarks} =
  bookmarkSlice.actions;
