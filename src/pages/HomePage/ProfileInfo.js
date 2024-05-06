import { Avatar } from "@mui/material";
import React from "react";
import { MOCK_USER_IMAGE } from "../../static/assets/svg/Icons";

function ProfileInfo({ userName, creditCount, userRole }) {
  return (
    <div className="profile-info">
      <Avatar className="profile-avatar" src={MOCK_USER_IMAGE} />
      <p className="poppins-semibold">{userName}</p>
      <p className="poppins-semibold" style={{ color: "#EB5757" }}>
        {creditCount} Credits
      </p>
      <p style={{ color: "gray" }}>
        {userRole}
      </p>
    </div>
  );
}

export default ProfileInfo;
