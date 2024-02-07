import React from "react";
import "./_Website.scss";
import Header from "../../components/header/Header";
import { Stack } from "@mui/material";
import QuestionCard from "../../components/reusable/QuestionCard";

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
      <div className="frame1" />
      <div className="frame2">
        <h2>Top Questions of the week:</h2>
        <Stack direction={"row"}>
          {data.map((i) => (
            <QuestionCard data={i} />
          ))}
        </Stack>
      </div>
    </div>
  );
}

export default Website;
