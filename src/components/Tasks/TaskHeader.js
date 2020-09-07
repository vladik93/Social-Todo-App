import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Grid, Card, CardHeader, CardContent, Accordion, Avatar, Typography} from "@material-ui/core"

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
                            subheader= {props.subheader}
                            action={props.action}
                            onClick={onCardClick.bind(this, props.id)}
                        >   
                        </CardHeader>
                        <CardContent>
                            <Typography variant="body2" style={{textDecoration: props.complete ? 'line-through': 'none'}}>{props.content}</Typography>
                            <Typography variant="body2">&nbsp;{props.status}</Typography>
                            { props.deadLinePercentage}
                        </CardContent>
                        {props.afterCard}
                        
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default TaskHeader;