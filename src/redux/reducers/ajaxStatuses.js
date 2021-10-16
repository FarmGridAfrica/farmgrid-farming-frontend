import { POST_REFERRAL_FAIL, POST_REFERRAL_SUCCESS } from "../types";

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
      state.success.postReferral = payload.message;
      return { ...state };

    default:
      return state;
  }
};

export default ajaxStatuses;
