import { combineReducers } from "redux";
import userData from "./auth";
import { persistReducer } from "redux-persist";
import loadingIndicator from "./loadingIndicator";
import ajaxStatuses from "./ajaxStatuses";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
  key: "userData",
  storage,
  whitelist: ["user", "isLoggedIn"],
};

export default combineReducers({
  userData: persistReducer(authPersistConfig, userData),
  loadingIndicator,
  ajaxStatuses,
});
