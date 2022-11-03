import { createStore, compose, applyMiddleware } from "redux";
import rootreducer from "./reducer";
import Thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootreducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(Thunk))
);

export default store;
