import dialogTypes from 'state/ducks/common/types/dialog';
import { action } from 'typesafe-actions';

export const typeOfDialog = {
  RATING_DIALOG_TYPE: 'RATING_DIALOG_TYPE',
  UPDATE_TOPIC_DIALOG: 'UPDATE_TOPIC_DIALOG',
  NEW_POST_DIALOG: 'NEW_POST_DIALOG',
};

export const actionOpenDialogRating = () =>
  action(dialogTypes.OPEN_DIALOG, {
    kindOfDialog: typeOfDialog.RATING_DIALOG_TYPE,
  });
export const actionOpenDialogUpdateTopic = (data) =>
  action(dialogTypes.OPEN_DIALOG, {
    kindOfDialog: typeOfDialog.UPDATE_TOPIC_DIALOG,
    state: data,
  });
export const actionOpenDialogNewPost = () =>
  action(dialogTypes.OPEN_DIALOG, {
    kindOfDialog: typeOfDialog.NEW_POST_DIALOG,
  });
export const actionCloseDialog = () => action(dialogTypes.CLOSE_DIALOG);
