import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./SignUpPage.scss";
import { useNavigate } from "react-router";
import { LOGIN } from "../../utils/constants";
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
function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [otp, setOtp] = useState("");
  const [snackbar, setSnackbar] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignUp = async (event) => {
    event.preventDefault();

    let errorMessage = "";
    if (!validateEmail(email)) {
      errorMessage = "Invalid email address";
    } else if (!validatePassword(password)) {
      errorMessage = "Password must be at least 6 characters";
    } else if (!validateContactNumber(contact)) {
      errorMessage = "Contact number must be 10 digits";
    }

    if (errorMessage) {
      setSnackbar({ message: errorMessage, color: "red", icon: "✖️" });
      return;
    }

    const userData = {
      email,
      password,
      contactNumber: contact,
    };

    const response = await makeApiCall("POST", urls.signUp, userData);
    dispatch(setUser(response.user));
    dispatch(login());
    navigate("/profile");
  };

  useEffect(() => {
    if (snackbar) {
      const timer = setTimeout(() => {
        setSnackbar(null);
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [snackbar]);

  const handleLoginClick = () => {
    navigate(LOGIN);
  };

  return (
    <div className="signup-page">
      {snackbar && (
        <Snackbar
          message={snackbar.message}
          color={snackbar.color}
          icon={snackbar.icon}
        />
      )}
      <div className="signup-container">
        <div className="signup-header-container">
          <div className="signup-header">
            <h1>
              Sign in to <br />
              <span className="poppins-regular">Ask-it-all!</span>
            </h1>
            <p>
              Embark on a journey of knowledge with Ask-it-all! Log in up now to
              connect with expert mentors, fuel your curiosity, and elevate your
              learning experience.
            </p>
          </div>
          <img src={headerImage} alt="Header" />
        </div>
      </div>
      <div className="signup-form">
        <div className="title">
          <p className="poppins-regular">
            Welcome to{" "}
            <span className="appname poppins-semibold">ASK-IT-ALL</span>{" "}
          </p>
          <p className="poppins-regular no-acc-title">
            Have an Account ?
            <br />
            <a className="signup-link" href="/login">
              Log in
            </a>
          </p>
        </div>
        <h1 className="poppins-semibold">SIGN UP</h1>
        <form onSubmit={handleSignUp}>
          <label>Enter your email address</label>
          <input
            type="email"
            placeholder="Enter"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Enter your Password</label>
          <input
            type="password"
            placeholder="Enter"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="inline-input">
            <div className="input-container">
              <label>Contact Number</label>
              <input
                type="tel"
                placeholder="Enter"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
              />
            </div>
            <div className="input-container">
              <label>OTP</label>
              <input
                type="text"
                placeholder="Enter"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </div>
          </div>

          <button type="submit">Sign up</button>
        </form>
      </div>
    </div>
  );
}

export default SignUpPage;
