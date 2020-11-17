import loginTypes from "./../types/login";
import { action } from "typesafe-actions";

export const fetchAccountAction = (data) =>
  action(loginTypes.FETCH_ACCOUNT, data);

export const passStatusSingin = () => action(loginTypes.FETCH_ACCOUUNT_FAIL);
