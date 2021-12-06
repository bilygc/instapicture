import { combineReducers } from "redux";
import posts from "./posts";
import auth from './auth';
import snackbar from "./snackbar";

export default combineReducers({posts, auth,snackbar})