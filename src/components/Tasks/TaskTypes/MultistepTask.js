import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import Button from '@material-ui/core/Button';

function MultistepTask(props) {
    const [ taskQuantity, setTaskQuantity] = useState(1);
    const [ taskTitle, setTaskTitle] = useState('');
    const [ multistepTask, setMultistepTask ] = useState([]);
    
    let tasks = [];

    const onTaskFieldChange = (index) => (event) => {
       setMultistepTask({...multistepTask, [event.target.name]: event.target.value});
    }

    const setMultitaskPanels = () => {
        for(let i = 0; i < taskQuantity; i++) {
            tasks.push(
                <Grid item xs={12}>
                    <TextField 
                    variant="outlined" 
                    margin="normal" 
                    placeholder="Task..." 
                    name={`task${i}`}
                    fullWidth  
                    onChange={onTaskFieldChange(i)}/>
                </Grid>
            )
        }
        return tasks;
    }


    return (
        <form>
            <Grid container>
                <Grid item xs={12}>
                    <TextField 
                    variant="outlined" 
                    margin="normal" 
                    placeholder="Title..." 
                    multiline rows="3" 
                    fullWidth
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)} 
                    />
                </Grid>
                {setMultitaskPanels()}
                <IconButton onClick={() => setTaskQuantity(taskQuantity + 1)}>
                    <AddCircleOutlineIcon />
                </IconButton>
                <Grid item xs={12}>
                    <Button color="default" variant="contained">Submit</Button>
                </Grid>
            </Grid>
        </form>
        
    )
}

export default MultistepTask;