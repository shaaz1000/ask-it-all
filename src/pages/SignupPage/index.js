import React, { useState } from "react";
import "./SignUpPage.scss"; // Make sure to create a corresponding SCSS file
import Button from "../../components/reusable/button/Button";
import { useNavigate } from "react-router";
import { LOGIN } from "../../utils/constants";
import headerImage from "../../static/assets/svg/icons/Saly-1.svg";

function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [contact, setContact] = useState("");
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();
  const handleSignUp = (event) => {
    event.preventDefault();
    // Sign-up logic goes here
    console.log("Signing up with:", email, password, contact, otp);
  };

  const handleLoginClick = () => navigate(LOGIN);
  return (
    <div className="signup-page">
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
          <img src={headerImage} />
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
