import React from 'react';
import CardWrapper from '../CardWrapper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function SimpleForm(props) {
    return (
        <CardWrapper>
            <form noValidate autoComplete="off">
                <TextField 
                    label="Task" 
                    multiline
                    rows="3"
                    variant="standard"
                    fullWidth
                    margin="normal"  
                />
                <Button variant="contained" color="inherit" size="small">SUBMIT</Button>

            </form>
        </CardWrapper>
    )
}


export default SimpleForm;


