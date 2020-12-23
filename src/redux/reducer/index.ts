import { combineReducers } from "redux";
import errorReducer from "./error.reducer";
import loadingReducer from "./loading.reducer";
import userReducer from "./user.reducer";

const reducers = {
  loading: loadingReducer,
  error: errorReducer,
  user: userReducer
};

export default combineReducers(reducers);
