import {
  CLEAR_GET_REFERRAL_SUCCESS,
  CLEAR_POST_REFERRAL_SUCCESS,
  GET_REFERRAL_FAIL,
  GET_REFERRAL_LOADING,
  GET_REFERRAL_REQUEST,
  GET_REFERRAL_SUCCESS,
  POST_REFERRAL_FAIL,
  POST_REFERRAL_LOADING,
  POST_REFERRAL_REQUEST,
  POST_REFERRAL_SUCCESS,
} from "../types";

export const postReferralRequest = (prop) => {
  return {
    type: POST_REFERRAL_REQUEST,
    payload: prop,
  };
};

export const postReferralSuccess = (prop) => {
  return {
    type: POST_REFERRAL_SUCCESS,
    payload: prop,
  };
};

export const clearPostReferralSuccess = (prop) => {
  return {
    type: CLEAR_POST_REFERRAL_SUCCESS,
    payload: prop,
  };
};

export const postReferralFailure = (errors) => {
  return {
    type: POST_REFERRAL_FAIL,
    payload: { errors },
  };
};

export const postReferralLoading = (loading) => {
  return {
    type: POST_REFERRAL_LOADING,
    payload: loading,
  };
};

export const getReferralRequest = (prop) => {
  return {
    type: GET_REFERRAL_REQUEST,
    payload: prop,
  };
};

export const getReferralSuccess = (prop) => {
  return {
    type: GET_REFERRAL_SUCCESS,
    payload: prop,
  };
};

export const cleaGetReferralSuccess = (prop) => {
  return {
    type: CLEAR_GET_REFERRAL_SUCCESS,
    payload: prop,
  };
};

export const getReferralFailure = (errors) => {
  return {
    type: GET_REFERRAL_FAIL,
    payload: { errors },
  };
};

export const getReferralLoading = (loading) => {
  return {
    type: GET_REFERRAL_LOADING,
    payload: loading,
  };
};
