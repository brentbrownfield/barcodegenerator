import React, { Component } from 'react';
import bwipjs from 'bwip-js';

class Barcode extends Component {

    render() {
        return (
            <canvas ref={(input) => {
                bwipjs(input, {
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
            }}>
            </canvas>
        );
      }
}

export default Barcode;