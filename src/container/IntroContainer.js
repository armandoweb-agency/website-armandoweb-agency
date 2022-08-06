import React from 'react';
import Box from '@mui/material/Box';
import MessageToAction from '../components/MessajeToAction/MessageToAction';
import { messageintro } from '../data/messageData';

const Intro = () => {


  return (
    <Box>
      {messageintro.map((e)=>( <MessageToAction key={e.title} {...e}/>))}
    </Box>
    
  )
}

export default Intro