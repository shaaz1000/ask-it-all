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
} from "../../static/assets/svg/Icons";
import Menu from "../../components/menu";
import { useLocation, useNavigate } from "react-router";
import {
  BOOKINGS,
  HISTORY,
  PAYMENT,
  PROFILE,
  REPORT,
  TERMS_AND_CONDITIONS,
  pageMapper,
} from "../../utils/constants";

function Homepage({ children }) {
  const { isLoggedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const overviewFields = [
    {
      label: "Profile",
      icon: <img src={ICON_PROFILE} />,
      onClick: () => navigate(PROFILE),
    },
    {
      label: "Bookings",
      icon: <img src={ICON_BOOKING} />,
      onClick: () => navigate(BOOKINGS),
    },
    {
      label: "Payment",
      icon: <img src={ICON_PAYMENT} />,
      onClick: () => navigate(PAYMENT),
    },
    {
      label: "History",
      icon: <img src={ICON_HISTORY} />,
      onClick: () => navigate(HISTORY),
    },
    {
      label: "Report",
      icon: <img src={ICON_REPORT} />,
      onClick: () => navigate(REPORT),
    },
  ];

  const settingsFields = [
    {
      label: "Settings",
      icon: <img src={ICON_SETTINGS} />,
      onClick: () => navigate(TERMS_AND_CONDITIONS),
    },
    { label: "Logout", icon: <img src={ICON_LOGOUT} /> },
  ];

  return isLoggedIn ? (
    <div className="homepage">
      <div className="homepage-container">
        <DashboardMenu anchor={"left"}>
          <div className="homepage-menu">
            <img src={logo} onClick={() => navigate(PROFILE)} className="logo"/>
            <span className="homepage-menu-container">
              <Menu
                label="OVERVIEW"
                selectedIndex={pageMapper[location.pathname]}
                data={overviewFields}
              />
              <Menu label="SETTINGS" data={settingsFields} />
            </span>
          </div>
        </DashboardMenu>
        {children}
        <DashboardMenu anchor={"right"}>
          <div className="profile-menu">
            <p className="poppins-semibold">Your Profile</p>
            <IconButton disableRipple>
              <MoreVert />
            </IconButton>
          </div>
        </DashboardMenu>
      </div>
    </div>
  ) : (
    <Website />
  );
}

export default Homepage;
