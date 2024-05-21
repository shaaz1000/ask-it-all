import React, { useEffect, useState } from "react";
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
  HOMEPAGE,
  PAYMENT,
  PROFILE,
  REPORT,
  TERMS_AND_CONDITIONS,
  pageMapper,
} from "../../utils/constants";
import ProfileInfo from "./ProfileInfo";
import EditableCard from "../../components/EditableCard";
import Navbar from "../../components/navigation";

function Homepage({ children }) {
  const { isLoggedIn } = useAuth();
  const [isLeftMenuOpen, setLeftMenuOpen] = useState(false);
  const [isRightMenuOpen, setRightMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const closeMenu = () => {
    setLeftMenuOpen(false);
    setRightMenuOpen(false);
  };

  const overviewFields = [
    {
      label: "Profile",
      icon: <img src={ICON_PROFILE} />,
      onClick: () => {
        navigate(PROFILE);
        closeMenu();
      },
    },
    {
      label: "Bookings",
      icon: <img src={ICON_BOOKING} />,
      onClick: () => {
        navigate(BOOKINGS);
        closeMenu();
      },
    },
    {
      label: "Payment",
      icon: <img src={ICON_PAYMENT} />,
      onClick: () => {
        navigate(PAYMENT);
        closeMenu();
      },
    },
    {
      label: "History",
      icon: <img src={ICON_HISTORY} />,
      onClick: () => {
        navigate(HISTORY);
        closeMenu();
      },
    },
    {
      label: "Report",
      icon: <img src={ICON_REPORT} />,
      onClick: () => {
        navigate(REPORT);
        closeMenu();
      },
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

  useEffect(() => {
    if (location.pathname == HOMEPAGE) {
      navigate(PROFILE);
    }
  }, []);
  return isLoggedIn ? (
    <div>
      <Navbar
        onLogoClick={() => setLeftMenuOpen(true)}
        onProfileClick={() => setRightMenuOpen(true)}
      />
      <DashboardMenu
        anchor={"left"}
        isOpen={isLeftMenuOpen}
        setOpen={setLeftMenuOpen}
        sx={{
          width: 230,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 230,
          },
        }}
      >
        <div className="homepage-menu">
          <img src={logo} onClick={() => navigate(PROFILE)} className="logo" />
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
      <div className={`homepage`}>
        <div className="homepage-container">{children} </div>
      </div>
      <DashboardMenu
        anchor={"right"}
        isOpen={isRightMenuOpen}
        setOpen={setRightMenuOpen}
        className={`homepage`}
        sx={{
          width: 230,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 230,
          },
        }}
      >
        <div className="profile-menu">
          <p className="poppins-semibold">Your Profile</p>
          <IconButton disableRipple>
            <MoreVert />
          </IconButton>
        </div>
        <ProfileInfo
          userName={"Prashant Shah"}
          creditCount={"100"}
          userRole="Mentee"
        />
        <EditableCard
          cardTitle={"Education"}
          data={[
            {
              title: "Mumbai University",
              subTitle: "Bachelors in Technology",
            },
            {
              title: "Harvard University",
              subTitle: "Masters in Software Developer",
            },
          ]}
        />
        <EditableCard
          cardTitle={"Work Experience"}
          data={[
            {
              title: "Deloitte",
              subTitle: "Engineer (Current Job)",
              details:
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.",
            },
            {
              title: "PWC",
              subTitle: "software Developer (2018 to 2022)",
              details:
                "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.",
            },
          ]}
        />
      </DashboardMenu>
    </div>
  ) : (
    <Website />
  );
}

export default Homepage;
