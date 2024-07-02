import React from "react";
import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { useLocation } from "react-router-dom";
import TextField from "@mui/material/TextField";
import "./AdvisorPage.scss";
import Avatar from "../../assets/images/Avatar.png";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { calculateTotalExperience } from "../../utils/Validators";
function AdvisorProfile() {
  const [fromDate, setFromDate] = React.useState(dayjs());
  const [toDate, setToDate] = React.useState(dayjs());
  const location = useLocation();
  const { advisor } = location.state || {};

  return (
    <div className="advisor-page">
      <div className="advisor-details">
        <div className="advisor_image">
          <img src={Avatar} className="advisor_img"></img>
        </div>
        <div className="advisor_about">
          <h1 className="advisor_about_text">{advisor?.name}</h1>
          <h4 className="advisor_about_text_paragraph">Advisor</h4>

          <h4 className="advisor_about_text_paragraph">
            {advisor?.category?.categoryName} Expert
            {`(${calculateTotalExperience(advisor?.workExperience)} years)`}
          </h4>
          <div className="advisor-card__stars">
            {[...Array(5)].map((_, i) => (
              <StarBorderIcon
                key={i}
                className={`advisor-card__star ${
                  i < advisor?.stars ? "filled" : ""
                }`}
              />
            ))}
          </div>
          <h4 className="advisor_about_text_paragraph">
            2500 minutes completed Advised 12 candidates{" "}
          </h4>
          <h4 className="advisor_about_text">
            {advisor.ratePerHour / 60}/- per minute
          </h4>
          <div className="social-media">
            <InstagramIcon />
            <GitHubIcon />
          </div>
        </div>
        <hr className="divider"></hr>
        <div className="advisor_description">
          <h1 className="advisor_about_text">Description : </h1>
          <h4 className="advisor_about_text_paragraph">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit.
          </h4>
        </div>
      </div>
      {/* <hr className="divider2"></hr> */}

      <div className="analytics">
        <h1>Analytics</h1>
        <div className="analytics_container">
          <div className="anaytics_data">
            <h4> 660 minutes</h4>
            <h5> Of Advisory Time </h5>
          </div>
          <div className="anaytics_data">
            <h4> 13 Sessions over the past 3 months</h4>
            <h5> Completed! </h5>
          </div>
          <div className="anaytics_data">
            <h4>87%</h4>
            <h5>Average Attendance </h5>
          </div>
        </div>
      </div>

      <div className="experience">
        {/* <div className="advisor_section3"> */}
        <div className="education">
          <h3> Education</h3>
          <div className="addIcon">
            <AddCircleOutlineIcon />
          </div>
          <div className="education_details">
            <div className="education_fields">
              <h4>Harvard University</h4>
              <h5>Bachelors in Psychology</h5>
              <button>Delete</button>
            </div>
            <div className="education_fields">
              <h4>Mumbai University</h4>
              <h5>Bachelors in Psychology</h5>
              <button>Delete</button>
            </div>
          </div>
        </div>
        {/* </div> */}

        <div className="work_experience">
          <h3> Work Experience</h3>
          <div className="addIcon">
            <AddCircleOutlineIcon />
          </div>
          <div className="work_experience_details">
            <div className="work_experience_fields">
              <h4>Deloitte</h4>
              <h5>Engineer (Current Job)</h5>
              <button>Delete</button>
            </div>
            <div className="work_experience_fields">
              <h4>Larsen & Toubro</h4>
              <h5>software Developer</h5>
              <button>Delete</button>
            </div>
          </div>
        </div>
      </div>

      <div className="time_slots">
        <div className="heading">
          <h3> Select Available Date/ Time slot</h3>
          <div className="addIcon">
            <AddCircleOutlineIcon />
          </div>
        </div>

        {/* calender */}
        <div className="calendar">
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="calendar_selection">
              <div>
                <DateTimePicker
                  label="From Date"
                  value={fromDate}
                  onChange={(newValue) => setFromDate(newValue)}
                  renderInput={(props) => <TextField {...props} />}
                  minutesStep={30}
                />
              </div>
              <div>
                <DateTimePicker
                  label="To Date"
                  value={toDate}
                  onChange={(newValue) => setToDate(newValue)}
                  renderInput={(props) => <TextField {...props} />}
                  minDateTime={fromDate}
                  minutesStep={30}
                />
              </div>
            </div>
            <div className="selected_dates">
              {/* <div>{fromDate ? fromDate.format('MMMM D, YYYY h:mm A') : ''}</div>
          <div>{toDate ? toDate.format('MMMM D, YYYY h:mm A') : ''}</div> */}
              <div className="fromDate">
                <button>{fromDate ? fromDate.format(" h:mm A") : ""}</button>
              </div>

              <div className="toDate">
                <button>{toDate ? toDate.format(" h:mm A") : ""}</button>
              </div>
            </div>
          </LocalizationProvider>
        </div>
      </div>
    </div>
  );
}

export default AdvisorProfile;
