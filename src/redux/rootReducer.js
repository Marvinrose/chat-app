import { combineReducers } from "redux";
import appReducer from "./slices/app";
import storage from "redux-persist/lib/storage";
import authReducer from "./slices/auth";

// Slices

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  //   whiteList: [],
  // blackList: [],
};

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
});

export { rootPersistConfig, rootReducer };
