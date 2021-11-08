import axios from "./axios";
import { call, put, takeLatest, spawn } from "redux-saga/effects";

import {
  GET_FARMS_REQUEST,
  GET_FARM_REQUEST,
  POST_CREATE_FARM_REQUEST,
} from "../types";
import { clientErrorMessage, delay } from "./reusable";

import {
  getFarmsFailure,
  getFarmsLoading,
  getFarmsSuccess,
  getFarmFailure,
  getFarmLoading,
  getFarmSuccess,
  postCreateFarmFailure,
  postCreateFarmLoading,
  postCreateFarmSuccess,
} from "../action";

const ajaxDBCalls = {
  postCreateFarm: async (formData) => {
    const response = await axios.post(`/farm/create`, formData);
    return response;
  },
  getFarms: async () => {
    const response = await axios.get(`/farm`);
    return response;
  },
  getFarm: async (id) => {
    const response = await axios.get(`/farm/${id}`);
    return response;
  },
};

function* postCreateFarm({ payload }) {
  try {
    yield put(postCreateFarmLoading(true));

    const res = yield call(ajaxDBCalls.postCreateFarm, payload);

    yield put(postCreateFarmSuccess(res.data));

    yield put(postCreateFarmLoading(false));
  } catch (err) {
    let errorMessage = "";
    if (err.request) errorMessage = clientErrorMessage;

    if (err.response) {
      console.log("something is wrong", err.response.data);

      const { message } = err.response.data;
      errorMessage = message;
    }

    yield put(postCreateFarmFailure(errorMessage));
    yield put(postCreateFarmLoading(false));
    yield delay();
    yield put(postCreateFarmFailure(""));
  }
}
function* getFarms({ payload }) {
  try {
    yield put(getFarmsLoading(true));

    const res = yield call(ajaxDBCalls.getFarms, payload);

    yield put(getFarmsSuccess(res.data));

    yield put(getFarmsLoading(false));
  } catch (err) {
    let errorMessage = "";
    if (err.request) errorMessage = clientErrorMessage;

    if (err.response) {
      console.log("something is wrong", err.response.data);

      const { message } = err.response.data;
      errorMessage = message;
    }

    yield put(getFarmsFailure(errorMessage));
    yield put(getFarmsLoading(false));
    yield delay();
    yield put(getFarmsFailure(""));
  }
}
function* getFarm({ payload }) {
  try {
    yield put(getFarmLoading(true));

    const res = yield call(ajaxDBCalls.getFarm, payload);

    yield put(getFarmSuccess(res.data));

    yield put(getFarmLoading(false));
  } catch (err) {
    let errorMessage = "";
    if (err.request) errorMessage = clientErrorMessage;

    if (err.response) {
      console.log("something is wrong", err.response.data);

      const { message } = err.response.data;
      errorMessage = message;
    }

    yield put(getFarmFailure(errorMessage));
    yield put(getFarmLoading(false));
    yield delay();
    yield put(getFarmFailure(""));
  }
}

//Watchers
function* postCreateFarmWatcher() {
  yield takeLatest(POST_CREATE_FARM_REQUEST, postCreateFarm);
}

function* getFarmsWatcher() {
  yield takeLatest(GET_FARMS_REQUEST, getFarms);
}

function* getFarmWatcher() {
  yield takeLatest(GET_FARM_REQUEST, getFarm);
}

export default function* farmSagas() {
  yield spawn(postCreateFarmWatcher);
  yield spawn(getFarmsWatcher);
  yield spawn(getFarmWatcher);
}
