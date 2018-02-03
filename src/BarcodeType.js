import React, { Component } from 'react';

const barcodeTypes = [
    {type: "auspost", description: "AusPost 4 State Customer Code" },
    {type: "azteccode", description: "Aztec Code" },
    {type: "azteccodecompact", description: "Compact Aztec Code" },
    {type: "aztecrune", description: "Aztec Runes" },
    {type: "bc412", description: "BC412" },
    {type: "channelcode", description: "Channel Code" },
    {type: "codablockf", description: "Codablock F" },
    {type: "code11", description: "Code 11" },
    {type: "code128", description: "Code 128" },
    {type: "code16k", description: "Code 16K" },
    {type: "code2of5", description: "Code 25" },
    {type: "code32", description: "Italian Pharmacode" },
    {type: "code39", description: "Code 39" },
    {type: "code39ext", description: "Code 39 Extended" },
    {type: "code49", description: "Code 49" },
    {type: "code93", description: "Code 93" },
    {type: "code93ext", description: "Code 93 Extended" },
    {type: "codeone", description: "Code One" },
    {type: "coop2of5", description: "COOP 2 of 5" },
    {type: "daft", description: "Custom 4 state symbology" },
    {type: "databarexpanded", description: "GS1 DataBar Expanded" },
    {type: "databarexpandedcomposite", description: "GS1 DataBar Expanded Composite" },
    {type: "databarexpandedstacked", description: "GS1 DataBar Expanded Stacked" },
    {type: "databarexpandedstackedcomposite", description: "GS1 DataBar Expanded Stacked Composite" },
    {type: "databarlimited", description: "GS1 DataBar Limited" },
    {type: "databarlimitedcomposite", description: "GS1 DataBar Limited Composite" },
    {type: "databaromni", description: "GS1 DataBar Omnidirectional" },
    {type: "databaromnicomposite", description: "GS1 DataBar Omnidirectional Composite" },
    {type: "databarstacked", description: "GS1 DataBar Stacked" },
    {type: "databarstackedcomposite", description: "GS1 DataBar Stacked Composite" },
    {type: "databarstackedomni", description: "GS1 DataBar Stacked Omnidirectional" },
    {type: "databarstackedomnicomposite", description: "GS1 DataBar Stacked Omnidirectional Composite" },
    {type: "databartruncated", description: "GS1 DataBar Truncated" },
    {type: "databartruncatedcomposite", description: "GS1 DataBar Truncated Composite" },
    {type: "datalogic2of5", description: "Datalogic 2 of 5" },
    {type: "datamatrix", description: "Data Matrix" },
    {type: "datamatrixrectangular", description: "Data Matrix Rectangular" },
    {type: "ean13", description: "EAN-13" },
    {type: "ean13composite", description: "EAN-13 Composite" },
    {type: "ean14", description: "GS1-14" },
    {type: "ean2", description: "EAN-2 (2 digit addon)" },
    {type: "ean5", description: "EAN-5 (5 digit addon)" },
    {type: "ean8", description: "EAN-8" },
    {type: "ean8composite", description: "EAN-8 Composite" },
    {type: "flattermarken", description: "Flattermarken" },
    {type: "gs1-128", description: "GS1-128" },
    {type: "gs1-128composite", description: "GS1-128 Composite" },
    {type: "gs1-cc", description: "GS1 Composite 2D Component" },
    {type: "gs1datamatrix", description: "GS1 Data Matrix" },
    {type: "gs1datamatrixrectangular", description: "GS1 Data Matrix Rectangular" },
    {type: "gs1northamericancoupon", description: "GS1 North American Coupon" },
    {type: "gs1qrcode", description: "GS1 QR Code" },
    {type: "hanxin", description: "Han Xin Code" },
    {type: "hibcazteccode", description: "HIBC Aztec Code" },
    {type: "hibccodablockf", description: "HIBC Codablock F" },
    {type: "hibccode128", description: "HIBC Code 128" },
    {type: "hibccode39", description: "HIBC Code 39" },
    {type: "hibcdatamatrix", description: "HIBC Data Matrix" },
    {type: "hibcdatamatrixrectangular", description: "HIBC Data Matrix Rectangular" },
    {type: "hibcmicropdf417", description: "HIBC MicroPDF417" },
    {type: "hibcpdf417", description: "HIBC PDF417" },
    {type: "hibcqrcode", description: "HIBC QR Code" },
    {type: "iata2of5", description: "IATA 2 of 5" },
    {type: "identcode", description: "Deutsche Post Identcode" },
    {type: "industrial2of5", description: "Industrial 2 of 5" },
    {type: "interleaved2of5", description: "Interleaved 2 of 5 (ITF)" },
    {type: "isbn", description: "ISBN" },
    {type: "ismn", description: "ISMN" },
    {type: "issn", description: "ISSN" },
    {type: "itf14", description: "ITF-14" },
    {type: "japanpost", description: "Japan Post 4 State Customer Code" },
    {type: "kix", description: "Royal Dutch TPG Post KIX" },
    {type: "leitcode", description: "Deutsche Post Leitcode" },
    {type: "matrix2of5", description: "Matrix 2 of 5" },
    {type: "maxicode", description: "MaxiCode" },
    {type: "micropdf417", description: "MicroPDF417" },
    {type: "microqrcode", description: "Micro QR Code" },
    {type: "msi", description: "MSI Modified Plessey" },
    {type: "onecode", description: "USPS Intelligent Mail" },
    {type: "pdf417", description: "PDF417" },
    {type: "pdf417compact", description: "Compact PDF417" },
    {type: "pharmacode", description: "Pharmaceutical Binary Code" },
    {type: "pharmacode2", description: "Two-track Pharmacode" },
    {type: "planet", description: "USPS PLANET" },
    {type: "plessey", description: "Plessey UK" },
    {type: "posicode", description: "PosiCode" },
    {type: "postnet", description: "USPS POSTNET" },
    {type: "pzn", description: "Pharmazentralnummer (PZN)" },
    {type: "qrcode", description: "QR Code" },
    {type: "rationalizedCodabar", description: "Codabar" },
    {type: "raw", description: "Custom 1D symbology" },
    {type: "royalmail", description: "Royal Mail 4 State Customer Code" },
    {type: "sscc18", description: "SSCC-18" },
    {type: "symbol", description: "Miscellaneous symbols" },
    {type: "telepen", description: "Telepen" },
    {type: "telepennumeric", description: "Telepen Numeric" },
    {type: "upca", description: "UPC-A" },
    {type: "upcacomposite", description: "UPC-A Composite" },
    {type: "upce", description: "UPC-E" },
    {type: "upcecomposite", description: "UPC-E Composite" }
];

const barcodeOpts = barcodeTypes.map((opt) => 
    <option key={opt.type} value={opt.type}>{opt.description}</option>
);

class BarcodeTypes extends Component {

    render() {
        return (
          <select className="BarcodeTypes">{barcodeOpts}</select>
        );
      }
}

export default BarcodeTypes;