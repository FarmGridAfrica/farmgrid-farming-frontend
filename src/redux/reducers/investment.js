import {
  GET_USER_INVESTMENTS_SUCCESS,
  GET_INVESTMENTS_SUCCESS,
  GET_INVESTMENT_SUCCESS,
  POST_CREATE_INVESTMENT_SUCCESS,
} from "../types";

const initialState = () => ({
  investment: {},
  investments: [],
});

const investmentReducer = (state = initialState(), { type, payload }) => {
  switch (type) {
    case POST_CREATE_INVESTMENT_SUCCESS:
      return {
        ...state,
        investment: payload.investment,
      };
    case GET_USER_INVESTMENTS_SUCCESS:
      return {
        ...state,
        investments: payload.investments,
      };
    case GET_INVESTMENTS_SUCCESS:
      return {
        ...state,
        investments: payload.investments,
      };
    case GET_INVESTMENT_SUCCESS:
      return {
        ...state,
        investment: payload.investment,
      };
    default:
      return state;
  }
};

export default investmentReducer;
