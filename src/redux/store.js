import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import userReducer from "./features/user/userSlice";
import authReducer from "./features/auth/authSlice";
import mentorReducer from "./features/mentor/mentorSlice";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    mentor: mentorReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware().concat(sagaMiddleware),
  devTools: process.env.NODE_ENV !== "production",
});

// sagaMiddleware.run(rootSaga);

export default store;
