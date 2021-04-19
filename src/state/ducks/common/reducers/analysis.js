import analysisTypes from 'state/ducks/common/types/analysis';

const initialState = {
  ratingsUni: [],
  infoUni: [],
};

export const analysisReducer = (state = initialState, action) => {
  switch (action.type) {
    case analysisTypes.ADD_RATING_UNIVERSITY: {
      return {
        ...state,
        ratingsUni: [...state.ratingsUni, action.payload.data],
      };
    }
    case analysisTypes.ADD_INFO_UNIVERSITY: {
      return {
        ...state,
        infoUni: [...state.infoUni, action.payload.data],
      };
    }
    default:
      return state;
  }
};
