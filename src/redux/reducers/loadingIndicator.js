import {
  GET_FARMS_LOADING,
  GET_FARM_LOADING,
  GET_INVESTMENTS_LOADING,
  GET_INVESTMENT_LOADING,
  GET_REFERRAL_LOADING,
  GET_USER_INVESTMENTS_LOADING,
  LOGIN_LOADING,
  POST_CREATE_FARM_LOADING,
  POST_CREATE_INVESTMENT_LOADING,
  POST_REFERRAL_LOADING,
  PUT_INVESTMENT_LOADING,
} from "../types";

const initialState = {
  loginLoading: false,
  postReferralLoading: false,
  getReferralLoading: false,
  postCreateFarmLoading: false,
  postCreateInvestmentLoading: false,
  getFarmsLoading: true,
  getFarmLoading: true,
  getUserInvestmentsLoading: true,
  getInvestmentsLoading: true,
  getInvestmentLoading: true,
  putInvestmentLoading: false,
};

const loadingIndicator = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_LOADING:
      return {
        ...state,
        loginLoading: payload,
      };

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

    case POST_CREATE_FARM_LOADING:
      return {
        ...state,
        postCreateFarmLoading: payload,
      };
    case POST_CREATE_INVESTMENT_LOADING:
      return {
        ...state,
        postCreateInvestmentLoading: payload,
      };
    case GET_FARMS_LOADING:
      return {
        ...state,
        getFarmsLoading: payload,
      };
    case GET_FARM_LOADING:
      return {
        ...state,
        getFarmLoading: payload,
      };
    case GET_USER_INVESTMENTS_LOADING:
      return {
        ...state,
        getUserInvestmentsLoading: payload,
      };
    case GET_INVESTMENTS_LOADING:
      return {
        ...state,
        getInvestmentsLoading: payload,
      };
    case GET_INVESTMENT_LOADING:
      return {
        ...state,
        getInvestmentLoading: payload,
      };
    case PUT_INVESTMENT_LOADING:
      return {
        ...state,
        putInvestmentLoading: payload,
      };

    default:
      return state;
  }
};

export default loadingIndicator;
