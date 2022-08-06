import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Box from '@mui/material/Box';
import DevIcon from 'devicon-react-svg';
import { Grid } from '@mui/material';

const devIconStyle = {
    width: "25px",
};

const TechItem = ( { title, icon, message }) => {

  console.log(icon)

  return (
    <Grid item xs={12} sm={6} md={4}>
        <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
      >
        <DevIcon icon={icon} style={devIconStyle}/>       
        <Typography ml={5}>{title}</Typography>        
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {message}
        </Typography>
      </AccordionDetails>
    </Accordion>
    </Grid>

  )
}

export default TechItem;