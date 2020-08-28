import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function DeadlineTask(props) {
    const [ deadlineTask, setDeadlineTask ] = useState(null);
    const [ deadlineDate, setDeadlineDate ] = useState('2020-12-12');
    const [ deadlineTime, setDeadlineTime ] = useState('00:00');
    
    props.onDeadlineTask(deadlineTask, deadlineDate, deadlineTime);
    return (
        <React.Fragment>
            <Grid item xs={12}>
                <TextField 
                type="text" 
                variant="outlined" 
                margin="normal" 
                placeholder="Task..." 
                multiline rows="3" 
                fullWidth 
                value={deadlineTask} 
                onChange={(e) => setDeadlineTask(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
                <TextField 
                type="date" 
                variant="outlined" 
                margin="normal" 
                placeholder="Date..." 
                fullWidth 
                value={deadlineDate} 
                onChange={(e) => setDeadlineDate(e.target.value)} />
            </Grid>
            <Grid item xs={12}>
                <TextField 
                type="time" 
                variant="outlined" 
                margin="normal" 
                placeholder="Time..." 
                fullWidth 
                value={deadlineTime} 
                onChange={(e) => setDeadlineTime(e.target.value)} />
            </Grid>
        </React.Fragment>
    )
}

export default DeadlineTask;