import {
  CLEAR_POST_CREATE_INVESTMENT_SUCCESS,
  GET_USER_INVESTMENTS_FAIL,
  GET_USER_INVESTMENTS_LOADING,
  GET_USER_INVESTMENTS_REQUEST,
  GET_USER_INVESTMENTS_SUCCESS,
  GET_INVESTMENTS_FAIL,
  GET_INVESTMENTS_LOADING,
  GET_INVESTMENTS_REQUEST,
  GET_INVESTMENTS_SUCCESS,
  GET_INVESTMENT_FAIL,
  GET_INVESTMENT_LOADING,
  GET_INVESTMENT_REQUEST,
  GET_INVESTMENT_SUCCESS,
  PUT_INVESTMENT_FAIL,
  PUT_INVESTMENT_LOADING,
  PUT_INVESTMENT_REQUEST,
  PUT_INVESTMENT_SUCCESS,
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

export const getUserInvestmentsRequest = (prop) => {
  return {
    type: GET_USER_INVESTMENTS_REQUEST,
    payload: prop,
  };
};

export const getUserInvestmentsSuccess = (prop) => {
  return {
    type: GET_USER_INVESTMENTS_SUCCESS,
    payload: prop,
  };
};

export const getUserInvestmentsFailure = (errors) => {
  return {
    type: GET_USER_INVESTMENTS_FAIL,
    payload: { errors },
  };
};

export const getUserInvestmentsLoading = (loading) => {
  return {
    type: GET_USER_INVESTMENTS_LOADING,
    payload: loading,
  };
};

export const getInvestmentsRequest = (prop) => {
  return {
    type: GET_INVESTMENTS_REQUEST,
    payload: prop,
  };
};

export const getInvestmentsSuccess = (prop) => {
  return {
    type: GET_INVESTMENTS_SUCCESS,
    payload: prop,
  };
};

export const getInvestmentsFailure = (errors) => {
  return {
    type: GET_INVESTMENTS_FAIL,
    payload: { errors },
  };
};

export const getInvestmentsLoading = (loading) => {
  return {
    type: GET_INVESTMENTS_LOADING,
    payload: loading,
  };
};

export const getInvestmentRequest = (prop) => {
  return {
    type: GET_INVESTMENT_REQUEST,
    payload: prop,
  };
};

export const getInvestmentSuccess = (prop) => {
  return {
    type: GET_INVESTMENT_SUCCESS,
    payload: prop,
  };
};

export const getInvestmentFailure = (errors) => {
  return {
    type: GET_INVESTMENT_FAIL,
    payload: { errors },
  };
};

export const getInvestmentLoading = (loading) => {
  return {
    type: GET_INVESTMENT_LOADING,
    payload: loading,
  };
};

export const putInvestmentRequest = (prop) => {
  return {
    type: PUT_INVESTMENT_REQUEST,
    payload: prop,
  };
};

export const putInvestmentSuccess = (prop) => {
  return {
    type: PUT_INVESTMENT_SUCCESS,
    payload: prop,
  };
};

export const putInvestmentFailure = (errors) => {
  return {
    type: PUT_INVESTMENT_FAIL,
    payload: { errors },
  };
};

export const putInvestmentLoading = (loading) => {
  return {
    type: PUT_INVESTMENT_LOADING,
    payload: loading,
  };
};
