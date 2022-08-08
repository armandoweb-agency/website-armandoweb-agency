import React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Copyright from './Copyright';


const Footer = () => {
  return (
    <Box
    component="footer" 
    sx={{ 
      bgcolor: 'background.paper', 
      p: 6, 
      minHeight: '10vh', 
      display: 'flex',
      flexDirection: 'column',
      }}         
  >
    <Box
        sx={{
          py: 3,
          px: 2,
          mt: 'auto',
        }}
      >
        <Container maxWidth="sm">
          <Copyright />
        </Container>
      </Box>
  </Box>
  )
}

export default Footer