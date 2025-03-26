import { combineReducers } from "redux";
import { userReducer } from "./UserRedux/userReducer";

const rootReducer = combineReducers({
  user: userReducer,
});

export default rootReducer;
