import React from "react";
import "./_Website.scss";
import Header from "../../components/header/Header";
import { Stack } from "@mui/material";
import QuestionCard from "../../components/reusable/questionCard/QuestionCard";
import SearchField from "../../components/reusable/searchField/SearchField";

function Website() {
  const data = [
    {
      userName: "Jay Vaughun",
      description: "LOren ipsum",
      questionsAnswered: 16,
      rating: 2,
      title: "Product Designer",
    },
    {
      userName: "Jay Vaughun",
      description: "LOren ipsum",
      questionsAnswered: 16,
      rating: 2,
      title: "Product Designer",
    },
    {
      userName: "Jay Vaughun",
      description: "LOren ipsum",
      questionsAnswered: 16,
      rating: 2,
      title: "Product Designer",
    },
    {
      userName: "Jay Vaughun",
      description: "LOren ipsum",
      questionsAnswered: 16,
      rating: 2,
      title: "Product Designer",
    },
  ];
  return (
    <div className="Website">
      <Header />
      <div className="frame1">
        <div className="light-faded-frame frame2">
          <div className="content">
            <h2>
              Ask. Connect. Grow. <br />
            </h2>
            <span className="poppins-semibold">
              Transforming Questions into Opportunities
            </span>
            <p>
              Join a thriving ecosystem where minds connect, ambitions are
              ignited and learning becomes a shared journey.
            </p>
            <SearchField placeholder={"ask a question..."} />
          </div>
        </div>
      </div>

      <div className="frame3">
        <h2>Top Questions of the week:</h2>
        <Stack spacing={2} justifyContent={"space-evenly"} direction={"row"}>
          {data.map((i) => (
            <QuestionCard data={i} />
          ))}
        </Stack>
      </div>
      <div className="frame4">
        <h2>Features:</h2>
      </div>
      <div className="frame5 signup-info">
        <h1 className="poppins-bold">
          Ask-It-All: Unlocking Wisdom, One Question At A Time!
        </h1>
        <p className="poppins-italic">
          We offer specialized expertise, flexible scheduling, and a user
          friendly interface, we re-define the learning experience.
        </p>
      </div>
      <div className="frame6">
        <h2>Client Testimonials:</h2>
        <div className="background"></div>
      </div>
      <div className="frame5 count">
        <div className="container">
          <h1 className="poppins-semibold-italic">
            It's how you monetize your audience!
          </h1>
          <Stack
            direction={"row"}
            alignContent={"center"}
            spacing={2}
            justifyContent={"space-evenly"}
          >
            <div className="number-card">
              <p className="poppins-bold">15</p>
              <span>Creators</span>
            </div>
            <div className="number-card">
              <p className="poppins-bold">10K</p>
              <span>Sessions</span>
            </div>
            <div className="number-card">
              <p className="poppins-bold">20K</p>
              <span>Followers connected</span>
            </div>
          </Stack>
        </div>
      </div>
      <div className="frame7"></div>
    </div>
  );
}

export default Website;
