import './App.css';
import * as React from 'react';

import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import createCache from "@emotion/cache";
import { CacheProvider } from "@emotion/react";

import { Box } from '@mui/material';
import DataTable from "./components/table/table";

const data = [
  createData('111111111', 'רועי גרומט', 'roygim@gmail.com', '01/01/2001', 'Male', '0545555555'),
  createData('222222222', 'רועי גרומט', 'roygim@gmail.com', '01/01/2001', 'Male', '0545555555'),
  createData('333333333', 'רועי גרומט', 'roygim@gmail.com', '01/01/2001', 'Male', '0545555555'),
]

function createData(id, name, email, birthday, gender, phone) {
  return { id, name, email, birthday, gender, phone };
}

function App() {

  const cacheRtl = createCache({
    key: "muirtl",
    stylisPlugins: [prefixer, rtlPlugin],
  });

  return (
    <Box dir="rtl" className="App">
      <CacheProvider value={cacheRtl}>
        <DataTable data={data} />
      </CacheProvider>
    </Box>
  );
}

export default App;