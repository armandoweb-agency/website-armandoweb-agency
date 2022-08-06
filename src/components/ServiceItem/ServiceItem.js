import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


const Services = ({ title, icon, message }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
    
    <CardContent>
    {icon}
      <Typography gutterBottom variant="h5" component="div">
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {message}
      </Typography>
    </CardContent>
  </Card>
  )
}

export default Services;