import React, { useState, useEffect } from "react";
import "./Profile.scss";
import { Card, IconButton, InputAdornment, TextField } from "@mui/material";
import { MoreVert, SearchOutlined } from "@mui/icons-material";
import { ICON_FILTER } from "../../../static/assets/svg/Icons";
import PreviewContentCard from "../../../components/previewContentCard";
import InstructorDetailsTable from "../../../components/instructorDetailsTable";
import { mockInstructorData } from "../../../utils/constants";
import { useLocation, useNavigate } from "react-router";
import DashboardMenu from "../DashboardMenu";
import UserProfile from "../../UserProfile/Index";
import ProfileMenu from "./ProfileMenu";
import { makeApiCall } from "../../../api/config";
import { urls } from "../../../api/apiUrl";

function Profile() {
  const navigate = useNavigate();

  const [bookings, setBookings] = useState({
    upcoming: [],
  });
  const userType = localStorage.getItem("userType");
  const getCurrentBookings = async () => {
    try {
      if (userType === "Mentee") {
        const userId = localStorage.getItem("userId");
        const data = await makeApiCall("GET", `${urls.booking}/user/${userId}`);
        if (data.success) {
          setBookings({
            ...bookings,
            upcoming: data.bookings.upcoming,
          });
        }
      } else {
        const mentorId = localStorage.getItem("mentorId");
        const data = await makeApiCall(
          "GET",
          `${urls.booking}/mentor/${mentorId}`
        );
        if (data.success) {
          setBookings({
            ...bookings,
            upcoming: data.bookings.upcoming,
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCurrentBookings();
  }, []);

  return (
    <div>
      <div className="profile">
        <div className="search-field">
          <TextField
            fullWidth
            className="bookings-search"
            placeholder="Search a mentor name here..."
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchOutlined />
                </InputAdornment>
              ),
            }}
          />
          <img src={ICON_FILTER} />
        </div>
        <div className="banner">
          <div style={{ marginLeft: "24px", width: "90%" }}>
            <p>SOLVE DOUBTS!</p>
            <p className="poppins-semibold">You have a 100 credits!!</p>
            <button
              onClick={() => navigate("/credit")}
              className="poppins-semibold"
            >
              Add Credits
            </button>
          </div>
        </div>
        <h2 className="poppins-medium">Analytics</h2>
        <div className="analytics">
          <Card className="card">
            <p
              style={{
                fontSize: "12px",
                lineHeight: "18px",
                fontWeight: "600px",
              }}
              className="poppins-bold"
            >
              27 Questions have been asked by you!
            </p>
            <p>Ask some more!</p>
          </Card>
          <Card className="card">
            <p
              style={{
                fontSize: "12px",
                lineHeight: "18px",
                fontWeight: "600px",
              }}
              className="poppins-bold"
            >
              25 new Engineering mentors
            </p>
            <p>Connect with them!</p>
          </Card>
          <Card className="card">
            <p
              style={{
                fontSize: "12px",
                lineHeight: "18px",
                fontWeight: "600px",
              }}
              className="poppins-bold"
            >
              3827 minutes spent with mentors!
            </p>
            <p>Reach out to your top mentors!</p>
          </Card>
        </div>
        {bookings.upcoming.length && bookings.upcoming.length > 0 ? (
          <PreviewContentCard title="Upcoming Sessions">
            <InstructorDetailsTable data={bookings.upcoming} />
          </PreviewContentCard>
        ) : null}

        {/* <PreviewContentCard title="Questions Answered">
        <InstructorDetailsTable data={mockInstructorData} />
      </PreviewContentCard> */}
        <br />
      </div>
      {userType === "Mentee" ? <ProfileMenu /> : null}
    </div>
  );
}

export default Profile;
