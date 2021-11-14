import {
  GET_REFERRAL_SUCCESS,
  GOOGLE_AUTH_SUCCESS,
  LOGIN_SUCCESS,
  LOGOUT,
  POST_REFERRAL_SUCCESS,
} from "../types";

const initialState = () => ({
  user: {},
  token: "",
  isLoggedIn: false,
});

const authReducer = (state = initialState(), { type, payload }) => {
  switch (type) {
    case LOGOUT:
      return {
        ...state,
        user: {},
        isLoggedIn: false,
        token: "",
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        token: payload.token,
        user: payload.user,
        isLoggedIn: true,
      };

    case POST_REFERRAL_SUCCESS:
      return {
        ...state,
        token: payload.token,
        user: payload.user,
        isLoggedIn: true,
      };

    case GOOGLE_AUTH_SUCCESS:
      return {
        ...state,
        token: payload.token,
        user: payload.user,
        isLoggedIn: true,
      };

    case GET_REFERRAL_SUCCESS:
      return {
        ...state,
        user: payload.user,
      };

    default:
      return state;
  }
};

export default authReducer;
