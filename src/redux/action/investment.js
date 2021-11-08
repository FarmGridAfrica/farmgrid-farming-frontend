import {
  CLEAR_POST_CREATE_INVESTMENT_SUCCESS,
  POST_CREATE_INVESTMENT_FAIL,
  POST_CREATE_INVESTMENT_LOADING,
  POST_CREATE_INVESTMENT_REQUEST,
  POST_CREATE_INVESTMENT_SUCCESS,
} from "../types";

export const postCreateInvestmentRequest = (prop) => {
  return {
    type: POST_CREATE_INVESTMENT_REQUEST,
    payload: prop,
  };
};

export const postCreateInvestmentSuccess = (prop) => {
  return {
    type: POST_CREATE_INVESTMENT_SUCCESS,
    payload: prop,
  };
};

export const clearPostCreateInvestmentSuccess = (prop) => {
  return {
    type: CLEAR_POST_CREATE_INVESTMENT_SUCCESS,
    payload: prop,
  };
};

export const postCreateInvestmentFailure = (errors) => {
  return {
    type: POST_CREATE_INVESTMENT_FAIL,
    payload: { errors },
  };
};

export const postCreateInvestmentLoading = (loading) => {
  return {
    type: POST_CREATE_INVESTMENT_LOADING,
    payload: loading,
  };
};
