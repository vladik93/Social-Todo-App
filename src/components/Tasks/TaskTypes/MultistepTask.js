import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

function MultistepTask() {
    const [ taskQuantity, setTaskQuantity] = useState(1);

    const onMultitaskInit = () => {
        let rows = [];
        for(let i = 1; i <= taskQuantity; i++) {
           rows.push(
               <Grid item xs={12}>
                    <TextField variant="outlined" margin="normal" fullWidth placeholder={`Task ${i}`} />
               </Grid>
           )
        }
        return rows;
    }

    return (
        <React.Fragment>
            <Grid item xs={12}>
                <TextField variant="outlined" margin="normal" placeholder="Title..." multiline rows="3" fullWidth />
            </Grid>
            {onMultitaskInit()}
        </React.Fragment>
    )
}

export default MultistepTask;