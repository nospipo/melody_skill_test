import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material'

import React from 'react'

function melodytest() {
  return (
    <AppBar position="static" sx={{ bgcolor: "#2D2928" }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
            
        </IconButton>
        <Typography variant="h6" fontSize="32px" component="div" sx={{ flexGrow: 1 }}>
          Melody Skill Test
        </Typography>
        
      </Toolbar>
    </AppBar>
  );
}

export default melodytest