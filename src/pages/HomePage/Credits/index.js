import React from "react";
import "./Credits.scss";
import { useNavigate } from "react-router-dom/dist";
import { Card, Grid, IconButton, TextField } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";
import { HOMEPAGE } from "../../../utils/constants";
import { CASHBACK_IMAGE } from "../../../static/assets/svg/Icons";
import Button from "../../../components/reusable/button/Button";

function Credits() {
  const navigate = useNavigate();
  return (
    <div className="credits-page">
      <div className="credits-title">
        <IconButton className="btn-back" onClick={() => navigate(HOMEPAGE)}>
          <ArrowBack />
        </IconButton>
      </div>
      <div className="credits-content">
        <div className="credits-left-section">
          <p className="poppins-medium">Add Credits</p>
          <p className="poppins-regular">Available Balance &#8377; 0</p>
          <Card className="credits-card">
            <div className="credits-card-row">
              <Button className={"btn-cashback"}>
                <span className="poppins-regular">&#8377;100</span>
              </Button>
              <Button className={"btn-cashback"}>
                <span className="poppins-regular">&#8377;200</span>
              </Button>
              <Button className={"btn-cashback"}>
                <span className="poppins-regular">&#8377;300</span>
              </Button>
            </div>
            <div className="credits-card-row">
              <Button className={"btn-cashback"}>
                <span className="poppins-regular">&#8377;400</span>
              </Button>
              <Button className={"btn-cashback"}>
                <span className="poppins-regular">&#8377;500</span>
              </Button>
              <Button className={"btn-cashback"}>
                <span className="poppins-regular">&#8377;600</span>
              </Button>
            </div>
          </Card>
        </div>
        <div className="credits-right-section">
          <img src={CASHBACK_IMAGE} />
          <TextField
            variant="standard"
            placeholder="Enter value"
            className="amount"
          />
          <div className="credit-actions">
            <Button variant={"btn-cancel"}>Cancel</Button>
            <Button variant={"cta"}>Submit</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Credits;
