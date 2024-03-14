import { createSlice } from "@reduxjs/toolkit";

import axios from "../../utils/axios";

const initialState = {
  isLoggedIn: false,
  token: "",
  isLoading: false,
};

const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logIn(state, action) {
      state.isLoggedIn = action.payload.isLoggedIn;
      state.token = action.payload.token;
    },
    signOut(state, action) {
      state.isLoggedIn = false;
      state.token = "";
    },
  },
});

// Reducers

export default slice.reducer;

// LogIn

export function LoginUser(formValues) {
  // formValues => {email, password}

  return async (dispatch, getState) => {
    console.log("Submitting login request with form data:", formValues); // Log form data before making the request
    await axios
      .post(
        "/auth/login",
        {
          ...formValues,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(function (response) {
        console.log("Login request successful. Response:", response); // Log server response
        console.log(response);

        dispatch(
          slice.actions.logIn({
            isLoggedIn: true,
            token: response.data.token,
          })
        );
      })
      .catch(function (error) {
        console.error("Login request failed. Error:", error); // Log any errors
        console.log(error);
      });
  };
}

// Logout user

export function logoutUser() {
  return async (dispatch, getState) => {
    dispatch(slice.actions.signOut());
  };
}
