import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardMedia, Grid } from '@mui/material';

const ServiceItem = ({ title, icon, message }) => {

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 445, maxHeigth: 345 }}>
        <CardContent>
          <CardMedia>
            {icon}
          </CardMedia>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {message}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  )
}

export default ServiceItem;