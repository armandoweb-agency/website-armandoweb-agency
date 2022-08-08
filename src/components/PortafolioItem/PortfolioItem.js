import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import DevIcon from 'devicon-react-svg';
import { Grid } from '@mui/material';
import LaunchIcon from '@mui/icons-material/Launch';
import Link from '@mui/material/Link';

const devIconStyle = {
  width: "25px",
};

const PortfolioItem = ( { title, message, img, linkweb, linkgithub } ) => {

  console.log(img)

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Box component="img" src={img} sx={{ height: "auto", width: "100%" }} />

      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography >{title}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {message}
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Box mt={1}>
      <Grid container justifyContent="center" direction="row" spacing={8} >
        <Grid item>
          <Link href={linkgithub}><DevIcon icon="github_badge" style={devIconStyle} /></Link>
        </Grid>
        <Grid item>
          <Link href={linkweb}><LaunchIcon style={devIconStyle} /></Link>
        </Grid>
      </Grid>

      </Box>

    </Grid>
  )
}

export default PortfolioItem;