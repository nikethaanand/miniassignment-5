import React from 'react';
import Box from '@mui/material/Box';
import './App.css';

function ChildComponent({ isBlack, onClick }) {
  // the color change us updated on click
  const toggleColor = () => {
    console.log('Clicked! isBlack:', isBlack);
    if(isBlack==true)
    {
        onClick(true); 
    }
    else{
        onClick(false);
    }
  };
  // A box with style and onclick is present here
  return (
    <Box
      className={`grid-item ${isBlack ? 'black-bg' : 'white-bg'}`}
      onClick={toggleColor}
    >
    </Box>
  );
}

export default ChildComponent;
