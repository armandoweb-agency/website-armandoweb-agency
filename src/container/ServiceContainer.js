import React from 'react';
import MessageToAction from '../components/MessajeToAction/MessageToAction';
import Box from '@mui/material/Box';
import Services from '../components/ServiceItem/ServiceItem';
import { messageservice } from '../data/messageData';
import serviceData from '../data/serviceData';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';


const ServicesContainer = () => {
  return (
    <Container maxWidth="xl">
            {messageservice.map((e)=>( <MessageToAction key={e.title} {...e}/>))}   
            
        <Grid container spacing={2} justifyContent="center"> 
          {serviceData.map((e)=> <Services key={e.title} {...e}/>)} 
           
        </Grid> 
    </Container>

  )


  
}

export default ServicesContainer