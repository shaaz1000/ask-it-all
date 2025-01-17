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
import Advisor from "./pages/HomePage/Advisor";
import Credits from "./pages/HomePage/Credits";
import AddCredit from "./pages/AddCredit/index";
import AdvisorPage from "./pages/AdvisorPage/AdvisorPage";
import BookAdvisorPage from "./pages/AdvisorPage/BookAdvisorPage";
import PopUp from "./pages/popUp/popUp";

import { setUser } from "./redux/features/user/userSlice";
import { login } from "./redux/features/auth/authSlice";
import { makeApiCall } from "./api/config";
import { urls } from "./api/apiUrl";
import PolicyPage from "./pages/PrivacyPolicy";
import RefundPolicyPage from "./pages/RefundPolicy";
import Website from "./pages/Website";
import { setMentor } from "./redux/features/mentor/mentorSlice";

function AppRoutes() {
  const dispatch = useDispatch();

  const fetchUser = async () => {
    try {
      const userType = localStorage.getItem("userType");
      if (userType === "Mentee") {
        const userId = localStorage.getItem("userId");
        if (userId) {
          const response = await makeApiCall(
            "GET",
            `${urls.getSingleUser}/${userId}`,
            null
          );
          if (response.user) {
            dispatch(setUser(response.user));
            dispatch(login());
          }
        }
      } else {
        const mentorId = localStorage.getItem("mentorId");
        const response = await makeApiCall(
          "GET",
          `${urls.getAllMentors}/${mentorId}`,
          null
        );
        if (response.success) {
          dispatch(setMentor(response.mentor));
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
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/website" element={<Website />} />
        <Route exact path="/signup" element={<SignupPage />} />
        <Route exact path="/pop" element={<PopUp />} />
        <Route exact path="/terms" element={<TermsPage />} />
        <Route exact path="/refundpolicy" element={<RefundPolicyPage />} />
        <Route exact path="/privacypolicy" element={<PolicyPage />} />
        <Route exact path="/advisors" element={<BookAdvisorPage />} />
        <Route
          exact
          path="/"
          element={
            <PrivateRoute>
              <Homepage>
                <Profile />
              </Homepage>
            </PrivateRoute>
          }
        />
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
              <AddCredit />
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/website" />;
}

export default AppRoutes;
