// Context/reducer.js

import React, { useReducer } from "react";

let user = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).data.user
  : "";

let token = localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).token
  : "";

export const initialState = {
  userDetails: "" || user,
  token: "" || token,
  loading: false,
  errorMessage: null
};

export const AuthReducer = (initialState, action) => {
    
   console.log(token)
  switch (action.type) {
    case "REQUEST_SIGNUP":
      return {
        ...initialState,
        loading: true,
        errorMessage: action.error
      };

      case "SIGNUP_SUCCESS":
      return {
           ...initialState,
        user: action.payload.user,
        token: action.payload.token,
        loading: false
      };
    case "REQUEST_LOGIN":
      return {
        ...initialState,
        loading: true,
        errorMessage: action.error
      };
    case "LOGIN_SUCCESS":
      return {
        ...initialState,
        user: action.payload.user,
        token: action.payload.token,
        loading: false
      };
    case "LOGOUT":
      return {
        ...initialState,
        user: "",
        token: ""
      };

    case "LOGIN_ERROR":
      return {
        ...initialState,
        loading: false,
        errorMessage: action.error
      };

    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};