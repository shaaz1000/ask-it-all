import React from "react";
import { AuthProvider } from "./context/AuthContext";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Homepage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import TermsPage from "./pages/TermsPage";

function AppRoutes() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/signup" element={<SignupPage />} />
          <Route exact path="/terms" element={<TermsPage />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default AppRoutes;
