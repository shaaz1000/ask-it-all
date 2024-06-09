import { all } from "redux-saga/effects";
import { watchUserSignUp } from "./userSaga";

export default function* rootSaga() {
  yield all([watchUserSignUp()]);
}
