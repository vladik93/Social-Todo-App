import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TaskWrapper from "./TaskWrapper";

import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles((theme) => ({
    counterText: {
        fontWeight: 'bold',
        color: '#a6a6a6'
    },
    cardOptions: {
        display: 'flex',
        alignSelf: 'center'
    }
}))


function CounterTask(props) {
    const classes = useStyles();
    return (
        <div>
            <TaskWrapper>
                <CardHeader 
                    avatar={
                        <Avatar src="/images/profiles/profile1.jpg" />
                    }
                    title={new Date().toDateString()}
                    subheader="Counter Task"
                    action={<Typography variant="h5" className={classes.counterText}>0/9</Typography>}>
                </CardHeader>
                <CardContent>
                    <Typography variant="body2">{props.content}</Typography>
                </CardContent>
                <CardActions>
                    <div className={classes.cardOptions}>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton>
                        <EditIcon />
                    </IconButton>
                    </div>
                </CardActions>
            </TaskWrapper>
        </div>
    )
}

export default CounterTask; 