import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

function SimpleTask(props) {
    const [ simpleTask, setSimpleTask ] = useState(null);

    props.onTask(simpleTask);
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