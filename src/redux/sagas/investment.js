import axios from "./axios";
import { call, put, takeLatest, spawn } from "redux-saga/effects";

import {
  GET_INVESTMENTS_REQUEST,
  GET_INVESTMENT_REQUEST,
  GET_USER_INVESTMENTS_REQUEST,
  POST_CREATE_INVESTMENT_REQUEST,
  PUT_INVESTMENT_REQUEST,
} from "../types";
import { clientErrorMessage, delay } from "./reusable";

import {
  postCreateInvestmentLoading,
  postCreateInvestmentSuccess,
  postCreateInvestmentFailure,
  getUserInvestmentsLoading,
  getUserInvestmentsSuccess,
  getUserInvestmentsFailure,
  getInvestmentsLoading,
  getInvestmentsSuccess,
  getInvestmentsFailure,
  getInvestmentLoading,
  getInvestmentSuccess,
  getInvestmentFailure,
  putInvestmentLoading,
  putInvestmentSuccess,
  putInvestmentFailure,
} from "../action";

const ajaxDBCalls = {
  postCreateInvestment: async (formData) => {
    const response = await axios.post(`/investment/create`, formData);
    return response;
  },
  getUserInvestments: async (token) => {
    const response = await axios.get(`/investment/user`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  },
  getInvestments: async (token) => {
    const response = await axios.get(`/investment`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response;
  },
  getInvestment: async (id) => {
    const response = await axios.get(`/investment/${id}`);
    return response;
  },
  putInvestment: async ({ formData, id }) => {
    const response = await axios.put(`/investment/${id}`, formData);
    return response;
  },
};

function* postCreateInvestment({ payload }) {
  try {
    yield put(postCreateInvestmentLoading(true));

    const res = yield call(ajaxDBCalls.postCreateInvestment, payload);

    yield put(postCreateInvestmentSuccess(res.data));

    yield put(postCreateInvestmentLoading(false));
  } catch (err) {
    let errorMessage = "";
    if (err.request) errorMessage = clientErrorMessage;

    if (err.response) {
      console.log("something is wrong", err.response.data);

      const { message } = err.response.data;
      errorMessage = message;
    }

    yield put(postCreateInvestmentFailure(errorMessage));
    yield put(postCreateInvestmentLoading(false));
    yield delay();
    yield put(postCreateInvestmentFailure(""));
  }
}

function* getUserInvestments({ payload }) {
  try {
    yield put(getUserInvestmentsLoading(true));

    const res = yield call(ajaxDBCalls.getUserInvestments, payload);

    yield put(getUserInvestmentsSuccess(res.data));

    yield put(getUserInvestmentsLoading(false));
  } catch (err) {
    let errorMessage = "";
    if (err.request) errorMessage = clientErrorMessage;

    if (err.response) {
      console.log("something is wrong", err.response.data);

      const { message } = err.response.data;
      errorMessage = message;
    }

    yield put(getUserInvestmentsFailure(errorMessage));
    yield put(getUserInvestmentsLoading(false));
    yield delay();
    yield put(getUserInvestmentsFailure(""));
  }
}
function* getInvestments({ payload }) {
  try {
    yield put(getInvestmentsLoading(true));

    const res = yield call(ajaxDBCalls.getInvestments, payload);

    yield put(getInvestmentsSuccess(res.data));

    yield put(getInvestmentsLoading(false));
  } catch (err) {
    let errorMessage = "";
    if (err.request) errorMessage = clientErrorMessage;

    if (err.response) {
      console.log("something is wrong", err.response.data);

      const { message } = err.response.data;
      errorMessage = message;
    }

    yield put(getInvestmentsFailure(errorMessage));
    yield put(getInvestmentsLoading(false));
    yield delay();
    yield put(getInvestmentsFailure(""));
  }
}
function* getInvestment({ payload }) {
  try {
    yield put(getInvestmentLoading(true));

    const res = yield call(ajaxDBCalls.getInvestment, payload);

    yield put(getInvestmentSuccess(res.data));

    yield put(getInvestmentLoading(false));
  } catch (err) {
    let errorMessage = "";
    if (err.request) errorMessage = clientErrorMessage;

    if (err.response) {
      console.log("something is wrong", err.response.data);

      const { message } = err.response.data;
      errorMessage = message;
    }

    yield put(getInvestmentFailure(errorMessage));
    yield put(getInvestmentLoading(false));
    yield delay();
    yield put(getInvestmentFailure(""));
  }
}
function* putInvestment({ payload }) {
  try {
    yield put(putInvestmentLoading(true));

    const res = yield call(ajaxDBCalls.putInvestment, payload);

    yield put(putInvestmentSuccess(res.data));

    yield put(putInvestmentLoading(false));
  } catch (err) {
    let errorMessage = "";
    if (err.request) errorMessage = clientErrorMessage;

    if (err.response) {
      console.log("something is wrong", err.response.data);

      const { message } = err.response.data;
      errorMessage = message;
    }

    yield put(putInvestmentFailure(errorMessage));
    yield put(putInvestmentLoading(false));
    yield delay();
    yield put(putInvestmentFailure(""));
  }
}

//Watchers
function* postCreateInvestmentWatcher() {
  yield takeLatest(POST_CREATE_INVESTMENT_REQUEST, postCreateInvestment);
}
function* getUserInvestmentsWatcher() {
  yield takeLatest(GET_USER_INVESTMENTS_REQUEST, getUserInvestments);
}
function* getInvestmentsWatcher() {
  yield takeLatest(GET_INVESTMENTS_REQUEST, getInvestments);
}
function* getInvestmentWatcher() {
  yield takeLatest(GET_INVESTMENT_REQUEST, getInvestment);
}
function* putInvestmentWatcher() {
  yield takeLatest(PUT_INVESTMENT_REQUEST, putInvestment);
}

export default function* investmentSagas() {
  yield spawn(postCreateInvestmentWatcher);
  yield spawn(getUserInvestmentsWatcher);
  yield spawn(getInvestmentsWatcher);
  yield spawn(getInvestmentWatcher);
  yield spawn(putInvestmentWatcher);
}
