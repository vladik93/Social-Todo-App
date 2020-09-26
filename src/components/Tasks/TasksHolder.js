import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    

}));



function TasksHolder(props)
{
    const classes = useStyles();


    useEffect(() =>{

        props.plusFunc(true);

    });
    
    return (
        <div>
            {props.children}
        </div>

    );
}

export default TasksHolder;