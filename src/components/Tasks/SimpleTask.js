import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import TaskWrapper from './TaskWrapper';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';

import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    card: {
        marginBottom: theme.spacing(1)
    },
    cardActions: {
        justifyContent: 'space-between'
    },
    doneIcon: {
        fontSize: '2rem'
    }

}));

function SimpleTask(props) {
    const classes = useStyles();

    const onCardClick = (id) => {
        props.onTaskFinished(id, true);
        console.log(props.complete)
    }

    return (
        <div className={classes.root}>
            <TaskWrapper>
                <CardHeader avatar={
                    <Avatar src="/images/profiles/profile1.jpg"></Avatar>
                }
                title={new Date(Date.now()).toDateString()}
                subheader="Simple Task"
                onClick={onCardClick.bind(this, props.id)} >    
                </CardHeader>
                <CardContent>
                    <Typography variant="body2" style={{textDecoration: props.complete ? 'line-through': 'none'}}>{props.content}</Typography>
                    <Typography variant="body2">{props.status}</Typography>
                </CardContent>
                <CardActions>
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                    <IconButton>
                        <EditIcon />
                    </IconButton>
                </CardActions>
            </TaskWrapper>
        </div>
    )
}

export default SimpleTask;