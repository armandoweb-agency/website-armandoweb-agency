import React from 'react';
import Box from '@mui/material/Box';
import ServiceContainer from './ServiceContainer';
import IntroContainer from './IntroContainer';
import TechContainer from './TechContainer';
import PortfolioContainer from './PortfolioContainer';
import FooterContainer from './FooterContainer';
import ImageHeroContainer from './ImageHeroContainer';
import NavBar from '../components/NavBar/NavBar';

const LayoutContainer = () => { 

  return (
    <Box > 
      <Box id="navbar"><NavBar/></Box>     
      <Box mt={5} id="intro"><IntroContainer /></Box>  
      <Box mt={2}><ImageHeroContainer /></Box>    
      <Box mt={5} id="servicios"><ServiceContainer /></Box> 
      <Box mt={5} id="tecnologias"><TechContainer /></Box>   
      <Box mt={5} id="portafolio"><PortfolioContainer /></Box>  
      <Box mt={5} id="contacto"><FooterContainer /></Box> 
    </Box>
  )
}

export default LayoutContainer;