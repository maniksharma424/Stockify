import { createSlice } from "@reduxjs/toolkit";

const profileSlice = createSlice({
  name: "profileSlice",
  initialState: {
  },
  reducers: {
    userLogin: (state) => {
      state.profile = JSON.parse(localStorage.getItem("sb-tqjnbdxfwtkvzmnwvpdu-auth-token"));
    },
    userLogout: (state) => {
      state.profile = {};
    },
  },
});
export default profileSlice.reducer;
export const { userLogin, userLogout } = profileSlice.actions;
