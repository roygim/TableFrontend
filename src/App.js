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
import { getAllData } from "./services/data-service";

function App() {
  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  const [data, setData] = useState([])
  const [open, setOpen] = useState(false)
  const [currentData, setCurrentData] = useState(null)

  useEffect(() => {
    async function handleGetData() {
      const res = await getAllData()
      setData(res)
    }

    handleGetData()
  }, [])

  const addOrUpdateData = (id) => {
    if (id) {
      const dataObj = data.find(d => d.id === id)
      console.log(dataObj)
      setCurrentData(dataObj)
    }
    setOpen(true)
  }

  const closeDialog = () => {
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
          onClick={() => addOrUpdateData()}
        >
          הוסף
        </Button>
        <DataTable data={data} addOrUpdateData={addOrUpdateData} />
        <DataDialog open={open} closeDialog={closeDialog} currentData={currentData} />
      </CacheProvider>
    </Box>
  );
}

export default App;