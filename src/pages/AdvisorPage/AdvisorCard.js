import React from "react";
import { useHistory } from "react-router-dom";
import "./AdvisorCard.scss";
import starIcon from "./path-to-star-icon.png"; // Update the path to your star icon image

const AdvisorCard = ({ advisor }) => {
  const history = useHistory();

  const handleCardClick = () => {
    history.push(`/mentor-profile/${advisor.id}`);
  };

  const handleConnectClick = (e) => {
    e.stopPropagation();
    history.push(`/booking/${advisor.id}`);
  };

  return (
    <div className="advisor-card" onClick={handleCardClick}>
      <img
        src={advisor.image}
        alt={advisor.name}
        className="advisor-card__image"
      />
      <div className="advisor-card__info">
        <h3>{advisor.name}</h3>
        <p>{advisor.title}</p>
        <p>{advisor.experience}</p>
        <div className="advisor-card__stars">
          {[...Array(advisor.stars)].map((_, i) => (
            <img
              src={starIcon}
              alt="star"
              key={i}
              className="advisor-card__star"
            />
          ))}
        </div>
        <p>{advisor.minutesCompleted} mins completed</p>
        <p>Advised {advisor.candidatesAdvised} candidates</p>
        <p className="advisor-card__rate">₹{advisor.rate}/- per minute</p>
      </div>
      <button className="advisor-card__connect" onClick={handleConnectClick}>
        Connect
      </button>
    </div>
  );
};

export default AdvisorCard;
