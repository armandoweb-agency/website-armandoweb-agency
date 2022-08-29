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
      <Box section="intro" id="intro"><IntroContainer /></Box>  
      <Box section="image-hero" id="image-hero"><ImageHeroContainer /></Box>    
      <Box section="servicios" id="servicios"><ServiceContainer /></Box> 
      <Box section="tecnologias" id="tecnologias"><TechContainer /></Box>   
      <Box section="portafolio" id="portafolio"><PortfolioContainer /></Box>  
      <Box section="contacto" id="contacto"><FooterContainer /></Box> 
    </Box>
  )
}

export default LayoutContainer;