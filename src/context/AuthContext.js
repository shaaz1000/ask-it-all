import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const CONTEXT = {
    isLoggedIn,
    setIsLoggedIn,
  };
  return (
    <AuthContext.Provider value={CONTEXT}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
