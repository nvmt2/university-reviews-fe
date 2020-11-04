import commentTypes from "./../types/comment";

const initialState = {
  loading: "",
  data: false,
  render: false,
};

export const commentReducer = (state = initialState, action) => {
  switch (action.type) {
    case commentTypes.RENDER_COMMENT:
      return {
        ...state,
        render: true,
      };
    case commentTypes.FETCH_COMMENT:
      return {
        ...state,
        data: action.payload,
      };
    default:
      return state;
  }
};
