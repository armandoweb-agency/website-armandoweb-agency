import React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';

const MessageToAction = ({ intro, title, message }) => {

  return (
    <Box
    sx={{
      bgcolor: 'background.paper',
      pt: 8,
      pb: 6,
    }}
  >
    <Container maxWidth="md">
    <Typography variant="h5" align="center" color="text.secondary" paragraph>
      {intro}
    </Typography>
      <Typography
        component="h1"
        variant="h3"
        align="center"
        color="text.primary"
        gutterBottom
      >
       {title}
      </Typography>
      <Typography variant="h6" align="center" color="text.secondary" paragraph>
      {message}
      </Typography>

      <Stack
        sx={{ pt: 4 }}
        direction="row"
        spacing={2}
        justifyContent="center"
      >
        <Button variant="contained" endIcon={<EmailIcon />} color="success">CONTACTAME</Button>
      </Stack>
    </Container>
  </Box>
  )

  
}

export default MessageToAction;