import React from 'react';
import MessageToAction from '../components/MessajeToAction/MessageToAction';
import Box from '@mui/material/Box';
import Services from '../components/ServiceItem/ServiceItem';
import { messageservice } from '../data/messageData';
import serviceData from '../data/serviceData';
import Grid from '@mui/material/Grid';


const ServicesContainer = () => {
  return (
    <Box>
        {messageservice.map((e)=>( <MessageToAction key={e.title} {...e}/>))}   
        <Grid container spacing={4}> 
          {serviceData.map((e)=> <Services key={e.title} {...e}/>)}  
        </Grid>      
             
    </Box>

  )
}

export default ServicesContainer