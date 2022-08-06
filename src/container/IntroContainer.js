import React from 'react';
import Box from '@mui/material/Box';
import MessageToAction from '../components/MessajeToAction/MessageToAction';
import { messageintro } from '../data/messageData';
import Container from '@mui/material/Container';

const Intro = () => {


  return (
    <Container maxWidth="xl">
      <Box>
        {messageintro.map((e)=>( <MessageToAction key={e.title} {...e}/>))}
      </Box>

    </Container>

    
  )
}

export default Intro