import React, { useState } from "react";
import "./AddCredit.scss";
import Navbar from "../../components/navigation";
import IconButton from "@mui/material/IconButton";
import { ArrowBack } from "@mui/icons-material";
import { useNavigate } from "react-router";
import { HOMEPAGE } from "../../utils/constants";
import Coin from "../../assets/images/coins.png";
import { makeApiCall } from "../../api/config";
import { urls } from "../../api/apiUrl";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../../redux/features/user/userSlice";
import Snackbar from "../../components/Snackbar";

function AddCredit() {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const [amount, setAmount] = useState(-1);

  const addAmount = (amount) => {
    setAmount(amount);
  };

  const [snackbar, setSnackbar] = useState(null);

  const addCredit = async () => {
    try {
      if (amount > 0) {
        const userId = localStorage.getItem("userId");
        const body = {
          totalCreditsAvailable: user.totalCreditsAvailable + amount,
        };
        const data = await makeApiCall(
          "PUT",
          `${urls.userDetails}/${userId}`,
          body
        );

        if (data.success) {
          setSnackbar({
            message: `₹ ${amount} added successfully`,
            color: "green",
            icon: "✔",
          });
          dispatch(setUser(data.user));
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
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
          {snackbar && (
            <Snackbar
              message={snackbar.message}
              color={snackbar.color}
              icon={snackbar.icon}
            />
          )}
          <div className="add_credits">
            <h1> Add Credits </h1>
            <h2>Available Balance  ₹ {user.totalCreditsAvailable}</h2>
            <div className="amount_container">
              <button onClick={() => addAmount(100)}>₹ 100</button>
              <button onClick={() => addAmount(200)}>₹ 200</button>
              <button onClick={() => addAmount(300)}>₹ 300</button>
              <button onClick={() => addAmount(400)}>₹ 400</button>
              <button onClick={() => addAmount(500)}>₹ 500</button>
              <button onClick={() => addAmount(600)}>₹ 600</button>
            </div>
          </div>

          <div className="amount_section">
            <img src={Coin} alt="Coin" />
            <input
              onChange={(e) => setAmount(e.target.value)}
              type="number"
              placeholder="Enter Amount"
              className="amount_input"
              value={amount === -1 ? "" : amount}
            />
            <hr className="custom-hr" />
            <div className="amount_section_buttons">
              <button className="cancel">Cancel</button>
              <button className="submit" onClick={addCredit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddCredit;
