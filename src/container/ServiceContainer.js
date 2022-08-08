import React from 'react';
import Box from '@mui/material/Box';
import Services from '../components/ServiceItem/ServiceItem';
import serviceData from '../data/serviceData';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';


const ServicesContainer = () => {
  return (
    <Container maxWidth="xl">
      <Box>
        <Typography
          component="h1"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Haz tu los negocios y yo el desarrollo
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph>
          Seguimiento en todas las etapas del proyecto, implementación de soluciones de acuerdo al nicho de mercado o ideas a desarrollar.
        </Typography>
      </Box>
        <Grid container spacing={2} justifyContent="center"> 
          {serviceData.map((e)=> <Services key={e.title} {...e}/>)}            
        </Grid> 
    </Container>

  )


  
}

export default ServicesContainer