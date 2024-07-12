import React from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material'; // Import necessary components from Material-UI

// Array of objects representing persons
let persons = [
  {
    Name: "Rahul",
    Department: "CS",
    Semester: "S3"
  },
  {
    Name: "Priya",
    Department: "EC",
    Semester: "S5"
  },
  {
    Name:"Kiran",
    Department:"MEC",
    Semester:"S7"
  }
];

const Records = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Department</TableCell> {/* Changed 'Phone' to 'Department' */}
            <TableCell align="right">Semester</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {persons.map((person) => (
            <TableRow key={person.Name}>
              <TableCell component="th" scope="row">
                {person.Name}
              </TableCell>
              <TableCell align="right">{person.Department}</TableCell>
              <TableCell align="right">{person.Semester}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Records;