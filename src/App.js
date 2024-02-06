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

  // eslint-disable-next-line 
  useEffect(() => {
    readString(sitelistcsv, papaconfig);
  }, []);

  const renderButton = (diffValue, storeValue) => {
    if (diffValue < 0) {
      return <button onClick={() => handleButtonClick(storeValue)} className='text-white bg-sky-400 hover:bg-sky-600 focus:ring-4 focus:ring-sky-800 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2  focus:outline-none '>More Details</button>;
    } else {
      return <span className='items-center font-bold'>NA</span>;
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
      <label htmlFor="default-search" className="sr-only">Search</label>
      <div className="relative m-6 overflow-hidden z-0">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg className="w-4 h-4 text-black-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-black-900 border border-gray-300 rounded-lg bg-sky-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
        <button type="submit" className="absolute right-2.5 bottom-2.5 text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-4 py-2">Search</button>
      </div>
      {dataList.length > 0 ? (
        <div className='m-6 overflow-hidden shadow-md sm:rounded-lg'>
          <table className="w-full text-sm text-left rtl:text-right text-white " style={{ borderRadius: '0.5rem' }}>
            <thead className="text-xs text-white-700 uppercase bg-sky-600 ">
              <tr>
                {tableRow.map((header, index) => (
                  <th key={index} scope="col" className='px-6 py-3'>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dataList.map((rowData, rowIndex) => (
                <tr key={rowIndex} className='text-black bg-white border-b hover:bg-gray-50 '>
                  {rowData.map((value, columnIndex) => (
                    <td key={columnIndex} className='px-6 py-4'>{value}</td>
                  ))}
                  <td>{renderButton(rowData[rowData.length - 1], rowData[1])}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
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