import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

function DeadlineTask() {
    return (
        <React.Fragment>
            <Grid item xs={12}>
                <TextField type="text" variant="outlined" margin="normal" placeholder="Task..." multiline rows="3" fullWidth />
            </Grid>
            <Grid item xs={12}>
                <TextField type="date" variant="outlined" margin="normal" placeholder="Date..." fullWidth />
            </Grid>
            <Grid item xs={12}>
                <TextField type="time" variant="outlined" margin="normal" placeholder="Time..." fullWidth />
            </Grid>
        </React.Fragment>
    )
}

export default DeadlineTask;