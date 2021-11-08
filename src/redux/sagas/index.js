import { spawn } from "redux-saga/effects";
import authSagas from "./auth";
import farmSagas from "./farm";
import investmentSagas from "./investment";

export default function* rootSaga() {
  yield spawn(authSagas);
  yield spawn(farmSagas);
  yield spawn(investmentSagas);
}
