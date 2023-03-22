import { configureStore } from "@reduxjs/toolkit";
import bookmarkSlice from "./slices/boookmarksSlice";
import dashboardSlice from "./slices/dashboardSlice";
const store = configureStore({
    reducer:{
        bookmarks:bookmarkSlice,
        dashboardSlice:dashboardSlice
    }
})
export default store