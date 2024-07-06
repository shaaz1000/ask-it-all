import React, { useState } from "react";
import "./Advisor.scss";
import { useNavigate } from "react-router";
import { HOMEPAGE } from "../../../utils/constants";
import { ArrowBack } from "@mui/icons-material";
import SearchField from "../../../components/reusable/searchField/SearchField";
import {
  Avatar,
  Card,
  CardContent,
  Divider,
  FormControl,
  Grid,
  IconButton,
  Select,
  Typography,
} from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import Button from "../../../components/reusable/button/Button";
import { MOCK_USER_IMAGE } from "../../../static/assets/svg/Icons";
import Ratings from "../../../components/ratings/Ratings";

function Advisor() {
  const navigate = useNavigate();
  const [selectedFilter, setSelectedFilter] = useState("");

  const items = new Array(6).fill({
    title: "Hello",
    mins: 2500,
    noOfCandidates: 12,
    amount: 25,
    name: "Rohan Verma",
    expertIn: "Finance Expert",
    experience: "3 Years",
  });

  return (
    <div className="advisor-page">
      <div className="advisor-heading">
        <div className="advisor-title">
          <IconButton className="btn-back" onClick={() => navigate(HOMEPAGE)}>
            <ArrowBack />
          </IconButton>
          <SearchField placeholder={"Search a name"} />
          <FormControl sx={{ minWidth: 120 }}>
            <InputLabel id="demo-controlled-open-select-label">
              Filter
            </InputLabel>
            <Select
              value={selectedFilter ?? " "}
              defaultValue={selectedFilter}
              onChange={(e) => setSelectedFilter(e.target.value)}
              label="Test"
              labelId="demo-controlled-open-select-label"
            >
              <MenuItem value={"test"}>Filter 1</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="advisor-balance">
          <p>Balance - $100</p>
          <button className="btn-add-credit">Add Credit</button>
        </div>
      </div>
      <div className="advisor-content">
        <p className="poppins-light">Finance</p>
        <Grid container spacing={4}>
          {items.map((item, index) => (
            <Grid item xs={11} sm={4} key={index}>
              <Card className="advisor-card">
                <CardContent className="advisor-card-content">
                  <div className="advisor-card-head">
                    <Avatar
                      src={MOCK_USER_IMAGE}
                      sx={{ width: 100, height: 100 }}
                    />
                    <div className="card-head-content">
                      <p className="card-head-name">{item?.name}</p>
                      <p className="poppins-regular">{item?.expertIn}</p>
                      <p className="poppins-regular">
                        Experience - {item?.experience}
                      </p>
                      <Ratings value={5}/>
                    </div>
                  </div>
                  <Divider />
                  <p className="poppins-regular">{item?.mins} mins completed.</p>
                  <p className="poppins-regular">
                    Advised {item?.noOfCandidates} candidates.
                  </p>
                  <div className="card-action">
                    <p className="poppins-regular">
                      &#8377;{item?.amount}/- per minute
                    </p>
                    <Button variant={"cta"} className="btn-connect">
                      <span className="poppins-semibold">Connect</span>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}

export default Advisor;
