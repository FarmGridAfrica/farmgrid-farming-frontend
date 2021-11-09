import axios from "./axios";
import { call, put, takeLatest, spawn } from "redux-saga/effects";

import {
  GET_REFERRAL_REQUEST,
  LOGIN_REQUEST,
  POST_REFERRAL_REQUEST,
} from "../types";
import { clientErrorMessage, delay } from "./reusable";

import {
  getReferralFailure,
  getReferralLoading,
  getReferralSuccess,
  loginFailure,
  loginLoading,
  loginSuccess,
  postReferralFailure,
  postReferralLoading,
  postReferralSuccess,
} from "../action";

const ajaxDBCalls = {
  login: async (formData) => {
    const response = await axios.post(`/auth/login`, formData);
    return response;
  },

  postReferral: async ({ data: { formData, isSignup }, refId }) => {
    if (isSignup) {
      const response = await axios.post(`/auth/signup`, formData);
      return response;
    } else {
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
    }
  },
  getReferral: async (formData) => {
    const response = await axios.post(`/auth/referral`, formData);
    return response;
  },
};

function* login({ payload }) {
  try {
    yield put(loginLoading(true));

    const res = yield call(ajaxDBCalls.login, payload);

    yield put(loginSuccess(res.data));

    yield put(loginLoading(false));
  } catch (err) {
    let errorMessage = "";
    if (err.request) errorMessage = clientErrorMessage;

    if (err.response) {
      console.log("something is wrong", err.response.data);

      const { message } = err.response.data;
      errorMessage = message;
    }

    yield put(loginFailure(errorMessage));
    yield put(loginLoading(false));
    yield delay();
    yield put(loginFailure(""));
  }
}

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
function* loginWatcher() {
  yield takeLatest(LOGIN_REQUEST, login);
}
function* postReferralWatcher() {
  yield takeLatest(POST_REFERRAL_REQUEST, postReferral);
}
function* getReferralWatcher() {
  yield takeLatest(GET_REFERRAL_REQUEST, getReferral);
}

export default function* authSagas() {
  yield spawn(loginWatcher);
  yield spawn(postReferralWatcher);
  yield spawn(getReferralWatcher);
}
