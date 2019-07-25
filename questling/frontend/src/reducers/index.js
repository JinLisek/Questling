import { combineReducers } from "redux";
import quests from "./quests";
import errors from "./errors";
import messages from "./messages";
import AuthenticationReducer from "./AuthenticationReducer";

export default combineReducers({
  quests,
  errors,
  messages,
  authentication: AuthenticationReducer
});
