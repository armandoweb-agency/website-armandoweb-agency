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
    <Box section="main"> 
      <Box setion="navbar" id="navbar"><NavBar /></Box>     
      <Box section="intro"><IntroContainer /></Box>  
      <Box section="image-hero"><ImageHeroContainer /></Box>    
      <Box section="servicios"><ServiceContainer /></Box> 
      <Box section="tecnologias"><TechContainer /></Box>   
      <Box section="portafolio"><PortfolioContainer /></Box>  
      <Box section="contacto"><FooterContainer /></Box> 
    </Box>
  )
}

export default LayoutContainer;