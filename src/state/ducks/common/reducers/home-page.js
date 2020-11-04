import homePageTypes from "./../types/home-page";

const initialState = {
  loading: "",
  data: false,
};

export const homePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case homePageTypes.FETCH_UNIVERSITY:
      return {
        ...state,
        loading: "",
        data: action.payload,
      };
    default:
      return state;
  }
};
