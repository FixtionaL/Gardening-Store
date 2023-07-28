// import { createSlice } from "@reduxjs/toolkit";

// export const Userslice = createSlice({
//   name: "Prossfiles",
//   initialState: {
//     user: null,
//   },
//   reducers: {
//     login: (state, action) => {
//       state.user = action.payload;
//     },
//     logout: (state) => {
//       state.user = null;
//     },
//   },
// });
// export const { login, logout } = Userslice.actions;
// export const selectUser = (state) => state.user.user;
// export default Userslice.reducer;

// Userslice.js
import { createSlice } from "@reduxjs/toolkit";

export const Userslice = createSlice({
  name: "Prossfiles",
  initialState: {
    user: null,
    username: "", // Add the username to the initial state
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.username = action.payload.username; // Add the username to the state
    },
    logout: (state) => {
      state.user = null;
      state.username = ""; // Clear the username when logging out
    },
  },
});

export const { login, logout } = Userslice.actions;
export const selectUser = (state) => state.user.user;
export const selectUsername = (state) => state.user.username; // Add selector for the username
export default Userslice.reducer;

