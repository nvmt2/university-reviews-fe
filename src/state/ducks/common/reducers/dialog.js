import dialogTypes from 'state/ducks/common/types/dialog';

const initialState = {
  isOpen: false,
  kindOfDialog: null,
  payload: null,
};

export const dialogReducer = (state = initialState, action) => {
  switch (action.type) {
    case dialogTypes.OPEN_DIALOG: {
      console.log('OPEN_DIALOG', action);
      return {
        ...state,
        isOpen: true,
        kindOfDialog: action.payload.kindOfDialog,
        payload: action.payload.state,
      };
    }
    case dialogTypes.CLOSE_DIALOG:
      return (state = initialState);
    default:
      return state;
  }
};
