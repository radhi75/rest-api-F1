import { combineReducers } from "redux";
import productreducer from "./productreducer";

const rootreducer = combineReducers({ productreducer });
export default rootreducer;
