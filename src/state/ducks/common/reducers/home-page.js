import homePageTypes from "./../types/home-page";

const initialState = {
  homePage: {
    loading: "",
    data: false,
  },
};

export const homePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case homePageTypes.FETCH_UNIVERSITY:
      return {
        ...state,
        hommePage: {
          loading: "",
          data: action.data,
        },
      };
    default:
      return state;
  }
};
