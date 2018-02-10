import React from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect';
import { getAll } from './selectors';
import * as actions from './actions'
import BarcodeDisplay from 'BarcodeDisplay';
import FileUploader from 'FileUploader'
import PropTypes from 'prop-types'

export const Component = ({add, edit, remove, barcodes}) => (
    <div>
        <FileUploader 
            display={barcodes === null || barcodes.size === 0}
            dataLoaded={(data) => data.forEach((item) => add(item.type,item.value,item.description ? item.description : item.value))}/>

        {barcodes.valueSeq().map((opt) => 
            <BarcodeDisplay 
                key={opt.id} 
                barcode={opt}
                barcodeTypeChange={(type) => edit(opt.id,type.target.value,opt.value)} 
                barcodeDataChange={(type) => edit(opt.id,opt.type, type.target.value)}
                handleDelete={() => remove(opt.id)}
                handleEdit={(e) => console.log("Edit: " + e)}/>
        )}
    </div>
);

export default connect(
    createStructuredSelector({
        barcodes: getAll
    }),

    dispatch => bindActionCreators(actions, dispatch)
)(Component);

Component.propTypes = {
    add: PropTypes.func.isRequired,
    edit: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired,
}