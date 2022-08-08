import React from 'react';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { messageservice } from '../data/messageData';
import MessageToAction from '../components/MessajeToAction/MessageToAction';
import Footer from '../components/Footer/Footer';

const FooterContainer = () => {
  return (
    <Container maxWidth="xl">
    {messageservice.map((e)=>( <MessageToAction key={e.title} {...e}/>))}   
    <Footer/>
</Container>
  )
}

export default FooterContainer;