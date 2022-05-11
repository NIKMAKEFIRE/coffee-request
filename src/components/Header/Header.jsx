import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1, marginBottom: '60px' }}>
      <AppBar position="fixed">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { sm: 'block' } }}
          >
            Наш суперкофе
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
