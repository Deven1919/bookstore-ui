import React from "react";
import { key } from "../Regex/Regex";
import { Navigate } from "react-router-dom";

export default function AuthRouter({ children }) {
  const token = localStorage.getItem(key);
  //   console.log(token);

  if (token) {
    return children;
  } else {
    return <Navigate to="/" replace="true" />;
  }

  //  Redirect to login page.
}
