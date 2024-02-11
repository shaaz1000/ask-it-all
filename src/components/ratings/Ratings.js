import React from "react";
import StarSvg from "../../static/assets/svg/icons/Star.svg";

function Ratings({ value }) {
  const rating = new Array(value).fill(value);
  return (
    <div className="Rating">
      {rating.map((i) => (
        <img src={StarSvg} />
      ))}
    </div>
  );
}

export default Ratings;
