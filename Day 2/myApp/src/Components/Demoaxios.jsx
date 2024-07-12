import React, { useEffect, useState } from 'react'
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material'; // Import necessary components from Material-UI
import axios from 'axios'

const Demoaxios = () => {
    const [rows,setRows]=useState([]);
    useEffect(()=>{
        axios.get('https://dummyjson.com/users').then((res)=>{
            setRows(res.data.users)//res- response object(in book meaning) . data . users- from dummyjson/users scn scn
        })
    },[])
            
        
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>First Name</TableCell>
            <TableCell align="right">Last Name</TableCell> 
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.firstName}>
              <TableCell component="th" scope="row">
                {row.firstName}
              </TableCell>
              <TableCell align="right">{row.lastName}</TableCell>
              <TableCell align="right">{row.gender}</TableCell>
              <TableCell align="right">{row.email}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Demoaxios