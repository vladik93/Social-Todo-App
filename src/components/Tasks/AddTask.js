import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/inputLabel';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';

// Task Types
import SimpleTask from './TaskTypes/SimpleTask';
import CounterTask from './TaskTypes/CounterTask';
import DeadlineTask from './TaskTypes/DeadlineTask';
import MultistepTask from './TaskTypes/MultistepTask';

const useStyles = makeStyles((theme) => ({

}))

function AddTask() {
    const classes = useStyles();
    const [ taskType, setTaskType ] = useState(1);

    const onTaskSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }

    return (
        <div className={classes.root}>
            <form noValidate onSubmit={onTaskSubmit}>
                <Grid container>
                    <Grid item xs={12}>
                        <FormControl fullWidth>
                            <InputLabel>Task Type</InputLabel>
                            <Select native variant="outlined" value={taskType} name="task_type" onChange={(e) => setTaskType(e.target.value)}>
                                <option value={1}>Task</option>
                                <option value={2}>Task w. Counter</option>
                                <option value={3}>Task w. Deadline</option>
                                <option value={4}>Task w. Multiple Steps</option>
                            </Select>
                        </FormControl>
                    </Grid>
                    {
                        taskType == 1 ? <SimpleTask /> : 
                        taskType == 2 ? <CounterTask /> : 
                        taskType == 3 ? <DeadlineTask /> :
                        taskType == 4 ? <MultistepTask /> : null
                    }
                    <Grid item xs={12}>
                        <Button variant="contained" type="submit">ADD TASK</Button>
                    </Grid>
                </Grid>
            </form>
        </div>
    )
}



export default AddTask;