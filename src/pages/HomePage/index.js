import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import Website from "../Website";
import Navbar from "./navigation";

function Homepage() {
  const { isLoggedIn } = useAuth();
  return isLoggedIn ? (
    <div className="homepage">
      <Navbar />
    </div>
  ) : (
    <Website />
  );
}

export default Homepage;
