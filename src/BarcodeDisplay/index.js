import React, { Component } from 'react';
import Barcode from 'Barcode';
import { ButtonToolbar, ButtonGroup, Button, Glyphicon } from 'react-bootstrap';
import './BarcodeDisplay.css';

class BarcodeDisplay extends Component {

    render() {
        return (
            <div className="BarcodeDisplay">
                <ButtonToolbar>
                    <ButtonGroup vertical>
                        <Button onClick={this.props.handleDelete}>
                            <Glyphicon glyph="trash" />
                        </Button>
                        <Button onClick={this.props.handleEdit}>
                            <Glyphicon glyph="pencil" />
                        </Button>
                    </ButtonGroup>
                </ButtonToolbar>
                <Barcode type={this.props.barcode.type} data={this.props.barcode.data} />
            </div>
        );
      }
}

export default BarcodeDisplay;