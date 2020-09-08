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

function TaskWrapper(props)
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
                        {props.children}
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default TaskWrapper;