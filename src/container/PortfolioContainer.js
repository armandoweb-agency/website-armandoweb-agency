import React from 'react';
import PortfolioItem from '../components/PortafolioItem/PortfolioItem';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import portfolioData from '../data/portfolioData.js';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const PortfolioContainer = () => {
  return (
    <Container maxWidth="xl">
          <Typography
          component="h1"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Portafolio
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph>
          Mensaje de Portafolio
        </Typography>
    
      <Grid container spacing={2} justifyContent="center">
        {portfolioData.map((e)=><PortfolioItem key={e.title} {...e}/>)}
      </Grid>
    </Container>
  )
}

export default PortfolioContainer;