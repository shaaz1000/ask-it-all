import React from "react";
import { useAuth } from "../../context/AuthContext";
import Website from "../Website";
import DashboardMenu from "./DashboardMenu";
import logo from "../../static/assets/svg/ASK-IT-ALL.svg";
import "./HomePage.scss";
import { IconButton } from "@mui/material";
import { MoreVert } from "@mui/icons-material";
import {
  ICON_BOOKING,
  ICON_HISTORY,
  ICON_LOGOUT,
  ICON_PAYMENT,
  ICON_PROFILE,
  ICON_REPORT,
  ICON_SETTINGS,
} from "../../static/assets/svg";
import Menu from "../../components/reusable/menu";

function Homepage() {
  const { isLoggedIn } = useAuth();
  
  const overviewFields = [
    { label: "Profile", icon: <img src={ICON_PROFILE} /> },
    { label: "Bookings", icon: <img src={ICON_BOOKING} /> },
    { label: "Payment", icon: <img src={ICON_PAYMENT} /> },
    { label: "History", icon: <img src={ICON_HISTORY} /> },
    { label: "Report", icon: <img src={ICON_REPORT} /> },
  ];
  const settingsFields = [
    { label: "Settings", icon: <img src={ICON_SETTINGS} /> },
    { label: "Logout", icon: <img src={ICON_LOGOUT} /> },
  ];

  return isLoggedIn ? (
    <div className="homepage">
      <DashboardMenu anchor={"left"}>
        <div className="homepage-menu">
          <img src={logo} />
          <span className="homepage-menu-container">
            <Menu label="OVERVIEW" selectedIndex={1} data={overviewFields} />

            <Menu label="SETTINGS" data={settingsFields} />
          </span>
        </div>
      </DashboardMenu>
      <DashboardMenu anchor={"right"}>
        <div className="profile-menu">
          <p className="poppins-semibold">Your Profile</p>
          <IconButton disableRipple>
            <MoreVert />
          </IconButton>
        </div>
      </DashboardMenu>
    </div>
  ) : (
    <Website />
  );
}

export default Homepage;
