import { combineReducers } from "redux";
import PartReducer from './parts'

const rootReducer = combineReducers({
  parts: PartReducer
});

export default rootReducer;