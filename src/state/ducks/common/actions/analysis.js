import analysisTypes from 'state/ducks/common/types/analysis';
import { action } from 'typesafe-actions';

export const actionAddRatingUni = (data) =>
  action(analysisTypes.ADD_RATING_UNIVERSITY, {
    data,
  });
export const actionAddRatingThreeYear = (data) =>
  action(analysisTypes.ADD_RATING_THREE_YEAR, { data });
export const actionAddInfoUni = (data) =>
  action(analysisTypes.ADD_INFO_UNIVERSITY, {
    data,
  });
export const actionRemoveRatingAndInfo = (idUni) =>
  action(analysisTypes.REMOVE_RATING_INFO_UNIVERSITY, {
    idUni,
  });
