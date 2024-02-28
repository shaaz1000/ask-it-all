import React, { useState } from "react";
import "./LoginPage.scss"; // Import your CSS styles as needed
import { SIGNUP } from "../../utils/constants";
import { useNavigate } from "react-router-dom";
import Button from "../../components/reusable/button/Button";
function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    // Handle the login logic here, possibly sending a request to a server
    console.log("Logging in with:", username, password);
  };

  const handleSignUpClick = () => {
    navigate(SIGNUP);
  };

  return (
    <div className="login-container">
      <div className="login-header">
        <h1>Log in to Ask-it-all!</h1>
        <p>
          Embark on a journey of knowledge with Ask-it-all! Log in now to
          connect with expert mentors, fuel your curiosity, and elevate your
          learning experience.
        </p>
      </div>
      <div className="login-form">
        <form onSubmit={handleLogin}>
          <div className="social-login">
            <button type="button">Sign in with Google</button>
            <button type="button">Sign in with Facebook</button>
          </div>
          <input
            type="text"
            placeholder="Enter your username or email address"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Log in</button>
        </form>
        <div className="login-footer">
          <span>Forgot Password</span>
          <p>No Account? </p>
          <Button width={"25%"} label="Sign up" onClick={handleSignUpClick} />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
