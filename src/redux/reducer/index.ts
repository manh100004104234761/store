import { combineReducers } from "redux";
import errorReducer from "./error.reducer";
import loadingReducer from "./loading.reducer";
import userReducer from "./user.reducer";
import newReducer from "./new.reducer";
import productReducer from "./product.reducer";

const reducers = {
  loading: loadingReducer,
  error: errorReducer,
  user: userReducer,
  new: newReducer,
  product: productReducer
};

export default combineReducers(reducers);
