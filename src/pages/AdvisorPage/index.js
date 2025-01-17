import React from "react";
import "./TermsPage.scss";
import Navbar from "../../components/navigation";
import IconButton from "@mui/material/IconButton";
import { ArrowBack } from "@mui/icons-material";
import TermsContent from "./TermsContent";
import { useNavigate } from "react-router";
import { HOMEPAGE } from "../../utils/constants";

function AdvisorPage() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="terms-page">
        <div className="terms-title">
          <IconButton className="btn-back" onClick={() => navigate(HOMEPAGE)}>
            <ArrowBack />
          </IconButton>
          <h1>Terms and Conditions</h1>
        </div>
        <div className="terms-content-container">
          <h3>Your Agreement</h3>
          <TermsContent>
            <div className="terms-actions">
              <button className="secondary poppins-semibold">Cancel</button>
              <button className="cta poppins-semibold">Agree</button>
            </div>
          </TermsContent>
        </div>
      </div>
    </div>
  );
}

export default AdvisorPage;
