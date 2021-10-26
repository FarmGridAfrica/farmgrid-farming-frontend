import axios from "./axios";
import { call, put, takeLatest, spawn } from "redux-saga/effects";

import { GET_REFERRAL_REQUEST, POST_REFERRAL_REQUEST } from "../types";
import { clientErrorMessage, delay } from "./reusable";

import {
  getReferralFailure,
  getReferralLoading,
  getReferralSuccess,
  postReferralFailure,
  postReferralLoading,
  postReferralSuccess,
} from "../action";

const ajaxDBCalls = {
  postReferral: async ({ formData, refId }) => {
    if (refId) {
      const response = await axios.post(
        `/auth/register?refId=${refId}`,
        formData
      );
      return response;
    } else {
      const response = await axios.post(`/auth/register`, formData);
      return response;
    }
  },
  getReferral: async (formData) => {
    const response = await axios.post(`/auth/referral`, formData);
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
function* getReferral({ payload }) {
  try {
    yield put(getReferralLoading(true));

    const res = yield call(ajaxDBCalls.getReferral, payload);

    yield put(getReferralSuccess(res.data));

    yield put(getReferralLoading(false));
  } catch (err) {
    let errorMessage = "";
    if (err.request) errorMessage = clientErrorMessage;

    if (err.response) {
      console.log("something is wrong", err.response.data);

      const { message } = err.response.data;
      errorMessage = message;
    }

    yield put(getReferralFailure(errorMessage));
    yield put(getReferralLoading(false));
    yield delay();
    yield put(getReferralFailure(""));
  }
}

//Watchers
function* postReferralWatcher() {
  yield takeLatest(POST_REFERRAL_REQUEST, postReferral);
}
function* getReferralWatcher() {
  yield takeLatest(GET_REFERRAL_REQUEST, getReferral);
}

export default function* authSagas() {
  yield spawn(postReferralWatcher);
  yield spawn(getReferralWatcher);
}
