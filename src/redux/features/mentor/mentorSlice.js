import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mentor: {},
  token: "",
};

const mentorSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setMentor: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },
  },
});

export const { setMentor, setToken } = mentorSlice.actions;

export default mentorSlice.reducer;
