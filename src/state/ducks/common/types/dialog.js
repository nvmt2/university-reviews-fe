import convertTypes from 'state/ducks/convertType';

const dialogTypes = ['OPEN_DIALOG', 'CLOSE_DIALOG'];
export default convertTypes('dialog', dialogTypes);
