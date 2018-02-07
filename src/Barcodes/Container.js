import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { getAll } from './selectors';
import * as actions from './actions'
import BarcodeEditor from 'BarcodeEditor';
import FileUploader from 'FileUploader'

export const Component = ({add, barcodes}) => (
    <div>
        <FileUploader 
            display={barcodes === null || barcodes.size === 0}
            dataLoaded={(data) => data.forEach((item) => add(item.type,item.value))}/>
        {barcodes.map((opt) => 
            <BarcodeEditor key={opt.id} barcode={opt} />
        )}
    </div>
);

export default connect(
    createStructuredSelector({
        barcodes: getAll
    }),

    dispatch => bindActionCreators(actions, dispatch)
)(Component);