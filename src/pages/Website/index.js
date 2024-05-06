import React from "react";
import "./_Website.scss";
import { Card, IconButton, Stack } from "@mui/material";
import Frame4_1 from "../../static/assets/svg/frames/frame4_1.png";
import Frame4_2 from "../../static/assets/svg/frames/Frame4_2.png";
import Frame4_3 from "../../static/assets/svg/frames/Frame4_3.png";
import Frame6_1 from "../../static/assets/svg/frames/Frame6_1.png";
import Button from "../../components/reusable/button/Button";
import Footer from "./Footer";
import UserInfo from "../../components/userInfo";
import { East, West } from "@mui/icons-material";
import Frame2 from "../../static/assets/png/Frame_2.png";
import {
  ICON_CALL,
  LOGO_FasterCaptial,
  LOGO_RIID,
} from "../../static/assets/svg/Icons";

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
      <div className="frame1">
        <div className="light-faded-frame frame2">
          <div className="content">
            <h2>
              Ask. Connect. Grow. <br />
            </h2>
            <span className="poppins-semibold">
              Transforming Questions into Opportunities
            </span>
            <p className="subtext">
              Join a thriving ecosystem where connections are made, and wisdom
              is exchanged.
            </p>
            <Button label={"Book an Advisor"} variant={"cta"} />
          </div>
        </div>
      </div>
      <div className="frame5 signup-info">
        <div className="frame5-content">
          <h1 className="poppins-bold">
            Ask-It-All: Unlocking Wisdom, One Question At A Time!
          </h1>
          <p className="poppins-italic subtext">
            We offer specialized expertise, flexible scheduling, and a user
            friendly interface, we re-define the learning experience.
          </p>
          <div className="content-container">
            <Card>
              <div className="card">
                <h2>01</h2>
                <p className="poppins-semibold wrapped-text">
                  Sign Up For One Of Our Services{" "}
                </p>
                <img src={Frame6_1} />
              </div>
            </Card>
          </div>
        </div>
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
            <img src={ICON_CALL} />
            <h4>Personalized Video Calls</h4>
            <p>
              Seamlessly book one-on-one video calls with advisors to receive
              in-depth guidance and clarification.
            </p>
          </div>
        </div>
      </div>
      <div className="collab-frame">
        <h2>In collaboration with :</h2>
        <div className="collab-frame-content">
          <span className="logo">
            <img src={LOGO_RIID} />
          </span>
          <span className="logo">
            <img src={LOGO_FasterCaptial} />
          </span>
        </div>
      </div>
      <div className="frame6">
        <h2>Client Testimonials:</h2>
        <div className="flex-content">
          <img src={Frame2} />
          <div className="frame6-content">
            <h1 className="poppins-medium">What do they think</h1>
            <UserInfo
              title="Samantha Sench"
              subtitle={"Student at University"}
            />
            <p style={{ color: "#212121" }}>
              “ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor x ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. “
            </p>
            <span>
              <IconButton>
                <West className="color-primary" />
              </IconButton>
              <IconButton>
                <East className="color-primary" />
              </IconButton>
            </span>
          </div>
        </div>
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
      <div className="frame7">
        <Footer />
      </div>
    </div>
  );
}

export default Website;
