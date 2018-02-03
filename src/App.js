import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import bwipjs from 'bwip-js';
import BarcodeTypes from './BarcodeType'

class App extends Component {
  componentDidMount() {
    bwipjs('mycanvas', {
            bcid:        'code128',       // Barcode type
            text:        '8675309',    // Text to encode
            scale:       3,               // 3x scaling factor
            height:      10,              // Bar height, in millimeters
            includetext: true,            // Show human-readable text
            textxalign:  'center',        // Always good to set this
        }, function (err, cvs) {
            if (err) {
                // Decide how to handle the error
                // `err` may be a string or Error object
                console.log(err);
            } else {
                // Nothing else to do in this example...
                console.log("Barcode success")
            }
        });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Barcode Generator</h1>
        </header>
        <p>Barcode Type: <BarcodeTypes/></p>
        <canvas id="mycanvas"></canvas>
      </div>
    );
  }
}

export default App;
