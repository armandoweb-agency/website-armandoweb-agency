import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    greyligth: {
      main: '#999999',      
    },
    greydark: {
      main: '#333333',
    },
    error: {
      main: '#19857b',
    },
    googleGreen: {
      main: '#008744',
    },
    googleBlue: {
      main: '#0057e7',
    },
    googleRed: {
      main: '#d62d20',
    },
    googleYellow: {
      main: '#ffa700',
    },
    buttonColor: {
      main: '#333333',
      contrastText: '#ffffff',
    },
    
  },
});

export default theme;