import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  users: [],
  currentUser: null,
  isLoggedIn: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  selectors: {
    selectUsers: (state) => state.users,
    selectCurrentUser: (state) => state.currentUser,
    selectIsLoggedIn: (state) => state.isLoggedIn,
  },
  reducers: {
    register: (state, { payload }) => {
      if (state.users.find((user) => user.email === payload.email)) {
        console.log("here");
        toast.error("User already exists");
      } else {
        state.users.push(payload);
        toast.success("User created");
        state.currentUser = payload;
        state.isLoggedIn = true;
      }
    },
    login: (state, { payload }) => {
      if (
        !state.users.find(
          (user) =>
            user.email === payload.email && user.password === payload.password
        )
      ) {
        toast.error("User does not exist");
      } else {
        state.currentUser = state.users.find(
          (item) => item.email === payload.email
        );
        state.isLoggedIn = true;
        toast.success("User logged in!");
      }
    },
    logout: (state, { payload }) => {
      state.currentUser = null;
      state.isLoggedIn = false;
    },
  },
});
export const authReducer = slice.reducer;
export const { selectUsers, selectCurrentUser, selectIsLoggedIn } =
  slice.selectors;
export const { register, login, logout } = slice.actions;
