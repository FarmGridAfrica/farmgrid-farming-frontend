import {
  CLEAR_GET_REFERRAL_SUCCESS,
  CLEAR_POST_REFERRAL_SUCCESS,
  GET_REFERRAL_FAIL,
  GET_REFERRAL_SUCCESS,
  POST_REFERRAL_FAIL,
  POST_REFERRAL_SUCCESS,
} from "../types";

const initialState = {
  errors: {},
  success: {},
};

const ajaxStatuses = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_REFERRAL_FAIL:
      state.errors.postReferral = payload.errors;
      return { ...state };

    case POST_REFERRAL_SUCCESS:
      state.success.postReferral = "Joined Airdrop";
      return { ...state };

    case CLEAR_POST_REFERRAL_SUCCESS:
      state.success.postReferral = "";
      return { ...state };

    case GET_REFERRAL_FAIL:
      state.errors.getReferral = payload.errors;
      return { ...state };

    case GET_REFERRAL_SUCCESS:
      state.success.getReferral = payload.message;
      return { ...state };

    case CLEAR_GET_REFERRAL_SUCCESS:
      state.success.getReferral = "";
      return { ...state };

    default:
      return state;
  }
};

export default ajaxStatuses;
