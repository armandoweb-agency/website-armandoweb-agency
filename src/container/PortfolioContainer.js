import React, { useContext } from 'react';
import PortfolioItem from '../components/PortafolioItem/PortfolioItem';
import Container from '@mui/material/Container';
import { Grid } from '@mui/material';
import portfolioData from '../data/portfolioData.js';
import Typography from '@mui/material/Typography';
import ButtonColorContext from '../context/ButtonColorContext';

const PortfolioContainer = () => {

  const color = useContext(ButtonColorContext);

  return (
    <Container maxWidth="xl">
      <Typography
        component="h1"
        variant="h3"
        align="center"
        color={color.color}
        gutterBottom
      >
        Portafolio
      </Typography>
      <Typography variant="h6" align="center" color="text.secondary" paragraph>
        Listado de mis últimos desarrollos
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {portfolioData.map((e) => <PortfolioItem key={e.title} {...e} />)}
      </Grid>
    </Container>
  )
}

export default PortfolioContainer;