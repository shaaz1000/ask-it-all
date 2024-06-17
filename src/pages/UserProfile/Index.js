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
          src={"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg"}
          alt="Profile"
          style={{width:"100px",height:"100px"}}
        />
        <h2>{user.email ?? "AILA AILA"}</h2>
        <p className="credits">{user.totalCreditsAvailable ?? 1000} Credits</p>
        <p className="role">Mentee</p>
      </div>
      <div className="profile-section">
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"300px"}}>
        <h3 style={{marginBottom:'24px'}}>Education</h3>
        <IconButton onClick={handleAddEducation}>
          <AddCircleOutline />
        </IconButton>
        </div>
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
        
      </div>
      <div className="profile-section">
      <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",width:"300px"}}>
        <h3 style={{marginBottom:'24px'}}>Work Experience</h3>
        <IconButton onClick={handleAddWorkExperience}>
          <AddCircleOutline />
        </IconButton>
        </div>
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
       
      </div>
    </div>
  );
};

export default UserProfile;
