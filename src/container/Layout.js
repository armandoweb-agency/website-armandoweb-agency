import React from 'react';
import Box from '@mui/material/Box';
import ServiceContainer from './ServiceContainer';
import IntroContainer from './IntroContainer';
import TechContainer from './TechContainer';
import PortfolioContainer from './PortfolioContainer';
import FooterContainer from './FooterContainer';

const Layout = () => {
  return (
    <Box>  
            
        <Box mt={5}><IntroContainer /></Box>      
        <Box mt={50}><ServiceContainer /></Box> 
        <Box mt={5}><TechContainer /></Box>   
        <Box mt={5}><PortfolioContainer /></Box>  
        <Box mt={5}><FooterContainer /></Box>  
    </Box>
  )
}

export default Layout;