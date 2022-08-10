import React from 'react';
import TechItem from '../components/TechItem/TechItem';
import Container from '@mui/material/Container';
import techData from '../data/techData';
import { Grid } from '@mui/material';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const TechContainer = () => {
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
          Tecnologías que uso
        </Typography>
        <Typography variant="h6" align="center" color="text.secondary" paragraph>
          Listado de las principales tecnologías que uso para desarrollar mis proyectos
        </Typography>
      </Box>
      <Grid container spacing={2} justifyContent="center">      
        {techData.map((e)=> <TechItem key={e.title} {...e}/>)}
      </Grid>     
    </Container>
  )
}

export default TechContainer;
