import React from "react";
import "./AddCredit.scss";
import Navbar from "../../components/navigation";
import IconButton from "@mui/material/IconButton";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router";
import { HOMEPAGE } from "../../utils/constants";

function AddCredit() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="terms-page">
        <div className="terms-title">
          <IconButton className="btn-back" onClick={() => navigate(HOMEPAGE)}>
            <ArrowBack />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default AddCredit;
