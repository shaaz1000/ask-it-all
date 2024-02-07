import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Website from "../Website";

function Homepage() {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? <div>Actual</div> : <Website />;
}

export default Homepage;
