import React, { Component } from 'react';
import './FileUploader.css';

class FileUploader extends Component {

    constructor(props) {
        super(props);
    
        this.dropHandler = this.dropHandler.bind(this);
        this.dragOver = this.dragOver.bind(this);
        this.dragEnd = this.dragEnd.bind(this);
        this.readFile = this.readFile.bind(this);
    }
    
    readFile(f) {
        let reader = new FileReader();
        let dataLoaded = this.props.dataLoaded;

		// Closure to capture the file information.
		reader.onload = (function (theFile) {
			return function (e) {
				try {
					const json = JSON.parse(e.target.result);
                    console.log('Parsed JSON = \n' + JSON.stringify(json));
                    dataLoaded(json);
				} catch (ex) {
					console.log('ex when trying to parse json = ' + ex);
				}
			}
		})(f);
		reader.readAsText(f);
    }

    dropHandler(event) {
        console.log(event);
        event.preventDefault();

        var dt = event.dataTransfer;
        if (dt.items) {
            // Use DataTransferItemList interface to access the file(s)
            for (var i = 0; i < dt.items.length; i++) {
                if (dt.items[i].kind === "file") {
                    var f = dt.items[i].getAsFile();
                    console.log("... file[" + i + "].name = " + f.name);
                    this.readFile(f);
                }
            }
        } else {
            // Use DataTransfer interface to access the file(s)
            for (i = 0; i < dt.files.length; i++) {
                console.log("... file[" + i + "].name = " + dt.files[i].name);
                this.readFile(dt.files[i]);
            }
        }
    }

    dragOver(event) {
        console.log(event);
        event.preventDefault();
    }

    dragEnd(event) {
        console.log(event);
        event.preventDefault();

        // Remove all of the drag data
        var dt = event.dataTransfer;
        if (dt.items) {
            // Use DataTransferItemList interface to remove the drag data
            for (var i = 0; i < dt.items.length; i++) {
                dt.items.remove(i);
            }
        } else {
            // Use DataTransfer interface to remove the drag data
            event.dataTransfer.clearData();
        }
    }

    render() {
        let displayStyle = this.props.display ? "block" : "none";
        return (
            <div className="FileUploader" style={{display: displayStyle}} onDrop={this.dropHandler} onDragOver={this.dragOver} onDragEnd={this.dragEnd}>
                <strong>Drop barcode data file here...</strong>
            </div>
        );
      }
}

export default FileUploader;