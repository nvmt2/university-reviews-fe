import loginTypes from "./../types/login";

const initialState = {
  loading: "",
  data: false,
};

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case loginTypes.FETCH_ACCOUNT:
      return {
        ...state,
        data: action.payload,
      };
    case loginTypes.FETCH_ACCOUUNT_FAIL:
      return {
        ...state,
        loading: "",
      };
    default:
      return state;
  }
};
