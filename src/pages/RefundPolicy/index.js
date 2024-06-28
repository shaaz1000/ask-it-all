import React from "react";
import "./RefundPage.scss";
import Navbar from "../../components/navigation";
import IconButton from "@mui/material/IconButton";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router";
import { HOMEPAGE } from "../../utils/constants";
import RefundPolicyContent from "./RefundContent";

function RefundPolicyPage() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <div className="terms-page">
        <div className="terms-title">
          <IconButton className="btn-back" onClick={() => navigate(HOMEPAGE)}>
            <ArrowBack />
          </IconButton>
          <h1>Refund Policy</h1>
        </div>
        <div className="terms-content-container">
          {/* <h3>Agreement</h3> */}
          <RefundPolicyContent>
            <div className="terms-actions">
              <button className="secondary poppins-semibold">Cancel</button>
              <button className="cta poppins-semibold">Agree</button>
            </div>
          </RefundPolicyContent>
        </div>
      </div>
    </div>
  );
}

export default RefundPolicyPage;
