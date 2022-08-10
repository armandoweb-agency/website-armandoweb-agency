import React, { useContext } from 'react';
import Container from '@mui/material/Container';
import { messageservice } from '../data/messageData';
import MessageToAction from '../components/MessajeToAction/MessageToAction';
import Footer from '../components/Footer/Footer';
import ButtonColorContext from '../context/ButtonColorContext';


const FooterContainer = () => {
  
const value = useContext(ButtonColorContext);

  return (
    <Container maxWidth="xl">
      {messageservice.map((e) => (<MessageToAction color={value.value} key={e.title} {...e} />))}
      <Footer />
    </Container>
  )
}

export default FooterContainer;