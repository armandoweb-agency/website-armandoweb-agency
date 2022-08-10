import { Container } from '@mui/system';
import { useContext } from 'react';
import ImageHero from '../components/ImageHero/ImageHero';
import ButtonColorContext from '../context/ButtonColorContext';

const ImageHeroContainer = () => {

  const value = useContext(ButtonColorContext);

  return (
    <Container maxWidth="xl">
      <ImageHero color={value.value}/>
    </Container>   
  )
}

export default ImageHeroContainer;