import React, { Component } from 'react';
import 'App.css';
import Barcode from 'Barcode'
import BarcodeTypeSelector from 'BarcodeTypeSelector'
import * as barcodes from 'Barcodes'

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
      <div className="App">
        <header className="App-header">
          <Barcode type={this.state.barcodeType} data="8675309"/>
          <h1 className="App-title">Barcode Generator</h1>
        </header>
        <BarcodeTypeSelector selected={this.state.barcodeType} onChange={this.barcodeTypeSelected}/>
        <barcodes.Container />
      </div>
    );
  }
}

export default App;
