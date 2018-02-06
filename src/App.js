import React, { Component } from 'react';
import { createStore } from 'redux'
import 'App.css';
import Barcode from 'Barcode'
import BarcodeTypeSelector from 'BarcodeTypeSelector'
import FileUploader from 'FileUploader'
import rootReducer from 'rootReducer'
import Barcodes from 'Barcodes'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {barcodeType: 'code128'};

    this.barcodeTypeSelected = this.barcodeTypeSelected.bind(this);
    //this.handleSubmit = this.handleSubmit.bind(this);
    this.store = createStore(rootReducer);

    console.log(this.store.getState());

    const unsubscribe = this.store.subscribe(() =>
      console.log(this.store.getState())
    )

    this.store.dispatch(Barcodes.actions.add("code128","sample1234"));

    unsubscribe();
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
        <FileUploader/>
      </div>
    );
  }
}

export default App;
