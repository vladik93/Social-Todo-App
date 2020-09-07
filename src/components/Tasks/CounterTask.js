import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TaskHeader from "./TaskHeader";


function CounterTask(props)
{
    

    return (
        <TaskHeader
        avatarSrc={"/images/profiles/profile1.jpg"}
        title={"Date here.."}
        subheader={"THE FUCKING COUNTER TASK"}
        />
    )
}

export default CounterTask; 