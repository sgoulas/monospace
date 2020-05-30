import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import fetchReducer from "./reducers/fetchReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  fetchReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
