import React, { Component } from 'react';
import BarcodeTypeSelector from 'BarcodeTypeSelector';
import Barcode from 'Barcode';

class BarcodeEditor extends Component {

    render() {
        return (
            <div>
                <BarcodeTypeSelector selected={this.props.barcode.type} onChange={this.props.barcodeTypeChange}/>
                <input type="text" value={this.props.barcode.data} onChange={this.props.barcodeDataChange} />
                <Barcode type={this.props.barcode.type} data={this.props.barcode.data} />
            </div>
        );
      }
}

export default BarcodeEditor;