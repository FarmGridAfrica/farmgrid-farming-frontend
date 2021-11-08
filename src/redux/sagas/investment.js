import axios from "./axios";
import { call, put, takeLatest, spawn } from "redux-saga/effects";

import { POST_CREATE_INVESTMENT_REQUEST } from "../types";
import { clientErrorMessage, delay } from "./reusable";

import {
  postCreateInvestmentLoading,
  postCreateInvestmentSuccess,
  postCreateInvestmentFailure,
} from "../action";

const ajaxDBCalls = {
  postCreateInvestment: async (formData) => {
    const response = await axios.post(`/investment/create`, formData);
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

//Watchers
function* postCreateInvestmentWatcher() {
  yield takeLatest(POST_CREATE_INVESTMENT_REQUEST, postCreateInvestment);
}

export default function* investmentSagas() {
  yield spawn(postCreateInvestmentWatcher);
}
