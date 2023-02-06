import * as React from 'react';
import Button from '@mui/material/Button';


export default function ButtonComp(props) {
  return (
    
      <Button variant="contained" size={props.size}>{props.buttonValue}</Button>
  );
}
