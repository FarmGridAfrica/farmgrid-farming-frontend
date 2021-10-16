import { POST_REFERRAL_LOADING } from "../types";

const initialState = {
  postReferralLoading: false,
};

const loadingIndicator = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_REFERRAL_LOADING:
      return {
        ...state,
        postReferralLoading: payload,
      };

    default:
      return state;
  }
};

export default loadingIndicator;
