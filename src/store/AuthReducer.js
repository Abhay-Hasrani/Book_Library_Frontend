// authSlice.js

import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode";

// Load initial state from local storage if available
const initialState = {
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user"))
    : null,
  token: localStorage.getItem("token") ? localStorage.getItem("token") : null,
  isLoggedIn: localStorage.getItem("isLoggedIn")
    ? JSON.parse(localStorage.getItem("isLoggedIn"))
    : false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login(state, action) {
      state.isLoggedIn = true;
      const myToken = action.payload.token;
      //set token
      state.token = myToken;

      //decode jwt to get user details
      const userDetails = jwtDecode(myToken);
      state.user = userDetails;
      // Save to local storage
      localStorage.setItem("user", JSON.stringify(userDetails));
      localStorage.setItem("token", myToken);
      localStorage.setItem("isLoggedIn", JSON.stringify(true));
    },
    logout(state) {
      state.user = null;
      state.token = null;
      state.isLoggedIn = false;
      // Clear local storage
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      localStorage.removeItem("isLoggedIn");
    },
  },
});

export const authActions = AuthSlice.actions;

export default AuthSlice.reducer;
