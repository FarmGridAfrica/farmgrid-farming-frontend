import { POST_REFERRAL_SUCCESS } from "../types";

const initialState = () => ({
  user: {},
  token: "",
  isLoggedIn: false,
});

const authReducer = (state = initialState(), { type, payload }) => {
  switch (type) {
    // case LOGOUT:
    //   return {
    //     ...state,
    //     user: {},
    //     isLoggedIn: false,
    //     token: "",
    //     refreshToken: "",
    //     userType: "",
    //   };

    case POST_REFERRAL_SUCCESS:
      return {
        ...state,
        user: payload.user,
      };

    default:
      return state;
  }
};

export default authReducer;
