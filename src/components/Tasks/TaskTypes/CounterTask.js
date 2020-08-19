import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';

function CounterTask() {
    return (
        <React.Fragment>
            <Grid item xs={12}>
                <TextField type="text" variant="outlined" margin="normal" placeholder="Task..." multiline rows="3" fullWidth />
            </Grid>
            <Grid item xs={12}>
                <TextField type="number" variant="outlined" margin="normal" placeholder="Quantity..." inputProps={{ min: 1, max: 100}} fullWidth />
            </Grid>
        </React.Fragment>
    )
}

export default CounterTask;