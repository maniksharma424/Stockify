import { configureStore } from "@reduxjs/toolkit";
import bookmarkSlice from "./slices/boookmarksSlice";
import dashboardSlice from "./slices/dashboardSlice";
import profileSlice from "./slices/profileSlice";
const store = configureStore({
    reducer:{
        bookmarks:bookmarkSlice,
        dashboardSlice:dashboardSlice,
        profileSlice:profileSlice
    }
})
export default store