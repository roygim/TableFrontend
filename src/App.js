import './App.css';
import React, { useEffect, useState } from 'react';

import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

import { Box, Button } from '@mui/material';
import DataTable from "./components/data-table/table";
import AddIcon from '@mui/icons-material/Add';
import DataDialog from './components/data-dialog/dialog';
import { addData, deleteData, getAllData, updateData } from "./services/data-service";

function App() {
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  const [data, setData] = useState([])
  const [open, setOpen] = useState(false)
  const [currentData, setCurrentData] = useState(null)

  useEffect(() => {
    getAllUsers()
  }, [])

  const getAllUsers = async (id) => {
    const res = await getAllData()
    setData(res)
  }

  const handleAddUser = async (data) => {
    try {
      const res = await addData(data)
      if (res) {
        // alert('יוזר הוסף בהצלחה')
        closeUserDialog()
        await getAllUsers()
      }
    } catch (error) {
      alert('אירעה שגיאה')
    }
  }

  const handleUpdateUser = async (id, data) => {
    try {
      const res = await updateData(id, data)
      if (res) {
        // alert('יוזר עודכן בהצלחה')
        closeUserDialog()
        await getAllUsers()
      }
    } catch (error) {
      alert('אירעה שגיאה')
    }
  }

  const deleteUser = async (id) => {
    try {
      const res = await deleteData(id)
      if (res) {
        // alert('יוזר נמחק בהצלחה')
        await getAllUsers()
      }
    } catch (error) {
      alert('אירעה שגיאה')
    }
  }

  const openUserDialog = (id) => {
    if (id) {
      const dataObj = data.find(d => d.id === id)
      setCurrentData(dataObj)
    }
    setOpen(true)
  }

  const closeUserDialog = () => {
    setCurrentData(null)
    setOpen(false)
  }

  return (
    <Box dir="rtl" className="App">
      <CacheProvider value={cacheRtl}>
        <Button
          variant="contained"
          sx={{ mb: "14px" }}
          disableElevation
          endIcon={<AddIcon />}
          onClick={() => openUserDialog()}
        >
          הוסף
        </Button>
        <DataTable data={data} addOrUpdateData={openUserDialog} deleteUser={deleteUser} />
        <DataDialog open={open} closeDialog={closeUserDialog} currentData={currentData} handleAddUser={handleAddUser} handleUpdateUser={handleUpdateUser} />
      </CacheProvider>
    </Box>
  );
}

export default App;