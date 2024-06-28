import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IconButton } from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";
import Modal from "../../components/reusable/modal/modal";
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
  const [isEducationModalOpen, setEducationModalOpen] = useState(false);
  const [isWorkExperienceModalOpen, setWorkExperienceModalOpen] = useState(false);
  const [educationDetails, setEducationDetails] = useState({
    universityName: "",
    degree: "",
    passingYear: "",
    cgpa: ""
  });
  const [workExperienceDetails, setWorkExperienceDetails] = useState({
    companyName: "",
    designationHistory: [{ designation: "", fromDate: "", toDate: "" }],
    jobDescription: ""
  });

  const handleAddEducation = () => {
    setEducationModalOpen(true);
  };

  const handleAddWorkExperience = () => {
    setWorkExperienceModalOpen(true);
  };

  const handleDeleteEducation = (index) => {
    dispatch(deleteEducation(index));
  };

  const handleDeleteWorkExperience = (index) => {
    dispatch(deleteWorkExperience(index));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEducationDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleWorkExperienceChange = (e) => {
    const { name, value } = e.target;
    setWorkExperienceDetails(prevDetails => ({
      ...prevDetails,
      [name]: value
    }));
  };

  const handleDesignationHistoryChange = (index, e) => {
    const { name, value } = e.target;
    const updatedDesignationHistory = workExperienceDetails.designationHistory.map((designation, i) => (
      i === index ? { ...designation, [name]: value } : designation
    ));
    setWorkExperienceDetails(prevDetails => ({
      ...prevDetails,
      designationHistory: updatedDesignationHistory
    }));
  };

  const addDesignation = () => {
    setWorkExperienceDetails(prevDetails => ({
      ...prevDetails,
      designationHistory: [...prevDetails.designationHistory, { designation: "", fromDate: "", toDate: "" }]
    }));
  };

  const removeDesignation = (index) => {
    setWorkExperienceDetails(prevDetails => ({
      ...prevDetails,
      designationHistory: prevDetails.designationHistory.filter((_, i) => i !== index)
    }));
  };

  const handleSubmitEducation = (e) => {
    e.preventDefault();
    console.log("Education Details:", educationDetails);
    setEducationModalOpen(false);
  };

  const handleSubmitWorkExperience = (e) => {
    e.preventDefault();
    // Dispatch action to add work experience details
    // Example: dispatch(addWorkExperience(workExperienceDetails));
    setWorkExperienceModalOpen(false);
  };

  const closeEducationModal = () => {
    setEducationModalOpen(false);
  };

  const closeWorkExperienceModal = () => {
    setWorkExperienceModalOpen(false);
  };

  useEffect(() => {
    const handleEscapeKeyPress = (e) => {
      if (e.key === "Escape") {
        setEducationModalOpen(false);
        setWorkExperienceModalOpen(false);
      }
    };

    const handleOutsideClick = (e) => {
      if (!e.target.closest(".modal-content")) {
        setEducationModalOpen(false);
        setWorkExperienceModalOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscapeKeyPress);
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("keydown", handleEscapeKeyPress);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

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

      {/* Education Modal */}
      <Modal show={isEducationModalOpen} handleClose={closeEducationModal}>
        <h2>Add Education</h2>
        <form onSubmit={handleSubmitEducation}>
          <div className="form-group">
            <label htmlFor="universityName">University Name</label>
            <input 
              type="text" 
              id="universityName" 
              name="universityName" 
              value={educationDetails.universityName} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="degree">Degree</label>
            <input 
              type="text" 
              id="degree" 
              name="degree" 
              value={educationDetails.degree} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="passingYear">Passing Year</label>
            <input 
              type="number" 
              id="passingYear" 
              name="passingYear" 
              value={educationDetails.passingYear} 
              onChange={handleChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="cgpa">CGPA</label>
            <input 
              type="number" 
              step="0.01" 
              id="cgpa" 
              name="cgpa" 
              value={educationDetails.cgpa} 
              onChange={handleChange} 
              required 
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </Modal>

      {/* Work Experience Modal */}
      <Modal show={isWorkExperienceModalOpen} handleClose={closeWorkExperienceModal}>
        <h2>Add Work Experience</h2>
        <form onSubmit={handleSubmitWorkExperience}>
          <div className="form-group">
            <label htmlFor="companyName">Company Name</label>
            <input 
              type="text" 
              id="companyName" 
              name="companyName" 
              value={workExperienceDetails.companyName} 
              onChange={handleWorkExperienceChange} 
              required 
            />
          </div>
          <div className="form-group">
            <label htmlFor="jobDescription">Job Description</label>
            <textarea 
              id="jobDescription" 
              name="jobDescription" 
              value={workExperienceDetails.jobDescription} 
              onChange={handleWorkExperienceChange} 
              style={{ width: "100%", minHeight: "100px", marginBottom: "10px" }} // Full width, new line
              required 
            />
          </div>
       
          {workExperienceDetails.designationHistory.map((designation, index) => (
            <div key={index} className="designation-group">
              <div className="form-group">
                <label htmlFor={`designation-${index}`}>Designation</label>
                <input 
                  type="text" 
                  id={`designation-${index}`} 
                  name="designation" 
                  value={designation.designation} 
                  onChange={(e) => handleDesignationHistoryChange(index, e)} 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor={`fromDate-${index}`}>From Date</label>
                <input 
                  type="date" 
                  id={`fromDate-${index}`} 
                  name="fromDate" 
                  value={designation.fromDate} 
                  onChange={(e) => handleDesignationHistoryChange(index, e)} 
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor={`toDate-${index}`}>To Date</label>
                <input 
                  type="date" 
                  id={`toDate-${index}`} 
                  name="toDate" 
                  value={designation.toDate} 
                  onChange={(e) => handleDesignationHistoryChange(index, e)} 
                  required 
                />
              </div>
              {index > 0 && (
                <button type="button" onClick={() => removeDesignation(index)}>Remove</button>
              )}
            </div>
          ))}
          <button type="button" onClick={addDesignation}>Add Designation</button>
          <button type="submit">Submit</button>
        </form>
      </Modal>
    </div>
  );
};

export default UserProfile;
