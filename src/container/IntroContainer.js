import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import MessageToAction from '../components/MessajeToAction/MessageToAction';
import { messageintro } from '../data/messageData';
import Container from '@mui/material/Container';
import ButtonColorContext from '../context/ButtonColorContext'

const Intro = ( ) => {

  const color = useContext(ButtonColorContext);

  return (
    <Container maxWidth="xl" sx={{ mt: 5 }}>
      <Box>
        {messageintro.map((e)=>( <MessageToAction color={color.color} key={e.title} {...e}/>))}
      </Box>
    </Container>    
  )
}

export default Intro