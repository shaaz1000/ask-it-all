import React from "react";
import "./_Website.scss";
import Header from "../../components/header/Header";
import { Stack } from "@mui/material";
import QuestionCard from "../../components/reusable/questionCard/QuestionCard";
import SearchField from "../../components/reusable/searchField/SearchField";
import Frame4_1 from "../../static/assets/svg/frames/frame4_1.png";
import Frame4_2 from "../../static/assets/svg/frames/Frame4_2.png";
import Frame4_3 from "../../static/assets/svg/frames/Frame4_3.png";
import Frame6_1 from "../../static/assets/svg/frames/Frame6_1.png";
import Button from "../../components/reusable/button/Button";

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
            <Button
              color="#EB5757"
              fontColor="white"
              width={"35%"}
              label="Book an Advisor"
              onClick={() => {}}
            />
            {/* <SearchField placeholder={"ask a question..."} /> */}
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
        <div className="container">
          <div className="block">
            <img src={Frame4_1} />
            <h4>Cost Effective Method of Learning</h4>
            <p>
              Enjoy a secure payment system, providing a hassle-free experience
              & transparent billing based on the actual time spent with the
              mentor.
            </p>
          </div>
          <div className="block">
            <img src={Frame4_2} />
            <h4>Holistic Ecosystem of Mentors</h4>
            <p>
              Access a diverse range of mentors with expertise tailored to your
              specific needs for a more focused and effective doubt solving
              experience.
            </p>
          </div>
          <div className="block">
            <img src={Frame4_3} />
            <h4>Fast Turnaround Times</h4>
            <p>
              Seamlessly book one-on-one video calls with mentors to receive
              in-depth guidance and clarification.
            </p>
          </div>
        </div>
      </div>
      <div className="frame5 signup-info">
        <h1 className="poppins-bold">
          Ask-It-All: Unlocking Wisdom, One Question At A Time!
        </h1>
        <p className="poppins-italic">
          We offer specialized expertise, flexible scheduling, and a user
          friendly interface, we re-define the learning experience.
        </p>
        <div className="content-container">
          <div className="card">
            <h2>01</h2>
            <p className="poppins-semibold wrapped-text">
              Sign Up For One Of Our Services{" "}
            </p>
            <img src={Frame6_1} />
            <p>
              Sign up for one of our affordable subscription play which offer a
              variety.
            </p>
          </div>
        </div>
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
