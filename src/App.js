import React from "react";
import { AuthProvider } from "./context/AuthContext";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Homepage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import TermsPage from "./pages/TermsPage";
import Bookings from "./pages/HomePage/Bookings";
import Profile from "./pages/HomePage/Profile";
import Payment from "./pages/HomePage/Payment";
import Reports from "./pages/HomePage/Reports";
import History from "./pages/HomePage/History";
import Advisor from "./pages/HomePage/Advisor";
import Credits from "./pages/HomePage/Credits";

function AppRoutes() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/signup" element={<SignupPage />} />
          <Route
            exact
            path="/terms"
            element={
              <Homepage>
                <TermsPage />
              </Homepage>
            }
          />
          <Route
            exact
            path="/bookings"
            element={
              <Homepage>
                <Bookings />
              </Homepage>
            }
          />
          <Route
            exact
            path="/profile"
            element={
              <Homepage>
                <Profile />
              </Homepage>
            }
          />
          <Route
            exact
            path="/payment"
            element={
              <Homepage>
                <Payment />
              </Homepage>
            }
          />
          <Route
            exact
            path="/history"
            element={
              <Homepage>
                <History />
              </Homepage>
            }
          />
          <Route
            exact
            path="/report"
            element={
              <Homepage>
                <Reports />
              </Homepage>
            }
          />
          <Route
            exact
            path="/advisor"
            element={
              <Homepage>
                <Advisor />
              </Homepage>
            }
          />
          <Route
            exact
            path="/credits"
            element={
              <Homepage>
                <Credits />
              </Homepage>
            }
          />
          <Route
            exact
            path="/advisor_profile"
            element={
              <Homepage>
                <Credits />
              </Homepage>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default AppRoutes;
