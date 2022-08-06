import React from 'react';
import Box from '@mui/material/Box';
import ServiceContainer from './ServiceContainer';
import IntroContainer from './IntroContainer';
import TechContainer from './TechContainer';

const Layout = () => {
  return (
    <Box>  
            
        <Box mt={5}><IntroContainer /></Box>      
        <Box mt={5}><ServiceContainer /></Box> 
        <Box mt={5}><TechContainer /></Box>   
   
    </Box>
  )
}

export default Layout;