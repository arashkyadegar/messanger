import { combineReducers } from "redux";
import postsReducer from "../reducer/posts";

export default combineReducers({
  posts: postsReducer,
});
