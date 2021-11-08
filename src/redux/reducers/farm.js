import {
  GET_FARMS_SUCCESS,
  GET_FARM_SUCCESS,
  POST_CREATE_FARM_SUCCESS,
} from "../types";

const initialState = () => ({
  farm: {},
  farms: [],
});

const farmReducer = (state = initialState(), { type, payload }) => {
  switch (type) {
    case POST_CREATE_FARM_SUCCESS:
      return {
        ...state,
        farm: payload.farm,
      };
    case GET_FARMS_SUCCESS:
      return {
        ...state,
        farms: payload.farms,
      };

    case GET_FARM_SUCCESS:
      return {
        ...state,
        farm: payload.farm,
      };

    default:
      return state;
  }
};

export default farmReducer;
