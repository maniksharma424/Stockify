import { configureStore } from "@reduxjs/toolkit";
import bookmarkSlice from "./slices/boookmarksSlice";
const store = configureStore({
    reducer:{
        bookmarks:bookmarkSlice
    }
})
export default store