import React, { Component } from 'react';
import {OPTIONS} from './constants'

class BarcodeTypeSelector extends Component {

    render() {
        return (
          <div>
            <label>Barcode Type: </label>
            <select value={this.props.selected} onChange={this.props.onChange} className="BarcodeTypes">{OPTIONS}</select>
          </div>
        );
      }
}

export default BarcodeTypeSelector;