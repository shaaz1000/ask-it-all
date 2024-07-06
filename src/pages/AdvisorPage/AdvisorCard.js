import React from "react";
import { useNavigate } from "react-router-dom";
import "./AdvisorCard.scss";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import Avatar from "../../assets/images/Avatar.png";
import { calculateTotalExperience } from "../../utils/Validators";

const AdvisorCard = ({ advisor }) => {
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");


  const handleCardClick = (e) => {
    e.stopPropagation();
    navigate(`/advisor_profile`, { state: { advisor } });
  };

  const handleConnectClick = (e) => {
    e.stopPropagation();
    console.log("Connect button clicked");
    if (!userId){
      navigate(`/login`);
    }
    navigate(`/pop`, { state: { advisor } });

    // Additional logic for connect button can go here
  };

  return (
    <div className="advisor-card" onClick={handleCardClick}>
      <div className="advisor-card__header">
        <img src={Avatar} alt={advisor?.name} className="advisor-card__image" />
        <div className="advisor-card__info">
          <h3 className="advisor-card__name">{advisor.name}</h3>
          <p className="advisor-card__title">
            {advisor?.category?.categoryName} Expert
          </p>
          <p className="advisor-card__experience">
            {calculateTotalExperience(advisor?.workExperience)} years
          </p>
          <div className="advisor-card__stars">
            {[...Array(5)].map((_, i) => (
              <StarBorderIcon
                key={i}
                className={`advisor-card__star ${
                  i < advisor?.stars ? "filled" : ""
                }`}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="advisor-card__additional">
        <p className="advisor-card__minutes">
          {advisor?.minutesCompleted ?? 50} mins completed
        </p>
        <p className="advisor-card__candidates">
          Advised {advisor?.candidatesAdvised ?? 10} candidates
        </p>
        <div className="advisor-card__footer">
          <p className="advisor-card__rate">
            ₹{advisor?.ratePerHour / 60}/- per minute
          </p>
          <button
            className="advisor-card__connect"
            onClick={handleConnectClick}
          >
            Connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvisorCard;
