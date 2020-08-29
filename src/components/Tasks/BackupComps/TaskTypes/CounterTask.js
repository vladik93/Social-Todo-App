import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

function CounterTask(props) {
    const [ counterTask, setCounterTask ] = useState(null);
    const [ taskCounter, setTaskCounter ] = useState(1);

    return (
        <form>
            <Grid container>
                <Grid item xs={12}>
                    <TextField 
                    type="text" 
                    variant="outlined" 
                    margin="normal" placeholder="Task..." 
                    multiline rows="3" 
                    fullWidth 
                    value={counterTask} 
                    onChange={(e) => setCounterTask(e.target.value)} 
                    required/>
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                    type="number" 
                    variant="outlined" 
                    margin="normal" placeholder="Quantity..." 
                    inputProps={{ min: 1, max: 100}} 
                    fullWidth 
                    value={taskCounter}
                    onChange={(e) => setTaskCounter(e.target.value)} 
                    required/>
                </Grid>
                <Grid item xs={12}>
                    <Button color="default" variant="contained">Submit</Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default CounterTask;