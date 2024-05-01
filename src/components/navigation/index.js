import React from "react";
import "./Navbar.scss";
import AskItAllLogo from "../../static/assets/svg/ASK-IT-ALL.svg";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router";
import { HOMEPAGE } from "../../utils/constants";

function Navbar() {
  const navigate = useNavigate();

  const navigateToHomepage = () => {
    navigate(HOMEPAGE);
  };

  return (
    <div className="navigation-bar">
      <div className="nav-container">
        <img src={AskItAllLogo} className="logo" onClick={navigateToHomepage} />
        <Avatar sx={{ width: 30, height: 30 }} />
      </div>
    </div>
  );
}

export default Navbar;
