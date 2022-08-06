import React from 'react';
import TechItem from '../components/TechItem/TechItem';
import Container from '@mui/material/Container';
import techData from '../data/techData';
import { Grid } from '@mui/material';

const TechContainer = () => {
  return (
    <Container maxWidth="xl">

        {/* <TechItem/> */}
        <Grid container spacing={2} justifyContent="center"> 
     
        {techData.map((e)=> <TechItem key={e.title} {...e}/>)}
        </Grid> 
    
       
    
    </Container>

  )
}

export default TechContainer;
