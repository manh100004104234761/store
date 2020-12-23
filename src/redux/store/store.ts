import reducer from "../reducer/index";

import { createStore, applyMiddleware, compose } from "redux";
import apiMiddleware from "../middleware/api";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";

const store = createStore(
  reducer,
  compose(applyMiddleware(thunk, apiMiddleware, createLogger()))
);
export default store;

export type StoreState = ReturnType<typeof reducer>;
