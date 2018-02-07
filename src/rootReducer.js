import { combineReducers } from 'redux';
import * as barcodes from 'Barcodes';

export default combineReducers({
    [barcodes.constants.NAME]: barcodes.reducer
});