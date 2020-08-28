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

function AddTask(props) {
    const classes = useStyles();
    const [ taskType, setTaskType ] = useState(1);



    const onTask = (data) => {
        console.log(data);
    }

    const onCounterTask = (task, counter) => {
        console.log(task, counter);
    }

    const onDeadlineTask = (task, date, time) => {
        console.log(task, date, time);
    }

    const onMultistepTask = (title, task) => {
        console.log(title, task);
    }

    return (
        <div className={classes.root}>
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
                </Grid>
                {
                    taskType == 1 ? <SimpleTask /> : 
                    taskType == 2 ? <CounterTask /> : 
                    taskType == 3 ? <DeadlineTask /> :
                    taskType == 4 ? <MultistepTask /> : null
                }
        </div> 
    )
}



export default AddTask;