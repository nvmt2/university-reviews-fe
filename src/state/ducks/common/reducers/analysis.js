import analysisTypes from 'state/ducks/common/types/analysis';

const initialState = {
  ratingsUni: [],
  infoUni: [],
  ratingThreeYears: [],
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
    case analysisTypes.ADD_RATING_THREE_YEAR: {
      return {
        ...state,
        ratingThreeYears: [...state.ratingThreeYears, action.payload.data],
      };
    }
    case analysisTypes.REMOVE_RATING_INFO_UNIVERSITY: {
      let idPassed = action.payload.idUni;
      let indexOfArray = state.infoUni.findIndex(
        (x) => x.University.id === idPassed
      );

      return {
        ...state,
        ratingsUni: state.ratingsUni.filter(
          (currentVal, index) => index !== indexOfArray
        ),
        infoUni: state.infoUni.filter(
          (currentVal, index) => index !== indexOfArray
        ),
        ratingThreeYears: state.ratingThreeYears.filter(
          (currentVal, index) => index !== indexOfArray
        ),
      };
    }

    default:
      return state;
  }
};
