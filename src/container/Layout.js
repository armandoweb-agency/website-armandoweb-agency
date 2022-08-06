import React from 'react';
import Box from '@mui/material/Box';
import ServiceContainer from './ServiceContainer';
import IntroContainer from './IntroContainer';

const Layout = () => {
  return (
    <Box>  
            
        <Box elementType='section'><IntroContainer /></Box>      
        <Box><ServiceContainer /></Box>  
   
    </Box>
  )
}

export default Layout;