import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    email: "",
    password: "",
    mentorsList: [],
    contactNumber: "",
    totalCreditsAvailable: 0,
    education: [],
    workExperience: [],
    _id: "",
    createdAt: "",
    updatedAt: "",
  },
  token: "",
  email: "",
  password: "",
  mentorsList: [],
  contactNumber: "",
  totalCreditsAvailable: 0,
  education: [],
  workExperience: [],
  _id: "",
  createdAt: "",
  updatedAt: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
    addEducation: (state, action) => {
      state.user.education.push(action.payload);
    },
    addWorkExperience: (state, action) => {
      state.user.workExperience.push(action.payload);
    },
    deleteEducation: (state, action) => {
      state.user.education = state.education.filter(
        (_, index) => index !== action.payload
      );
    },
    deleteWorkExperience: (state, action) => {
      state.user.workExperience = state.workExperience.filter(
        (_, index) => index !== action.payload
      );
    },
  },
});

export const {
  setUser,
  addEducation,
  addWorkExperience,
  deleteEducation,
  deleteWorkExperience,
  setToken,
} = userSlice.actions;

export default userSlice.reducer;
