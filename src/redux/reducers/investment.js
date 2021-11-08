import { POST_CREATE_INVESTMENT_SUCCESS } from "../types";

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

    default:
      return state;
  }
};

export default investmentReducer;
