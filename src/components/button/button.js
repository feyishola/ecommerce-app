import * as React from 'react';
import Button from '@mui/material/Button';


export default function ButtonComp({onClick, buttonValue,size}) {
  return (
    
      <Button variant="contained" size={size} onClick={onClick}>{buttonValue}</Button>
  );
}
