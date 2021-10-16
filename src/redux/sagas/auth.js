import axios from "./axios";
import { call, put, takeLatest, spawn } from "redux-saga/effects";

import { POST_REFERRAL_REQUEST } from "../types";
import { clientErrorMessage, delay } from "./reusable";

import {
  postReferralFailure,
  postReferralLoading,
  postReferralSuccess,
} from "../action";

const ajaxDBCalls = {
  postReferral: async ({ formData, refId }) => {
    const response = await axios.post(
      `/auth/register?refId=${refId}`,
      formData
    );
    return response;
  },
};

function* postReferral({ payload }) {
  try {
    yield put(postReferralLoading(true));

    const res = yield call(ajaxDBCalls.postReferral, payload);

    yield put(postReferralSuccess(res.data));

    yield put(postReferralLoading(false));
  } catch (err) {
    let errorMessage = "";
    if (err.request) errorMessage = clientErrorMessage;

    if (err.response) {
      console.log("something is wrong", err.response.data);

      const { message } = err.response.data;
      errorMessage = message;
    }

    yield put(postReferralFailure(errorMessage));
    yield put(postReferralLoading(false));
    yield delay();
    yield put(postReferralFailure(""));
  }
}

//Watchers
function* postReferralWatcher() {
  yield takeLatest(POST_REFERRAL_REQUEST, postReferral);
}

export default function* authSagas() {
  yield spawn(postReferralWatcher);
}
