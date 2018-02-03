import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Barcode from './Barcode'
import BarcodeTypes from './BarcodeType'

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Barcode data="8675309"/>
          <h1 className="App-title">Barcode Generator</h1>
        </header>
        <p>Barcode Type: <BarcodeTypes/></p>
      </div>
    );
  }
}

export default App;
