import React from "react";
import "./PrivacyPage.scss";
import Navbar from "../../components/navigation";
import IconButton from "@mui/material/IconButton";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router";
import { HOMEPAGE } from "../../utils/constants";
import PrivacyPolicyContent from "./PolicyContent";

function PolicyPage() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="terms-page">
        <div className="terms-title">
          <IconButton className="btn-back" onClick={() => navigate(HOMEPAGE)}>
            <ArrowBack />
          </IconButton>
          <h1>Privacy Policy</h1>
        </div>
        <div className="terms-content-container">
          <h3>Agreement</h3>
          <PrivacyPolicyContent>
            <div className="terms-actions">
              <button className="secondary poppins-semibold">Cancel</button>
              <button className="cta poppins-semibold">Agree</button>
            </div>
          </PrivacyPolicyContent>
        </div>
      </div>
    </div>
  );
}

export default PolicyPage;
