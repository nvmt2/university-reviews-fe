import convertTypes from 'state/ducks/convertType';

const analysisTypes = [
  'ADD_RATING_UNIVERSITY',
  'ADD_RATING_THREE_YEAR',
  'ADD_INFO_UNIVERSITY',
  'REMOVE_RATING_INFO_UNIVERSITY',
];
export default convertTypes('analysis', analysisTypes);
