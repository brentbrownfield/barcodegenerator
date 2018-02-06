import React, { Component } from 'react';
import 'App.css';
import Barcode from 'Barcode'
import BarcodeTypes from 'BarcodeType'
import FileUploader from 'FileUploader'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {barcodeType: 'code128'};

    this.barcodeTypeSelected = this.barcodeTypeSelected.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
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
        <p>Barcode Type: <BarcodeTypes selected={this.state.barcodeType} onChange={this.barcodeTypeSelected}/></p>
        <FileUploader/>
      </div>
    );
  }
}

export default App;
