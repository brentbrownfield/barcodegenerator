import React, { Component } from 'react';
import 'bootstrap/css/bootstrap.css'
import 'bootstrap/css/bootstrap-theme.css'
import 'App.css';
import Barcode from 'Barcode'
import BarcodeTypeSelector from 'BarcodeTypeSelector'
import * as barcodes from 'Barcodes'
import { Grid, Row, Col } from 'react-bootstrap';
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {barcodeType: 'code128'};

    this.barcodeTypeSelected = this.barcodeTypeSelected.bind(this);
  }

  barcodeTypeSelected(event) {
    const type = event.target.value;
    this.setState({barcodeType: type});
    console.log("BarcodeType: " + type);
  }

  render() {
    return (
      <Grid className="App">
        <Row>
          <header className="App-header">
            <Barcode type={this.state.barcodeType} data="8675309" scale="3"/>
            <h1 className="App-title">Barcode Generator</h1>
          </header>
          <BarcodeTypeSelector selected={this.state.barcodeType} onChange={this.barcodeTypeSelected}/>
        </Row>
        <Row>
          <barcodes.Container />
        </Row>
      </Grid>
    );
  }
}

export default App;
