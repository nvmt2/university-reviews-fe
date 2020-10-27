import { combineReducers } from "redux";
import { homePageReducer } from "./common/reducers/home-page";

export const appReducer = combineReducers({
  homePage: homePageReducer,
});
