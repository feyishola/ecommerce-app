import * as React from 'react';
import Box from '@mui/material/Box';
import { green } from '@mui/material/colors';
import Icon from '@mui/material/Icon';

export default function Icons({icon}) {
  return (
    <Box
      sx={{
        '& > :not(style)': {
          m: 2,
        },
      }}
    >
      <Icon>add_circle</Icon>
      <Icon color="primary">add_circle</Icon>
      <Icon sx={{ color: green[500] }}>{icon}</Icon>
      <Icon fontSize="small">add_circle</Icon>
      <Icon sx={{ fontSize: 30 }}>add_circle</Icon>
    </Box>
  );
}