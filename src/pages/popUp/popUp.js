import React from "react";
import dayjs from "dayjs";
import "./popUp.scss";
import Avatar from "../../assets/images/Avatar.png";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import Navbar from "../../components/navigation";
import { useNavigate, useLocation } from "react-router";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, TimePicker } from "@mui/x-date-pickers";
import { Link } from "react-router-dom";
import { calculateTotalExperience } from "../../utils/Validators";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { makeApiCall } from "../../api/config";
import { urls } from "../../api/apiUrl";
import { toast } from "react-toastify";
import { HOMEPAGE } from "../../utils/constants";

const AdvisorProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userId = localStorage.getItem("userId");

  const [cleared, setCleared] = React.useState(false);

  const { advisor } = location.state || {};
  console.log(advisor, "ADV");

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
    { value: 15, label: "15 minutes" },
    { value: 30, label: "30 minutes" },
    { value: 60, label: "60 minutes" },
    { value: 90, label: "90 minutes" },
  ];

  const validationSchema = Yup.object().shape({
    questions: Yup.string().required("Questions are required"),
    fromDate: Yup.date().required("From date is required"),
    toDate: Yup.date().required("To date is required"),
  });

  const handleFormSubmit = async (values) => {
    const totalCost = (advisor?.ratePerHour / 60) * values.duration;
    const bookingDateTime = dayjs(values.fromDate)
      .hour(dayjs(values.toDate).hour())
      .minute(dayjs(values.toDate).minute())
      .second(0)
      .millisecond(0)
      .toISOString();
    const questionsArray = values.questions
      .trim()
      .split("\n")
      .map((q) => q.replace(/^\d+\.\s*/, ""));
    console.log("Questions:", questionsArray);
    console.log("Booking DateTime:", bookingDateTime);
    console.log("Total Cost:", totalCost);
    console.log("userid",advisor?._id)
    console.log("categ_id",advisor?.category?._id)

    
  const apiData = {
    mentorId:advisor?._id,
    userId:userId,
    bookingDateTime:bookingDateTime,
    categoryId:advisor?.category?._id,
    totalCost:totalCost,
    duration:values.duration,
    questionsAsked:questionsArray
  }
  console.log(apiData)

const data=  await makeApiCall(
    "POST",
    `${urls.booking}`,
    apiData
);
toast.success("Booking Completed!");
navigate("/advisors")
};

  const initialDate = advisor?.availableTimeSlots[0]?.date || dayjs();

  const minDate =
  dayjs(advisor?.availableTimeSlots[0]?.date).subtract(1, "day") || dayjs();


  return (
    <div>
      <Navbar />
      <div className="terms-page">
        <div className="terms-title"></div>
        <div className="pop-page">
          <div className="pop-details">
            <div className="pop_image">
              <img src={Avatar} className="pop_img" alt="Avatar" />
            </div>
            <div className="pop_about">
              <h1 className="pop_about_text">{advisor?.name}</h1>
              <h4 className="pop_about_text_paragraph">
                {advisor?.category?.categoryName} Expert
                {`(${calculateTotalExperience(advisor?.workExperience)} years)`}
              </h4>
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
              <h4 className="pop_about_text">
                {advisor?.ratePerHour / 60}/- per minute
              </h4>
              <div className="social-media">
                <Link to={advisor?.socialHandles[0]?.handleLink}>
                  <InstagramIcon />
                </Link>
                <Link to={advisor?.socialHandles[1]?.handleLink}>
                  <GitHubIcon />
                </Link>
              </div>
            </div>

            <div className="pop_description">
              <div className="analytics">
                <h1>Analytics</h1>
                <div className="analytics_container">
                  <div className="anaytics_data">
                    <h4>660 minutes</h4>
                    <h5>Of Advisory Time</h5>
                  </div>
                  <div className="anaytics_data">
                    <h4>13 Sessions over the past 3 months</h4>
                    <h5>Completed!</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Formik
            initialValues={{
              questions: "",
              fromDate: dayjs(initialDate),
              toDate: dayjs(),
              duration: 15,
            }}
            validationSchema={validationSchema}
            onSubmit={handleFormSubmit}
          >
            {({ values, setFieldValue }) => (
              <Form>
                <div className="container_question">
                  <p>Questions:</p>
                  <Field
                    as="textarea"
                    name="questions"
                    className="input_question"
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        const questions = values.questions.trim().split("\n");
                        const newQuestionNumber = questions.length + 1;
                        const newQuestion = `${newQuestionNumber}. `;
                        setFieldValue("questions", `${values.questions}\n${newQuestion}`);
                      }
                    }}
                    onFocus={(e) => {
                      if (values.questions.trim() === "") {
                        setFieldValue("questions", `1. `);
                      }
                    }}
                  />
                  <ErrorMessage
                    name="questions"
                    component="div"
                    className="error-message"
                  />
                </div>

                <div className="time_slider">
                  <h3>Time:</h3>
                  <Box sx={{ width: 1000 }}>
                    <Slider
                      aria-label="Time Slider"
                      defaultValue={15}
                      getAriaValueText={(value) => `${value}`}
                      step={15}
                      marks={time}
                      min={15}
                      max={90}
                      valueLabelDisplay="on"
                      value={values.duration}
                      onChange={(e, value) => setFieldValue("duration", value)}
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
                          <DatePicker
                            sx={{ width: 260 }}
                            value={values.fromDate}
                            onChange={(newValue) =>
                              setFieldValue("fromDate", newValue)
                            }
                            minDate={minDate} // Dynamic minDate based on earliest available date - 1 day
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
                    <ErrorMessage name="fromDate" component="div" className="error-message" />
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
                            value={values.toDate}
                            onChange={(newValue) =>
                              setFieldValue("toDate", newValue)
                            }
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
                    <ErrorMessage name="toDate" component="div" className="error-message" />
                  </div>
                  <div className="total_cost">
                    <h3>Total Cost:</h3>
                    <h3>₹{(advisor?.ratePerHour / 60) * values.duration}</h3>
                  </div>
                </div>

                <div className="Book">
                  <button type="submit">Book</button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default AdvisorProfile;
