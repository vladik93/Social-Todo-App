import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(() => ({


}));

function CurrentTasks() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12}>
                    <Card variant="outlined">
                        <CardHeader 
                        avatar={
                            <Avatar>
                                S
                            </Avatar>  
                        }>
                        </CardHeader>
                        <CardContent>
                            Card #1
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default CurrentTasks;