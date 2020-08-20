import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';

function MultistepTask() {
    const [ taskQuantity, setTaskQuantity] = useState(1);
    let tasks = [];

    const setMultitaskPanels = () => {
     
        for(let i = 0; i < taskQuantity; i++) {
            tasks.push(
                <Grid item xs={12}>
                    <TextField variant="outlined" margin="normal" placeholder="Task..." fullWidth />
                </Grid>
            )
        }
        return tasks;
    }



    return (
        <React.Fragment>
            <Grid item xs={12}>
                <TextField variant="outlined" margin="normal" placeholder="Title..." multiline rows="3" fullWidth />
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