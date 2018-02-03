import React, { Component } from 'react';
import './FileUploader.css';

class FileUploader extends Component {

    constructor(props) {
        super(props);
    
        this.dropHandler = this.dropHandler.bind(this);
        this.dragOver = this.dragOver.bind(this);
        this.dragEnd = this.dragEnd.bind(this);
    }
    
    dropHandler(event) {
        console.log(event);
        event.preventDefault();

        var dt = event.dataTransfer;
        if (dt.items) {
            // Use DataTransferItemList interface to access the file(s)
            for (var i = 0; i < dt.items.length; i++) {
                if (dt.items[i].kind == "file") {
                    var f = dt.items[i].getAsFile();
                    console.log("... file[" + i + "].name = " + f.name);
                }
            }
        } else {
            // Use DataTransfer interface to access the file(s)
            for (var i = 0; i < dt.files.length; i++) {
                console.log("... file[" + i + "].name = " + dt.files[i].name);
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

        return (
            <div className="FileUploader" onDrop={this.dropHandler} onDragOver={this.dragOver} onDragEnd={this.dragEnd}>
                <strong>Drop barcode data file here...</strong>
            </div>
        );
      }
}

export default FileUploader;