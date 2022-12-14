import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import { Grid } from '@mui/material';
import { useContext } from 'react';
import ButtonColorContext from '../../context/ButtonColorContext';

const ButtonColor = () => {

  const { color, handleChangeColor } = useContext(ButtonColorContext);

  return (
    <Grid container justifyContent="center">
      <Grid item>
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
            value={color}
            onChange={handleChangeColor}
          >
            <FormControlLabel value="#ffa700" labelPlacement="start" control={<Radio sx={{ color: "#ffa700", '&.Mui-checked': { color: "#ffa700" } }} />} />
            <FormControlLabel value="#008744" labelPlacement="start" control={<Radio sx={{ color: "#008744", '&.Mui-checked': { color: "#008744" } }} />} />
            <FormControlLabel value="#0057e7" labelPlacement="start" control={<Radio sx={{ color: "#0057e7", '&.Mui-checked': { color: "#0057e7" } }} />} />
            <FormControlLabel value="#d62d20" labelPlacement="start" control={<Radio sx={{ color: "#d62d20", '&.Mui-checked': { color: "#d62d20" } }} />} />
          </RadioGroup>
        </FormControl>

      </Grid>
    </Grid>
  )
}

export default ButtonColor;