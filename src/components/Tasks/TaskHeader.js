import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/grid';

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

function TaskHeader(props)
{
    const onCardClick = (id) => {
        props.onTaskFinished(id);
    }
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <Card variant="elevation" className={classes.card}>
                        <CardHeader 
                            avatar={
                                <Avatar src={props.avatarSrc}></Avatar>
                            }
                            title={props.title}
                            subheader={props.children.subheader}
                            action={props.action}
                            onClick={onCardClick.bind(this, props.id)}
                        >   
                        </CardHeader>
                        <CardContent>
                            <Typography variant="body2" style={{textDecoration: props.complete ? 'line-through': 'none'}}>{props.content}</Typography>
                            <Typography variant="body2">&nbsp;{props.status}</Typography>
                        </CardContent>
                        <CardActions>
                            <IconButton>
                                <DeleteIcon />
                            </IconButton>
                            <IconButton>
                                <EditIcon />
                            </IconButton>
                        </CardActions>
                        
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default TaskHeader;