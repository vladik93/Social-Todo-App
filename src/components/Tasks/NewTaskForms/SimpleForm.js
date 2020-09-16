import React, { useState } from 'react';
import CardWrapper from '../CardWrapper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

function SimpleForm(props) {
    const [ simpleTask, setSimpleTask ] = useState('');

    const onSimpleTaskSubmit = (e) => {
        e.preventDefault();
        props.addTaskToState(simpleTask);
        setSimpleTask('');
    }

    return (
        <CardWrapper>
            <form noValidate autoComplete="off" onSubmit={onSimpleTaskSubmit} >
                <TextField 
                    label="Task" 
                    multiline
                    rows="3"
                    variant="standard"
                    fullWidth
                    margin="normal"
                    value={simpleTask}
                    onChange={(e) =>  setSimpleTask(e.target.value)}  
                />
                <Button variant="contained" color="inherit" size="small" type="submit">SUBMIT</Button>

            </form>
        </CardWrapper>
    )
}


export default SimpleForm;


