import { combineReducers } from 'redux';
import barcodes from 'Barcodes';

export default combineReducers({
    [barcodes.constants.NAME]: barcodes.reducer
});