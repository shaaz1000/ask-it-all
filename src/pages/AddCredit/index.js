import React from "react";
import "./AddCredit.scss";
import Navbar from "../../components/navigation";
import IconButton from "@mui/material/IconButton";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router";
import { HOMEPAGE } from "../../utils/constants";
import Coin from "../../assets/images/coins.png"

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
        <div className="section_1">
          <div className="add_credits">
           <h1> Add Credits </h1>
            <h2>Available Balance  ₹ 0</h2>

            <div className="amount_container">
              <button>₹ 100</button>
              <button>₹ 200</button>
              <button>₹ 300</button>
              <button>₹ 400</button>
              <button>₹ 500</button>
              <button>₹ 600</button>
            </div>

          </div>

          <div className="amount_section">
          <img src={Coin} alt="Coin" />
          <input type="number" placeholder="Enter Amount" className="amount_input" />
          <hr className="custom-hr"/>
          <div className="amount_section_buttons">
            <button className="cancel">Cancel</button>
            <button className="submit">Submit</button>
            
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCredit;
