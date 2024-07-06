import React, { useEffect, useState } from "react";
import PreviewContentCard from "../../../components/previewContentCard";
import InstructorDetailsTable from "../../../components/instructorDetailsTable";
import { InputAdornment, TextField } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import { ICON_FILTER } from "../../../static/assets/svg/Icons";
import "./Bookings.scss";
import { mockInstructorData } from "../../../utils/constants";
import ProfileMenu from "../Profile/ProfileMenu";
import { makeApiCall } from "../../../api/config";
import { urls } from "../../../api/apiUrl";

function Bookings() {
  const [bookings, setBookings] = useState({
    upcoming: [],
    pending: [],
    cancelled: [],
  });

  const getCurrentBookings = async () => {
    try {
      const userId = localStorage.getItem("userId");
      const data = await makeApiCall("GET", `${urls.booking}/user/${userId}`);
      if (data.success) {
        setBookings({
          ...bookings,
          cancelled: data.bookings.cancelled,
          upcoming: data.bookings.upcoming,
          pending: data.bookings.pending,
        });
      }
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCurrentBookings();
  }, []);
  return (
    <div>
      <div className="bookings">
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
        <h2 className="poppins-medium">Bookings</h2>
        {bookings.upcoming.length && bookings.upcoming.length > 0 ? (
          <PreviewContentCard title="Upcoming Sessions">
            <InstructorDetailsTable data={bookings.upcoming} />
          </PreviewContentCard>
        ) : null}
        {bookings.pending.length && bookings.pending.length > 0 ? (
          <PreviewContentCard title="Pending Requests">
            <InstructorDetailsTable data={bookings.pending} />
          </PreviewContentCard>
        ) : null}
        {bookings.cancelled.length && bookings.cancelled.length > 0 ? (
          <PreviewContentCard title="Cancelled Sessions">
            <InstructorDetailsTable data={bookings.cancelled} />
          </PreviewContentCard>
        ) : null}
        <br />
      </div>
      <ProfileMenu />
    </div>
  );
}

export default Bookings;
