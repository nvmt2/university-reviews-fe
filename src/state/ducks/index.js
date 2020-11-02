import { combineReducers } from "redux";
import { homePageReducer } from "./common/reducers/home-page";
import { commentReducer } from "./common/reducers/comment";

export const appReducer = combineReducers({
  homePage: homePageReducer,
  comment: commentReducer,
});
