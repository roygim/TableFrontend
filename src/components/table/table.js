import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, IconButton } from '@mui/material';
import { HeaderCellWrap, TableRowWrap } from './table.css';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

function DataTable({ data }) {
  const [rows, setRows] = useState([]);

  useEffect(() => {
    if (data && data.length > 0) {
      setRows(data)
    }
  }, [data])

  const addData = (id) => {
    console.log(id)
    //add
    // const newData = createData('88888888', 'רועי גרומט', 'roygim@gmail.com', '01/01/2001', 'Male', '0545555555')
    // setRows(prev => [...prev, newData])

    //update
    // const newData = data[1]
    // newData.id = '777777777'
    // setRows(data)
    return
  }

  return (
    <Box className="DataTable" sx={{ textAlign: "left" }}>
      <Button
        variant="contained"
        sx={{ mb: "14px" }}
        disableElevation
        endIcon={<AddIcon />}
        onClick={() => addData()}
      >
        הוסף
      </Button>
      <TableContainer component={Paper} sx={{ maxHeight: 540 }}>
        <Table stickyHeader sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow >
              <HeaderCellWrap>ת.ז</HeaderCellWrap>
              <HeaderCellWrap>שם</HeaderCellWrap>
              <HeaderCellWrap>מייל</HeaderCellWrap>
              <HeaderCellWrap>תאריך לידה</HeaderCellWrap>
              <HeaderCellWrap>מין</HeaderCellWrap>
              <HeaderCellWrap>טלפון</HeaderCellWrap>
              <HeaderCellWrap></HeaderCellWrap>
              <HeaderCellWrap></HeaderCellWrap>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRowWrap
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{row.id}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.birthday}</TableCell>
                <TableCell>{row.gender}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>
                  <Button>עריכה</Button>
                </TableCell>
                <TableCell sx={{ width: "50px" }}>
                  <IconButton aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRowWrap>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default DataTable;