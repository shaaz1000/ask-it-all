import { call, put, takeLatest } from "redux-saga/effects";
import { setUser } from "../features/user/userSlice";
import { makeApiCall } from "../../api/config";

function* handleUserSignUp(action) {
  try {
    const response = yield call(
      makeApiCall,
      action.method,
      action.url,
      action.payload
    );
    console.log(response, "/// res the ponse");
    yield put(setUser(response.user));
  } catch (error) {
    console.error("Sign-up failed:", error);
    // Handle error appropriately
  }
}

export function* watchUserSignUp() {
  yield takeLatest(setUser.type, handleUserSignUp);
}
