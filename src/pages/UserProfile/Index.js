import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IconButton } from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";
import "./UserProfile.scss";
import {
  deleteEducation,
  deleteWorkExperience,
} from "../../redux/features/user/userSlice";

const UserProfile = () => {
  const { user, education, workExperience } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();

  const handleAddEducation = () => {
    // Open modal to add education
  };

  const handleAddWorkExperience = () => {
    // Open modal to add work experience
  };

  const handleDeleteEducation = (index) => {
    dispatch(deleteEducation(index));
  };

  const handleDeleteWorkExperience = (index) => {
    dispatch(deleteWorkExperience(index));
  };

  return (
    <div className="profile">
      <div className="profile-header">
        <img
          src="/path/to/profile-image.jpg"
          alt="Profile"
          className="profile-image"
        />
        <h2>{user.email ?? "AILA AILA"}</h2>
        <p className="credits">{user.totalCreditsAvailable ?? 1000} Credits</p>
        <p className="role">Mentee</p>
      </div>
      <div className="profile-section">
        <h3>Education</h3>
        {education.length > 0 ? (
          education.map((edu, index) => (
            <div key={index} className="profile-item">
              <p>
                <strong>{edu.institution}</strong>
              </p>
              <p>{edu.degree}</p>
              <button
                className="delete-button"
                onClick={() => handleDeleteEducation(index)}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No education details available</p>
        )}
        <IconButton onClick={handleAddEducation}>
          <AddCircleOutline />
        </IconButton>
      </div>
      <div className="profile-section">
        <h3>Work Experience</h3>
        {workExperience.length > 0 ? (
          workExperience.map((work, index) => (
            <div key={index} className="profile-item">
              <p>
                <strong>{work.company}</strong>
              </p>
              <p>{work.position}</p>
              <p>{work.description}</p>
              <button
                className="delete-button"
                onClick={() => handleDeleteWorkExperience(index)}
              >
                Delete
              </button>
            </div>
          ))
        ) : (
          <p>No work experience details available</p>
        )}
        <IconButton onClick={handleAddWorkExperience}>
          <AddCircleOutline />
        </IconButton>
      </div>
    </div>
  );
};

export default UserProfile;
