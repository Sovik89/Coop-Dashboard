import React, { useState, useEffect } from 'react';
import { readString } from 'react-papaparse';
import "./modal.css";
import siteDetailsList from "../files/SAP_FORECAST_DETAILS.csv";

const DetailsModal = ({ onClose, storeValue }) => {
    const [dataDetailsList, setDataDetailsList] = useState([]);
    const [tableDetailsRow, setTableDetailsRow] = useState([]);
    const papaconfig = {
        complete: (results, file) => {
            console.log('parsing complete:', results, file);

            const rowsArray = [];
            results.data.forEach((d) => {
                rowsArray.push(Object.values(d));
            });

            setDataDetailsList(rowsArray.slice(1));

            // Set the first row in the tableRow state
            if (rowsArray.length > 0) {
                
                setTableDetailsRow(rowsArray[0]);
                //setTableRow(...tableRow,"See Details");
            }
        },
        download: true,
        error: (error, file) => {
            console.log('error while parsing:', error, file);
        },
    };
    // eslint-disable-next-line
    useEffect(() => {
        readString(siteDetailsList, papaconfig);
    }, []);

    // Filter the dataDetailsList based on storeValue
    const filteredData = dataDetailsList.filter(row => row[1] === storeValue);

    // Calculate the maximum character length for multi-line headers
    const maxCharLengthForMultiLine = 10;

    // Function to determine if a header should be multi-lined
    const shouldMultiLineHeader = (header) => header.length > maxCharLengthForMultiLine;

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={onClose}>&times;</span>
                <div>
                    <h1 className='flex justify-center font-bold text-sky-400 text-3xl'>SAP FORECAST DETAILS</h1>
                    <br />
                    <br />
                    {filteredData.length > 0 ? (
                        <table className="m-2 w-full border-solid border-2 border-sky-600 rounded-md text-center text-gray-500 m" style={{ tableLayout: "fixed" }}>
                            <colgroup>
                                {tableDetailsRow.map((_, index) => (
                                    <col key={index} style={{ width: `${100 / tableDetailsRow.length}%` }} />
                                ))}
                            </colgroup>
                            <thead className="m-4 text-xs text-white uppercase bg-sky-400">
                                <tr>
                                    {tableDetailsRow.map((header, index) => (
                                        <th key={index} style={{ whiteSpace: shouldMultiLineHeader(header) ? "normal" : "nowrap", padding: "8px" }}>{header}</th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="text-xs">
                                {filteredData.map((rowData, rowIndex) => (
                                    <tr key={rowIndex}>
                                        {rowData.map((value, columnIndex) => (
                                            <td key={columnIndex} style={{ whiteSpace: "pre-wrap", padding: "8px" }}>{value}</td>
                                        ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    ) : (
                        <p>No data to display</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default DetailsModal;