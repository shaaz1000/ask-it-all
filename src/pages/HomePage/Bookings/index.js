import React from "react";
import PreviewContentCard from "../../../components/previewContentCard";
import InstructorDetailsTable from "../../../components/instructorDetailsTable";
import { InputAdornment, TextField } from "@mui/material";
import { SearchOutlined } from "@mui/icons-material";
import { ICON_FILTER } from "../../../static/assets/svg/Icons";
import './Bookings.scss';
import { mockInstructorData } from "../../../utils/constants";

function Bookings() {

  return (
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
      <PreviewContentCard title="Upcoming Sessions">
        <InstructorDetailsTable data={mockInstructorData} />
      </PreviewContentCard>
      <PreviewContentCard title="Pending Requests">
        <InstructorDetailsTable data={mockInstructorData} />
      </PreviewContentCard>
      <PreviewContentCard title="Cancelled Sessions">
        <InstructorDetailsTable data={mockInstructorData} />
      </PreviewContentCard>
      <br />
    </div>
  );
}

export default Bookings;
