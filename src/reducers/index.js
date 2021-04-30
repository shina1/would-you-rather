import { combineReducers } from "redux";
import authenticatedUser from "../reducers/authUser";
import questions from "../reducers/questions";
import users from "../reducers/users";

export default combineReducers({
  authenticatedUser,
  questions,
  users,
});
