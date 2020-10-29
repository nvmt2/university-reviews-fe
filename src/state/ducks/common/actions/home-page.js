import homePageTypes from "./../types/home-page";
import { action } from "typesafe-actions";

export const fetchUniversityAction = (data) =>
  action(homePageTypes.FETCH_UNIVERSITY, data);
