import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { fields } from './addressFields';

export default function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant='h6' gutterBottom>
        Shipping address
      </Typography>
      <Grid container spacing={3}>
        {fields.map((field) => (
          <Grid key={field.id} item xs={12}>
            <TextField {...field} />
          </Grid>
        ))}
        <Grid item xs={12}>
          <FormControlLabel
            control={
              <Checkbox color='secondary' name='saveAddress' value='yes' />
            }
            label='Use this address for payment details'
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
