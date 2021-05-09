import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import postsReducer from "./post.reducer";
import commentReducer from "./comment.reducer";


export default combineReducers({
    auth: authReducer,
    posts: postsReducer,
    comment: commentReducer,
});