import { combineReducers } from "redux";
import appReducer from "./slices/app";
import storage from "redux-persist/lib/storage";
import authReducer from "./slices/auth";
import conversationReducer from "./slices/conversation";
import audioCallReducer from "./slices/audioCall";
import videoCallReducer from "./slices/videoCall";

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
  conversation: conversationReducer,
  audioCall: audioCallReducer,
  videoCall: videoCallReducer,
});

export { rootPersistConfig, rootReducer };
