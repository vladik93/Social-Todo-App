import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

function MultistepTask() {
    const [ taskQuantity, setTaskQuantity] = useState(1);
    const [ taskTitle, setTaskTitle] = useState(null);
    const [ multistepTask, setMultistepTask ] = useState(null);
    
    let tasks = [];

    const setMultitaskPanels = () => {
        for(let i = 0; i < taskQuantity; i++) {
            tasks.push(
                <Grid item xs={12}>
                    <TextField 
                    variant="outlined" 
                    margin="normal" 
                    placeholder="Task..." 
                    fullWidth 
                    value={multistepTask[i]} 
                    onChange={(e) => setMultistepTask(multistepTask)}/>
                </Grid>
            )
        }
        return tasks;
    }

    console.log(multistepTask);

    return (
        <React.Fragment>
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
            
            {/* <IconButton onClick={() => taskQuantity < 3 ? setTaskQuantity(taskQuantity + 1) : setTaskQuantity(taskQuantity)}>
                <AddCircleOutlineIcon />
            </IconButton>
             */}
        </React.Fragment>
    )
}

export default MultistepTask;