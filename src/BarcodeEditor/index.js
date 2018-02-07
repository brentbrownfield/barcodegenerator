import React, { Component } from 'react';
import BarcodeTypeSelector from 'BarcodeTypeSelector';
import Barcode from 'Barcode';
import { Row, Col } from 'react-bootstrap';
class BarcodeEditor extends Component {

    render() {
        return (
            <Row>
                <Col xs={12} md={4}><BarcodeTypeSelector selected={this.props.barcode.type} onChange={this.props.barcodeTypeChange}/></Col>
                <Col xs={12} md={4}><input type="text" value={this.props.barcode.data} onChange={this.props.barcodeDataChange} /></Col>
                <Col xs={12} md={4}><Barcode type={this.props.barcode.type} data={this.props.barcode.data} /></Col>
            </Row>
        );
      }
}

export default BarcodeEditor;