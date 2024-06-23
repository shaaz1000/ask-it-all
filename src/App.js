import React, { useEffect } from "react";
import {
  Route,
  Routes,
  BrowserRouter as Router,
  Navigate,
} from "react-router-dom";
import { useDispatch } from "react-redux";
import Homepage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import TermsPage from "./pages/TermsPage";
import Bookings from "./pages/HomePage/Bookings";
import Profile from "./pages/HomePage/Profile";
import Payment from "./pages/HomePage/Payment";
import Reports from "./pages/HomePage/Reports";
import History from "./pages/HomePage/History";
import AddCredit from "./pages/AddCredit/index";
import AdvisorPage from "./pages/AdvisorPage/AdvisorPage";

import BookAdvisorPage from "./pages/AdvisorPage/BookAdvisorPage";

import { setUser } from "./redux/features/user/userSlice";
import { login } from "./redux/features/auth/authSlice";
import { makeApiCall } from "./api/config";
import { urls } from "./api/apiUrl";

function AppRoutes() {
  const dispatch = useDispatch();

  const fetchUser = async () => {
    try {
      const userId = localStorage.getItem("userId");
      if (userId) {
        const response = await makeApiCall(
          "GET",
          `${urls.getSingleUser}/${userId}`,
          null
        );
        console.log(response, "Res the ponse");
        if (response.user) {
          dispatch(setUser(response.user));
          dispatch(login());
        }
      }
    } catch (error) {
      console.error("Failed to fetch user data", error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [dispatch]);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/signup" element={<SignupPage />} />
        <Route exact path="/terms" element={<TermsPage />} />
        <Route exact path="/advisors" element={<BookAdvisorPage />} />
        <Route
          exact
          path="/profile"
          element={
            <PrivateRoute>
              <Homepage>
                <Profile />
              </Homepage>
            </PrivateRoute>
          }
        />

        <Route
          path="/advisor_profile"
          element={
            <PrivateRoute>
              <Homepage>
                <AdvisorPage />
              </Homepage>
            </PrivateRoute>
          }
        />
                              
        <Route
          exact
          path="/bookings"
          element={
            <PrivateRoute>
              <Homepage>
                <Bookings />
              </Homepage>
            </PrivateRoute>
          }
        />

        <Route
          exact
          path="/payment"
          element={
            <PrivateRoute>
              <Homepage>
                <Payment />
              </Homepage>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/history"
          element={
            <PrivateRoute>
              <Homepage>
                <History />
              </Homepage>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/report"
          element={
            <PrivateRoute>
              <Homepage>
                <Reports />
              </Homepage>
            </PrivateRoute>
          }
        />
        <Route
          exact
          path="/credit"
          element={
            <PrivateRoute>
              <Homepage>
                <AddCredit />
              </Homepage>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

function PrivateRoute({ children }) {
  const isUserIdAvailable = localStorage.getItem("userId");
  return isUserIdAvailable ? children : <Navigate to="/login" />;
}

export default AppRoutes;
