import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, IconButton } from '@mui/material';
import { HeaderCellWrap, TableRowWrap } from './table.css';
import DeleteIcon from '@mui/icons-material/Delete';
import { format } from 'date-fns';
import { he } from 'date-fns/locale';

function DataTable({ data = [], addOrUpdateData }) {
  
  const getBirthdayValue = (birthday) => {
    try {
      const val = format(new Date(birthday), "dd/MM/yy", { locale: he })
      return val
    } catch (error) {
      return "N\\A";
    }
  }

  return (
    <Box className="DataTable">
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
            {data.map((row, index) => (
              <TableRowWrap
                key={index}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell>{row.userId}</TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{getBirthdayValue(row.birthday)}</TableCell>
                <TableCell>{row.gender}</TableCell>
                <TableCell>{row.phone}</TableCell>
                <TableCell>
                  <Button
                    onClick={() => addOrUpdateData(row.id)}
                  >
                    עריכה
                  </Button>
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