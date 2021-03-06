import {
  CLEAR_GET_REFERRAL_SUCCESS,
  CLEAR_LOGIN_SUCCESS,
  CLEAR_POST_CREATE_FARM_SUCCESS,
  CLEAR_POST_CREATE_INVESTMENT_SUCCESS,
  CLEAR_POST_REFERRAL_SUCCESS,
  GET_FARMS_FAIL,
  GET_FARMS_SUCCESS,
  GET_FARM_FAIL,
  GET_FARM_SUCCESS,
  GET_INVESTMENTS_FAIL,
  GET_INVESTMENTS_SUCCESS,
  GET_INVESTMENT_FAIL,
  GET_INVESTMENT_SUCCESS,
  GET_REFERRAL_FAIL,
  GET_REFERRAL_SUCCESS,
  GET_USER_INVESTMENTS_FAIL,
  GET_USER_INVESTMENTS_SUCCESS,
  GOOGLE_AUTH_FAIL,
  GOOGLE_AUTH_SUCCESS,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  POST_CREATE_FARM_FAIL,
  POST_CREATE_FARM_SUCCESS,
  POST_CREATE_INVESTMENT_FAIL,
  POST_CREATE_INVESTMENT_SUCCESS,
  POST_REFERRAL_FAIL,
  POST_REFERRAL_SUCCESS,
  PUT_INVESTMENT_FAIL,
  PUT_INVESTMENT_SUCCESS,
} from "../types";

const initialState = {
  errors: {},
  success: {},
};

const ajaxStatuses = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_FAIL:
      state.errors.login = payload.errors;
      return { ...state };

    case LOGIN_SUCCESS:
      state.success.login = payload.token;
      return { ...state };

    case GOOGLE_AUTH_FAIL:
      state.errors.googleAuth = payload.errors;
      return { ...state };

    case GOOGLE_AUTH_SUCCESS:
      state.success.googleAuth = payload.token;
      return { ...state };

    case CLEAR_LOGIN_SUCCESS:
      state.success.login = "";
      return { ...state };

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

    case GET_FARMS_FAIL:
      state.errors.getFarms = payload.errors;
      return { ...state };

    case GET_FARMS_SUCCESS:
      state.success.getFarms = payload.message;
      return { ...state };

    case GET_FARM_FAIL:
      state.errors.getFarm = payload.errors;
      return { ...state };

    case GET_FARM_SUCCESS:
      state.success.getFarm = payload.message;
      return { ...state };

    case GET_USER_INVESTMENTS_FAIL:
      state.errors.getUserInvestments = payload.errors;
      return { ...state };

    case GET_USER_INVESTMENTS_SUCCESS:
      state.success.getUserInvestments = payload.message;
      return { ...state };

    case GET_INVESTMENTS_FAIL:
      state.errors.getInvestments = payload.errors;
      return { ...state };

    case GET_INVESTMENTS_SUCCESS:
      state.success.getInvestments = payload.message;
      return { ...state };

    case GET_INVESTMENT_FAIL:
      state.errors.getInvestment = payload.errors;
      return { ...state };

    case GET_INVESTMENT_SUCCESS:
      state.success.getInvestment = payload.message;
      return { ...state };

    case PUT_INVESTMENT_FAIL:
      state.errors.putInvestment = payload.errors;
      return { ...state };

    case PUT_INVESTMENT_SUCCESS:
      state.success.putInvestment = payload.message;
      return { ...state };

    case CLEAR_GET_REFERRAL_SUCCESS:
      state.success.getReferral = "";
      return { ...state };

    case POST_CREATE_FARM_FAIL:
      state.errors.postCreateFarm = payload.errors;
      return { ...state };

    case POST_CREATE_FARM_SUCCESS:
      state.success.postCreateFarm = payload.message;
      return { ...state };

    case CLEAR_POST_CREATE_FARM_SUCCESS:
      state.success.postCreateFarm = "";
      return { ...state };

    case POST_CREATE_INVESTMENT_FAIL:
      state.errors.postCreateInvestment = payload.errors;
      return { ...state };

    case POST_CREATE_INVESTMENT_SUCCESS:
      state.success.postCreateInvestment = payload.message;
      return { ...state };

    case CLEAR_POST_CREATE_INVESTMENT_SUCCESS:
      state.success.postCreateInvestment = "";
      return { ...state };

    default:
      return state;
  }
};

export default ajaxStatuses;
