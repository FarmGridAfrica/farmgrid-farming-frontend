import {
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
