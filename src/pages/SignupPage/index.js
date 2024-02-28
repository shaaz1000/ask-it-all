import React, { useState } from "react";
import "./SignUpPage.scss"; // Make sure to create a corresponding SCSS file
import Button from "../../components/reusable/button/Button";
import { useNavigate } from "react-router";
import { LOGIN } from "../../utils/constants";
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
    <div className="signup-container">
      <div className="signup-header">
        <h1>Sign up to Ask-it-all!</h1>
        <p>
          Embark on a journey of knowledge with Ask-it-all! Sign up now to
          connect with expert mentors, fuel your curiosity, and elevate your
          learning experience.
        </p>
      </div>
      <div className="signup-form">
        <form onSubmit={handleSignUp}>
          <input
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="tel"
            placeholder="Contact Number"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <input
            type="text"
            placeholder="OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
          />
          <button type="submit">Sign up</button>
        </form>
        <div className="signup-footer">
          <p>Have an Account?</p>
          <Button width={"25%"} label="Log In" onClick={handleLoginClick} />
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
