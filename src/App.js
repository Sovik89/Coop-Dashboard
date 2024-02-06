//-------------------------------------------------------------------------------------------

import React, { useState, useEffect } from 'react';
import { readString } from 'react-papaparse';
import sitelistcsv from './files/SAP_FORECAST_SUMMARY.csv';
import './App.css';
import Header from './components/Header';
import DetailsModal from './components/DetailsModal'; // Import the DetailsModal component

function App() {
  const [dataList, setDataList] = useState([]);
  const [tableRow, setTableRow] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedStoreValue, setSelectedStoreValue] = useState(null);

  const papaconfig = {
    complete: (results, file) => {
      console.log('parsing complete:', results, file);

      const rowsArray = [];
      results.data.forEach((d) => {
        rowsArray.push(Object.values(d));
      });

      setDataList(rowsArray.slice(1));

      // Set the first row in the tableRow state
      if (rowsArray.length > 0) {
        let columnNames = rowsArray[0];
        columnNames.push("See Details");
        setTableRow(columnNames);
        //setTableRow(...tableRow,"See Details");
      }
    },
    download: true,
    error: (error, file) => {
      console.log('error while parsing:', error, file);
    },
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    readString(sitelistcsv, papaconfig);
  }, []);

  const renderButton = (diffValue,storeValue) => {
    if ( diffValue< 0) {
      return <button onClick={() => handleButtonClick(storeValue)} className='text-white bg-sky-400 hover:bg-sky-600 focus:ring-4 focus:ring-sky-800 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2  focus:outline-none '>More Details</button>;
    } else {
      return null;
    }
  };

  const handleButtonClick = (storeValue) => {
    setShowModal(true);
    setSelectedStoreValue(storeValue);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedStoreValue(null);
  };

  return (
    <div>
      <Header />
      <h1 className='flex justify-center font-bold text-sky-400 text-3xl'>SAP FORECAST DASHBOARD</h1>
      <br />
      <br />
      {dataList.length > 0 ? (
        <table className="m-6 w-full border-solid border-2 border-sky-600 rounded-md text-center text-gray-500 m">
          <thead className="m-4 text-xl text-white uppercase bg-sky-400 ">
            <tr>
              {tableRow.map((header, index) => (
                <th key={index}>{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {dataList.map((rowData, rowIndex) => (
              <tr key={rowIndex} className='p-3 text-xl'>
                {rowData.map((value, columnIndex) => (
                  <td key={columnIndex}>{value}</td>
                ))}
                <td>{renderButton(rowData[rowData.length-1],rowData[1])}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data to display</p>
      )}
      {showModal && <DetailsModal onClose={closeModal} storeValue={selectedStoreValue} />}
    </div>
  );
}

export default App;

//--------------------------------------------------------------------------------

// import React, { useState, useEffect } from 'react';
// import { readString } from 'react-papaparse';
// import sitelistcsv from './files/SAP_FORECAST_SUMMARY.csv';
// import './App.css';
// import Header from './components/Header';

// function App() {
//   const [dataList, setDataList] = useState([]);
//   const [tableRow, setTableRow] = useState([]);

//   const papaconfig = {
//     complete: (results, file) => {
//       console.log('parsing complete:', results, file);

//       const rowsArray = [];
//       results.data.forEach((d) => {
//         rowsArray.push(Object.values(d));
//       });

//       setDataList(rowsArray.slice(1));

//       // Set the first row in the tableRow state
//       if (rowsArray.length > 0) {
//         let columnNames = rowsArray[0];
//         columnNames.push("See Details");
//         setTableRow(columnNames);
//         //setTableRow(...tableRow,"See Details");
//       }
//     },
//     download: true,
//     error: (error, file) => {
//       console.log('error while parsing:', error, file);
//     },
//   };

//   useEffect(() => {
//     readString(sitelistcsv, papaconfig);
//   }, []);

//   const renderButton = (diffValue,storeValue) => {
//     if (diffValue < 0) {
//       return <button onClick={() => handleButtonClick(diffValue,storeValue)} className='text-white bg-sky-400 hover:bg-sky-600 focus:ring-4 focus:ring-sky-800 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2  focus:outline-none '>More Details</button>;
//     } else {
//       return null;
//     }
//   };

//   const handleButtonClick = (_,storeValue) => {
//     // Add your logic for handling button click with negative diff value
//     alert(`Store Value is: ${storeValue}`);
//   };

//   return (
//     <div>
//       <Header />
//       <h1 className='flex justify-center font-bold text-sky-400 text-3xl'>SAP FORECAST DASHBOARD</h1>
//       <br />
//       <br />
//       {dataList.length > 0 ? (
//         <table className="m-6 w-full border-solid border-2 border-sky-600 rounded-md text-center text-gray-500 m">
//           <thead className="m-4 text-xl text-white uppercase bg-sky-400 ">
//             <tr>
//               {tableRow.map((header, index) => (
//                 <th key={index}>{header}</th>
//               ))}
//             </tr>
//           </thead>
//           <tbody>
//             {dataList.map((rowData, rowIndex) => (
//               <tr key={rowIndex} className='p-3 text-xl'>
//                 {rowData.map((value, columnIndex) => (
//                   <td key={columnIndex}>{value}</td>
//                 ))}
//                 <td>{renderButton(rowData[rowData.length - 1],rowData[1])}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       ) : (
//         <p>No data to display</p>
//       )}
//     </div>
//   );
// }

// export default App;