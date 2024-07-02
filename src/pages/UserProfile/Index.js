import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { IconButton } from "@mui/material";
import { AddCircleOutline } from "@mui/icons-material";
import Modal from "../../components/reusable/modal/modal";
import ConfirmationPopup from "../../components/reusable/confirmationPopup/confirmationPopup"; // Import ConfirmationPopup component
import "./UserProfile.scss";
import {
  deleteEducation,
  deleteWorkExperience,
} from "../../redux/features/user/userSlice";
import { makeApiCall } from "../../api/config";
import { urls } from "../../api/apiUrl";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserProfile = () => {
  const { user, education, workExperience } = useSelector(
    (state) => state.user
  );
  const dispatch = useDispatch();
  const [isEducationModalOpen, setEducationModalOpen] = useState(false);
  const [isWorkExperienceModalOpen, setWorkExperienceModalOpen] =
    useState(false);
  const [profileDetails, setProfileDetails] = useState([]);
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [deleteType, setDeleteType] = useState(""); 
const [deleteIndex, setDeleteIndex] = useState(null);
  const userId = localStorage.getItem("userId");

  const handleAddEducation = () => {
    setEducationModalOpen(true);
  };

  const handleAddWorkExperience = () => {
    setWorkExperienceModalOpen(true);
  };

  
  
  // --------------------------------------------delete logic
  const handleConfirmDelete = async ({ isConfirmed, index }) => {
    setShowPopup(false);
    if (isConfirmed) {
      if (deleteType === "education") {
        await handleDeleteEducation(index);
      } else if (deleteType === "workExperience") {
        await handleDeleteWorkExperience(index);
      }
    }
  };
  
  const handleDeleteRequest = (type, index) => {
    setConfirmationMessage(`Are you sure you want to delete this ${type} detail?`);
    setDeleteType(type);
    setDeleteIndex(index);
    setShowPopup(true);
  };




  const handleDeleteEducation = async (index) => {

     try {
        if (userId) {
            const currentUserResponse = await makeApiCall(
                "GET",
                `${urls.userDetails + userId}`
            );
            let currentEducationArray = Array.isArray(currentUserResponse.user.education)
                ? currentUserResponse.user.education.slice()
                : [];
            currentEducationArray.splice(index, 1);
            const updatedEducationData = { education: currentEducationArray };
            await makeApiCall(
                "PUT",
                `${urls.userDetails + userId}`,
                updatedEducationData
            );
            toast.success("Education details deleted successfully!");
        }
        dispatch(deleteEducation(index));
    } catch (error) {
        console.error("Error deleting education details:", error);
        toast.error("Failed to delete education details.");
    }


  };
  
  const handleDeleteWorkExperience = async (index) => {
    // Existing logic

     try {
      if (userId) {
          const currentUserResponse = await makeApiCall(
              "GET",
              `${urls.userDetails + userId}`
          );
          let currentWorkExperienceArray = Array.isArray(currentUserResponse.user.workExperience)
              ? currentUserResponse.user.workExperience.slice()
              : [];
          currentWorkExperienceArray.splice(index, 1);
          const updatedWorkExperienceData = { workExperience: currentWorkExperienceArray };
          await makeApiCall(
              "PUT",
              `${urls.userDetails + userId}`,
              updatedWorkExperienceData
          );
          toast.success("Work experience details deleted successfully!");
      }
      dispatch(deleteWorkExperience(index));
  } catch (error) {
      console.error("Error deleting work experience details:", error);
      toast.error("Failed to delete work experience details.");
  }

  };



  const handleCancelDelete = () => {
    setShowPopup(false);
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
        // setShowConfirmation(false); // Close confirmation popup on escape key press
      }
    };

    const handleOutsideClick = (e) => {
      if (!e.target.closest(".modal-content")) {
        setEducationModalOpen(false);
        setWorkExperienceModalOpen(false);
        // setShowConfirmation(false); // Close confirmation popup on outside click
      }
    };

    const fetchUserProfile = async () => {
      try {
        const userProfile = await makeApiCall(
          "GET",
          `${urls.userDetails + userId}`
        );
        setProfileDetails(userProfile);
      } catch (error) {
        console.error("Error fetching user profile:", error);
      }
    };

    fetchUserProfile();

    document.addEventListener("keydown", handleEscapeKeyPress);
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("keydown", handleEscapeKeyPress);
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [userId]); // Empty dependency array ensures this effect runs only on mount

  const educationValidationSchema = Yup.object().shape({
    universityName: Yup.string()
      .required("University Name is required")
      .min(5, "University Name must be at least 5 characters")
      .max(70, "University Name must be at most 70 characters"),
    degree: Yup.string()
      .required("Degree is required")
      .min(2, "Degree must be at least 2 characters")
      .max(30, "Degree must be at most 30 characters"),
    passingYear: Yup.number()
      .required("Passing Year is required")
      .max(new Date().getFullYear(), "Passing Year cannot be in the future"),
    cgpa: Yup.number()
      .required("CGPA is required")
      .min(1, "CGPA must be at least 1")
      .max(10, "CGPA must be at most 10"),
  });

  const workExperienceValidationSchema = Yup.object().shape({
    companyName: Yup.string()
      .required("Company Name is required")
      .min(4, "Company Name must be at least 4 characters")
      .max(50, "Company Name must be less than 50 characters"),
    jobDescription: Yup.string()
      .required("Job Description is required")
      .min(50, "Job Description must be at least 50 characters")
      .max(500, "Job Description must be less than 500 characters"),
    designationHistory: Yup.array().of(
      Yup.object().shape({
        designation: Yup.string()
          .required("Designation is required")
          .min(2, "Designation must be at least 2 characters")
          .max(70, "Designation must be less than 70 characters"),
        fromDate: Yup.date()
          .nullable() // Allow null or empty string for initial state
          .required("From Date is required")
          .max(new Date(), "From Date cannot be in the future"),
        toDate: Yup.date()
          .nullable() // Allow null or empty string for initial state
          .required("To Date is required")
          .max(new Date(), "To Date cannot be in the future")
          .min(Yup.ref("fromDate"), "To Date cannot be before From Date"),
      })
    ),
  });

  const handleSubmitEducation = async (
    values,
    { setSubmitting, resetForm }
  ) => {
    if (userId) {
      try {
        const currentUserResponse = await makeApiCall(
          "GET",
          `${urls.userDetails + userId}`
        );
        let currentEducationArray = Array.isArray(
          currentUserResponse.user.education
        )
          ? currentUserResponse.user.education
          : [];
        currentEducationArray.push(values);
        const updatedEducationData = { education: currentEducationArray };
        await makeApiCall(
          "PUT",
          `${urls.userDetails + userId}`,
          updatedEducationData
        );
        toast.success("Education details updated successfully!");
        resetForm();
      } catch (error) {
        console.error("Error updating education details:", error);
        toast.error("Failed to update education details.");
      }
    }
    setSubmitting(false);
    setEducationModalOpen(false);
  };

  const handleSubmitWorkExperience = async (
    values,
    { setSubmitting, resetForm }
  ) => {
    try {
      const formData = {
        ...values,
        designationHistory: values.designationHistory.map((historyItem) => ({
          ...historyItem,
          fromDate: historyItem.fromDate || null,
          toDate: historyItem.toDate || null,
        })),
      };

      if (userId) {
        const currentUserResponse = await makeApiCall(
          "GET",
          `${urls.userDetails + userId}`
        );
        let currentWorkExperienceArray = Array.isArray(
          currentUserResponse.user.workExperience
        )
          ? currentUserResponse.user.workExperience
          : [];
        currentWorkExperienceArray.push(formData);
        const updatedWorkExperienceData = {
          workExperience: currentWorkExperienceArray,
        };
        await makeApiCall(
          "PUT",
          `${urls.userDetails + userId}`,
          updatedWorkExperienceData
        );
        toast.success("Work Experience details updated successfully!");
        resetForm();
      }
    } catch (error) {
      console.error("Error updating work experience details:", error);
      toast.error("Failed to update work experience details.");
    }

    setSubmitting(false);
    setWorkExperienceModalOpen(false);
  };

  return (
    <>
      <div className="profile">
        <ToastContainer />
        <div className="profile-header">
          <img
            src={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Unknown_person.jpg/1200px-Unknown_person.jpg"
            }
            alt="Profile"
            style={{ width: "100px", height: "100px" }}
          />
          <h2>{user.email ?? "AILA AILA"}</h2>
          <p className="credits">
            {user.totalCreditsAvailable ?? 1000} Credits
          </p>
          <p className="role">Mentee</p>
        </div>
        <div className="profile-section">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              maxWidth: "300px",
            }}
          >
            <h3 style={{ marginBottom: "24px" }}>Education</h3>
            <IconButton onClick={handleAddEducation}>
              <AddCircleOutline />
            </IconButton>
          </div>
          {profileDetails?.user?.education?.length > 0 ? (
            profileDetails?.user?.education?.map((edu, index) => (
              <div key={index} className="profile-item">
                <div>
                  <p>
                    <strong>{edu.universityName}</strong>
                  </p>
                  <p className="edu_degree">{edu.degree}</p>
                </div>
                <button
                  className="delete-button"
                  onClick={() => handleDeleteRequest("education", index)}
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
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              maxWidth: "300px",
            }}
          >
            <h3 style={{ marginBottom: "24px" }}>Work Experience</h3>
            <IconButton onClick={handleAddWorkExperience}>
              <AddCircleOutline />
            </IconButton>
          </div>
          {profileDetails?.user?.workExperience?.length > 0 ? (
            profileDetails?.user?.workExperience.map((work, index) => (
              <div key={index} className="profile-item">
                <div>
                  <p>
                    <strong>{work?.companyName}</strong>
                  </p>
                  <p className="edu_degree">{work.jobDescription}</p>
                </div>
                <button
                  className="delete-button"
                  // onClick={() => handleDeleteWorkExperience(index)}
                  onClick={() => handleDeleteRequest("workExperience", index)}

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
          <Formik
            initialValues={{
              universityName: "",
              degree: "",
              passingYear: "",
              cgpa: "",
            }}
            validationSchema={educationValidationSchema}
            onSubmit={handleSubmitEducation}
          >
            {({ isSubmitting }) => (
              <Form>
                <div className="form-group">
                  <label htmlFor="universityName">University Name</label>
                  <Field
                    type="text"
                    id="universityName"
                    name="universityName"
                  />
                  <ErrorMessage
                    name="universityName"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="degree">Degree</label>
                  <Field type="text" id="degree" name="degree" />
                  <ErrorMessage
                    name="degree"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="passingYear">Passing Year</label>
                  <Field type="number" id="passingYear" name="passingYear" />
                  <ErrorMessage
                    name="passingYear"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cgpa">CGPA</label>
                  <Field type="number" step="0.01" id="cgpa" name="cgpa" />
                  <ErrorMessage
                    name="cgpa"
                    component="div"
                    className="error-message"
                  />
                </div>
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </Modal>

        {/* Work Experience Modal */}
        <Modal
          show={isWorkExperienceModalOpen}
          handleClose={closeWorkExperienceModal}
        >
          <h2>Add Work Experience</h2>
          <Formik
            initialValues={{
              companyName: "",
              jobDescription: "",
              designationHistory: [
                {
                  designation: "",
                  fromDate: "",
                  toDate: "",
                },
              ],
            }}
            validationSchema={workExperienceValidationSchema}
            onSubmit={handleSubmitWorkExperience}
          >
            {({ values, isSubmitting }) => (
              <Form>
                <div className="form-group">
                  <label htmlFor="companyName">Company Name</label>
                  <Field type="text" id="companyName" name="companyName" />
                  <ErrorMessage
                    name="companyName"
                    component="div"
                    className="error-message"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="jobDescription">Job Description</label>
                  <Field
                    as="textarea"
                    id="jobDescription"
                    name="jobDescription"
                    style={{
                      width: "100%",
                      minHeight: "100px",
                      marginBottom: "10px",
                    }}
                  />
                  <ErrorMessage
                    name="jobDescription"
                    component="div"
                    className="error-message"
                  />
                </div>
                {values.designationHistory.map((designation, index) => (
                  <div key={index} className="designation-group">
                    <div className="form-group">
                      <label
                        htmlFor={`designationHistory[${index}].designation`}
                      >
                        Designation
                      </label>
                      <Field
                        type="text"
                        id={`designationHistory[${index}].designation`}
                        name={`designationHistory[${index}].designation`}
                      />
                      <ErrorMessage
                        name={`designationHistory[${index}].designation`}
                        component="div"
                        className="error-message"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor={`designationHistory[${index}].fromDate`}>
                        From Date
                      </label>
                      <Field
                        type="date"
                        id={`designationHistory[${index}].fromDate`}
                        name={`designationHistory[${index}].fromDate`}
                      />
                      <ErrorMessage
                        name={`designationHistory[${index}].fromDate`}
                        component="div"
                        className="error-message"
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor={`designationHistory[${index}].toDate`}>
                        To Date
                      </label>
                      <Field
                        type="date"
                        id={`designationHistory[${index}].toDate`}
                        name={`designationHistory[${index}].toDate`}
                      />
                      <ErrorMessage
                        name={`designationHistory[${index}].toDate`}
                        component="div"
                        className="error-message"
                      />
                    </div>
                  </div>
                ))}
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </Modal>
        {showPopup && (
  <div className="popup">
    <div className="popup-inner">
      <h2>{confirmationMessage}</h2>
      <button onClick={() => handleConfirmDelete({ isConfirmed: false, index: deleteIndex })}>Cancel</button>
      <button onClick={() => handleConfirmDelete({ isConfirmed: true, index: deleteIndex })}>Delete</button>

    </div>
  </div>
)}
      </div>
    </>
  );
};

export default UserProfile;
