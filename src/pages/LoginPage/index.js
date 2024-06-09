import React, { useState } from "react";
import "./LoginPage.scss"; // Import your CSS styles as needed
import { SIGNUP } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import headerImage from "../../static/assets/svg/icons/Saly-1.svg";
import Snackbar from "../../components/Snackbar/index";
import {
  validateEmail,
  validatePassword,
  validateContactNumber,
} from "../../utils/Validators";
import { setUser } from "../../redux/features/user/userSlice";
import { login } from "../../redux/features/auth/authSlice";
import { makeApiCall } from "../../api/config";
import { urls } from "../../api/apiUrl";
import { useDispatch } from "react-redux";

function LoginPage() {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [snackbar, setSnackbar] = useState(null);
  const navigate = useNavigate();
  const handleLogin = async (event) => {
    try {
      event.preventDefault();
      let errorMessage = "";
      if (!validateEmail(username)) {
        errorMessage = "Invalid email address";
      } else if (!validatePassword(password)) {
        errorMessage = "Password must be at least 6 characters";
      }

      if (errorMessage) {
        setSnackbar({ message: errorMessage, color: "red", icon: "✖️" });
        return;
      }

      const userData = {
        email: username,
        password,
      };

      const response = await makeApiCall("POST", urls.login, userData);
      dispatch(setUser(response.user));
      localStorage.setItem("token", response.token);
      localStorage.setItem("userId", response.user._id);
      dispatch(login());
      navigate("/profile");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignUpClick = () => {
    navigate(SIGNUP);
  };

  return (
    <div className="login-page">
      {snackbar && (
        <Snackbar
          message={snackbar.message}
          color={snackbar.color}
          icon={snackbar.icon}
        />
      )}
      <div className="login-container">
        <div className="login-header-container">
          <div className="login-header">
            <h1>
              Log in to <br />
              <span className="poppins-regular">Ask-it-all!</span>
            </h1>
            <p>
              Embark on a journey of knowledge with Ask-it-all! Log in up now to
              connect with expert mentors, fuel your curiosity, and elevate your
              learning experience.
            </p>
          </div>
          <img src={headerImage} />
        </div>
      </div>
      <div className="login-form">
        <div className="title">
          <p className="poppins-regular">
            Welcome to{" "}
            <span className="appname poppins-semibold">ASK-IT-ALL</span>{" "}
          </p>
          <p className="poppins-regular no-acc-title">
            No Account ?
            <br />
            <a className="signup-link" href="/signup">
              Sign Up
            </a>
          </p>
        </div>
        <h1 className="poppins-semibold">LOG IN</h1>
        <form onSubmit={handleLogin}>
          <div className="social-login">
            <button type="button">Sign in with Google</button>
            <button type="button">Sign in with Facebook</button>
          </div>
          <label>Enter your username or email address</label>
          <input
            type="text"
            placeholder="Enter"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label>Enter your Password</label>
          <input
            type="password"
            placeholder="Enter"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <a className="signup-link" href="/login">
            Forgot Password
          </a>
          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
