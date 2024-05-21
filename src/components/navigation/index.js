import React from "react";
import "./Navbar.scss";
import AskItAllLogo from "../../static/assets/svg/ASK-IT-ALL.svg";
import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router";
import { HOMEPAGE } from "../../utils/constants";
import { IconButton } from "@mui/material";
import { MOCK_USER_IMAGE } from "../../static/assets/svg/Icons";

function Navbar({ onLogoClick, onProfileClick }) {
  const navigate = useNavigate();

  const navigateToHomepage = () => {
    navigate(HOMEPAGE);
  };

  return (
    <div className="navigation-bar">
      <div className="nav-container">
        <img
          src={AskItAllLogo}
          className="logo"
          onClick={onLogoClick || navigateToHomepage}
        />
        <IconButton sx={{ width: 30, height: 30 }} onClick={onProfileClick}>
          <Avatar sx={{ width: 30, height: 30 }} src={MOCK_USER_IMAGE} />
        </IconButton>
      </div>
    </div>
  );
}

export default Navbar;
