import React from "react";
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
import ProfileMenu from "./ProfileMenu"

function Profile() {
  const navigate = useNavigate();

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
       <div style={{marginLeft:"24px",width:"90%"}}>
       <p>SOLVE DOUBTS!</p>
        <p className="poppins-semibold">You have a 100 credits!!</p>
        <button onClick={()=>navigate("/credit")} className="poppins-semibold">Add Credits</button>
       </div>
      </div>
      <h2 className="poppins-medium">Analytics</h2>
      <div className="analytics">
        <Card className="card">
          <p style={{fontSize:"12px",lineHeight:"18px",fontWeight:"600px"}} className="poppins-bold">27 Questions have been asked by you!</p>
          <p>Ask some more!</p>
        </Card>
        <Card className="card">
        <p style={{fontSize:"12px",lineHeight:"18px",fontWeight:"600px"}}  className="poppins-bold">25 new Engineering mentors</p>
          <p>Connect with them!</p>
        </Card>
        <Card className="card">
        <p style={{fontSize:"12px",lineHeight:"18px",fontWeight:"600px"}}  className="poppins-bold">3827 minutes spent with mentors!</p>
          <p>Reach out to your top mentors!</p>
        </Card>
      </div>
      <PreviewContentCard title="Upcoming Sessions">
        <InstructorDetailsTable data={mockInstructorData} />
      </PreviewContentCard>
      <PreviewContentCard title="Questions Answered">
        <InstructorDetailsTable data={mockInstructorData} />
      </PreviewContentCard>
      <br />
    </div>

    <ProfileMenu/>

        </div>
  );
}

export default Profile;
