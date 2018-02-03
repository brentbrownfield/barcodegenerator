import React, { Component } from 'react';
import bwipjs from 'bwip-js';

class Barcode extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {
            type="code128",
            data="UNSPECIFIED", 
            scale = 3, 
            height = 10, 
            includeText = false, 
            textAlign = 'center'
        } = this.props;

        return (
            <canvas ref={(input) => {
                bwipjs(input, {
                    bcid:        type,          // Barcode type
                    text:        data,          // Text to encode
                    scale:       scale,         // 3x scaling factor
                    height:      height,        // Bar height, in millimeters
                    includetext: includeText,   // Show human-readable text
                    textxalign:  textAlign,     // Always good to set this
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
            }}>
            </canvas>
        );
      }
}

export default Barcode;