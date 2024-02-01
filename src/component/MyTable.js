import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox } from '@mui/material';

const MyTable = () => {
  // Sample data for the table
//   const rows = [
//     { id: 1, name: 'John Doe', age: 25 },
//     { id: 2, name: 'Jane Doe', age: 30 },
//     { id: 3, name: 'Bob Smith', age: 22 },
//   ];

//   // State to track selected rows
//   const [selectedRows, setSelectedRows] = useState([]);

//   // Function to handle row selection
//   const handleRowSelect = (row) => {
//     console.log("row -->" , row)
//     // Check if the row is already selected
//     const isSelected = selectedRows.some((selectedRow) => selectedRow.id === row.id);

//     if (isSelected) {
//       // If selected, remove from the selectedRows array
//       setSelectedRows(selectedRows.filter((selectedRow) => selectedRow.id !== row.id));
//     } else {
//       // If not selected, add to the selectedRows array
//       setSelectedRows([...selectedRows, row]);
//     }
//   };

  //////////////////////////////////////////////////////

 // State to store the selected rows
 const [selectedRows, setSelectedRows] = useState([]);

 // Sample data for the table
 const rows = [
   { id: 1, name: 'John Doe', age: 30 },
   { id: 2, name: 'Jane Doe', age: 25 },
   // Add more rows as needed
 ];

 // Function to handle checkbox change
 const handleCheckboxChange = (event, row) => {
   if (event.target.checked) {
     // Add the selected row to the state
     setSelectedRows((prevSelectedRows) => [...prevSelectedRows, row]);
   } else {
     // Remove the deselected row from the state
     setSelectedRows((prevSelectedRows) => prevSelectedRows.filter((selectedRow) => selectedRow.id !== row.id));
   }
 };

  return (
    // <TableContainer component={Paper}>
    //   <Table>
    //     <TableHead>
    //       <TableRow>
    //         <TableCell>
    //           {/* Header cell for the checkbox */}
    //           {/* <Checkbox disabled={selectedRows.length === rows.length} /> */}
    //         </TableCell>
    //         <TableCell>ID</TableCell>
    //         <TableCell>Name</TableCell>
    //         <TableCell>Age</TableCell>
    //       </TableRow>
    //     </TableHead>
    //     <TableBody>
    //       {rows.map((row) => (
    //         <TableRow key={row.id} hover onClick={() => handleRowSelect(row)}>
    //           <TableCell>
    //             {/* Checkbox for each row */}
    //             <Checkbox checked={selectedRows.some((selectedRow) => selectedRow.id === row.id)} />
    //           </TableCell>
    //           <TableCell>{row.id}</TableCell>
    //           <TableCell>{row.name}</TableCell>
    //           <TableCell>{row.age}</TableCell>
    //         </TableRow>
    //       ))}
    //     </TableBody>
    //   </Table>
    //   {/* Display selected row data */}
    //   <div>
    //     <h2>Selected Rows:</h2>
    //     <ul>
    //       {selectedRows.map((row) => (
    //         <li key={row.id}>{`${row.name} (ID: ${row.id}, Age: ${row.age})`}</li>
    //       ))}
    //     </ul>
    //   </div>
    // </TableContainer>


    ///////////////////////////////////

    <div>
      {/* Table Container */}
      <TableContainer component={Paper}>
        {/* Table */}
        <Table>
          {/* Table Head */}
          <TableHead>
            <TableRow>
              {/* Checkbox column header */}
              <TableCell>
                <Checkbox />
              </TableCell>
              <TableCell>ID</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Age</TableCell>
            </TableRow>
          </TableHead>
          {/* Table Body */}
          <TableBody>
            {/* Map through rows and create table rows */}
            {rows.map((row) => (
              <TableRow key={row.id}>
                {/* Checkbox for each row */}
                <TableCell>
                  <Checkbox
                    // Check if the row is already selected
                    checked={selectedRows.some((selectedRow) => selectedRow.id === row.id)}
                    // Handle checkbox change
                    onChange={(event) => handleCheckboxChange(event, row)}
                  />
                </TableCell>
                {/* Data cells */}
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.age}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Display selected row data */}
      <div>
        <h2>Selected Rows:</h2>
        <ul>
          {selectedRows.map((selectedRow) => (
            <li key={selectedRow.id}>{`${selectedRow.name} - ${selectedRow.age} years old`}</li>
          ))}
        </ul>
      </div>
    </div>

  );
};

export default MyTable;
