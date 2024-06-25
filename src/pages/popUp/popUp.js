import React from "react";
import dayjs from "dayjs";
import "./popUp.scss";
import Avatar from "../../assets/images/Avatar.png";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import Navbar from "../../components/navigation";
import { useNavigate } from "react-router";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers";

function AdvisorProfile() {
  const navigate = useNavigate();

  const [fromDate, setFromDate] = React.useState(dayjs());
  const [toDate, setToDate] = React.useState(dayjs());
  const [cleared, setCleared] = React.useState(false);

  React.useEffect(() => {
    if (cleared) {
      const timeout = setTimeout(() => {
        setCleared(false);
      }, 1500);

      return () => clearTimeout(timeout);
    }
    return () => {};
  }, [cleared]);

  const time = [
    {
      value: 15,
      label: "15 minutes",
    },
    {
      value: 30,
      label: "30 minutes",
    },

    {
      value: 60,
      label: "60 minutes",
    },
    {
      value: 90,
      label: "90 minutes",
    },
  ];

  function valuetext(value) {
    console.log(value);
    return `${value}°C`;
  }

  return (
    <div>
      <Navbar />
      <div className="terms-page">
        <div className="terms-title"></div>

        <div className="pop-page">
          <div className="pop-details">
            <div className="pop_image">
              <img src={Avatar} className="pop_img"></img>
            </div>
            <div className="pop_about">
              <h1 className="pop_about_text">ABS</h1>
              <h4 className="pop_about_text_paragraph">Advisor</h4>

              <h4 className="pop_about_text_paragraph">shss</h4>
              <div className="pop-card__stars">
                {[...Array(5)].map((_, i) => (
                  <StarBorderIcon
                    key={i}
                    className={`pop-card__star ${i < 8 ? "filled" : ""}`}
                  />
                ))}
              </div>
              <h4 className="pop_about_text_paragraph">
                2500 minutes completed Advised 12 candidates{" "}
              </h4>
              <h4 className="pop_about_text">₹25/- per minute</h4>
              <div className="social-media">
                <InstagramIcon />
                <GitHubIcon />
              </div>
            </div>

            <div className="pop_description">
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
                </div>
              </div>
            </div>
          </div>
          <div className="experience">
            <div className="education">
              <h3> Education</h3>

              <div className="education_details">
                <div className="education_fields">
                  <h4>Harvard University</h4>
                  <h5>Bachelors in Psychology</h5>
                </div>
                <div className="education_fields">
                  <h4>Mumbai University</h4>
                  <h5>Bachelors in Psychology</h5>
                </div>
              </div>
            </div>

            <div className="work_experience">
              <h3> Work Experience</h3>

              <div className="work_experience_details">
                <div className="work_experience_fields">
                  <h4>Deloitte</h4>
                  <h5>Engineer (Current Job)</h5>
                </div>
                <div className="work_experience_fields">
                  <h4>Larsen & Toubro</h4>
                  <h5>software Developer</h5>
                </div>
              </div>
            </div>
          </div>

          <div className="time_slider">
            <h3>Time :</h3>
            <Box sx={{ width: 1100 }}>
              <Slider
                aria-label="Time Slider"
                defaultValue={15}
                getAriaValueText={valuetext}
                step={15}
                marks={time}
                min={15}
                max={90}
                valueLabelDisplay="on"
                sx={{
                  "& .MuiSlider-thumb": {
                    backgroundColor: "#EB5757",
                  },
                  "& .MuiSlider-track": {
                    backgroundColor: "#5F5F5F",
                  },
                  "& .MuiSlider-rail": {
                    backgroundColor: "black",
                  },
                }}
              />
            </Box>
          </div>

          <div className="booking">
            <div className="book_slot">
              <h3>Book Slot:</h3>

              {/* calender */}
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    // display: "flex",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <DemoItem label="DatePicker">
                    <DatePicker
                      sx={{ width: 260 }}
                      slotProps={{
                        field: {
                          clearable: true,
                          onClear: () => setCleared(true),
                        },
                      }}
                    />
                  </DemoItem>
                </Box>
              </LocalizationProvider>
            </div>
            <div className="timings">
              <h3>Timings:</h3>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Box
                  sx={{
                    width: "100%",
                    height: "100%",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <DemoItem>
                    <TimePicker
                      sx={{ width: 260 }}
                      slotProps={{
                        field: {
                          clearable: true,
                          onClear: () => setCleared(true),
                        },
                      }}
                    />
                  </DemoItem>
                </Box>
              </LocalizationProvider>
            </div>
           
            <div className="total_cost">
              <h3>Total Cost:</h3>
              <h3>₹500</h3>
            </div>
          </div>

          <div className="Book">
            <button>Book</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdvisorProfile;
