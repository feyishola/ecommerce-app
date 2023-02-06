import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function BasicTable({columns=[], rows=[]}) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {columns.map((column)=>{
              // {label: 'Product name', key: 'ProductName'}
              return <TableCell>{column.label}</TableCell>;
            })}
            
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row,xd) => {
        // {productName:'Hat', quantity:1, Amount:1000, totalAmount:1000, Action:"button"}
            const columnHeadKeys = columns.map(c=> c.key);
            const cells = columnHeadKeys.map((key,id)=>{
              return <TableCell key={id} align="left">{row[key]}</TableCell>
              
            })

            return (
            <TableRow key={xd} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              {
                cells
              }
            </TableRow>)
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}