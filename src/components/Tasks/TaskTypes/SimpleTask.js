import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function SimpleTask(props) {
    const [ simpleTask, setSimpleTask ] = useState(null);

    return (
        <React.Fragment>
            <Grid item xs={12}>
                <TextField variant="outlined"
                 margin="normal" 
                 placeholder="Task..." 
                 multiline rows="3" 
                 fullWidth 
                 value={simpleTask}
                 onChange={(e) => setSimpleTask(e.target.value)}
                 required/>
            </Grid>
        </React.Fragment>
    )
}

export default SimpleTask;