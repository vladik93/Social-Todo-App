import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

function SimpleTask() {
    return (
        <React.Fragment>
            <Grid item xs={12}>
                <TextField variant="outlined" margin="normal" placeholder="Task..." name="task_content" multiline rows="3" namez fullWidth />
            </Grid>
        </React.Fragment>
    )
}

export default SimpleTask;