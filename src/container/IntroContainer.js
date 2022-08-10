import React, { useContext } from 'react';
import Box from '@mui/material/Box';
import MessageToAction from '../components/MessajeToAction/MessageToAction';
import { messageintro } from '../data/messageData';
import Container from '@mui/material/Container';
import ButtonColorContext from '../context/ButtonColorContext'

const Intro = ( ) => {

  const value = useContext(ButtonColorContext);

  return (
    <Container maxWidth="xl">
      <Box>
        {messageintro.map((e)=>( <MessageToAction color={value.value} key={e.title} {...e}/>))}
      </Box>
    </Container>    
  )
}

export default Intro