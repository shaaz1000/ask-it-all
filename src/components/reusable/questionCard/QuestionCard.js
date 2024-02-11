import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  Stack,
} from "@mui/material";
import React from "react";
import "./_QuestionCard.scss";
import Ratings from "../../ratings/Ratings";

function QuestionCard({ data }) {
  return (
    <Card className="QuestionCard">
      <CardContent>
        <p className="userName">{data?.userName}</p>
        <p>Lorem ipsum dolor sit amet</p>
        <div className="userDetails"></div>
      </CardContent>
      <CardActionArea>
        <Stack direction="row" spacing={2}>
          <Stack direction="column" spacing={1} style={{marginLeft: "10px"}}>
            <Avatar />
            <p>Test Name</p>
          </Stack>
          <Stack direction={"column"}>
            <p>Product Designer</p>
            <Ratings value={2} />
            <p>16 questions answered</p>
          </Stack>
        </Stack>
      </CardActionArea>
    </Card>
  );
}

export default QuestionCard;
