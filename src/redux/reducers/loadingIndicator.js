import { GET_REFERRAL_LOADING, POST_REFERRAL_LOADING } from "../types";

const initialState = {
  postReferralLoading: false,
  getReferralLoading: false,
};

const loadingIndicator = (state = initialState, { type, payload }) => {
  switch (type) {
    case POST_REFERRAL_LOADING:
      return {
        ...state,
        postReferralLoading: payload,
      };

    case GET_REFERRAL_LOADING:
      return {
        ...state,
        getReferralLoading: payload,
      };

    default:
      return state;
  }
};

export default loadingIndicator;
