import React from 'react';
import './App.css';
import ParentComponent from './ParentComponent';
import { Box } from '@mui/material';

function App() {
  return (
    <Box>
      <div className="container">
        <ParentComponent />
      </div>
    </Box>
  );
}

export default App;

