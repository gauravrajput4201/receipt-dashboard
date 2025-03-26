import { createReducer } from "@reduxjs/toolkit";
import { setUserDetails } from "./userActions";

const initialState = {
  userDetails: {
    isLoggedIn: false,
    useremail: "",
  },
};

export const userReducer: any = createReducer(initialState, (builder) => {
  builder.addCase(setUserDetails, (state, action) => ({
    ...state,
    userDetails: { ...state.userDetails, ...action.payload },
  }));
});
