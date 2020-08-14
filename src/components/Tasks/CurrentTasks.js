import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Collapse from '@material-ui/core/Collapse';

const useStyles = makeStyles((theme) => ({
    card: {
        margin: theme.spacing(1)
    },
    cardActions: {
        // flexGrow: 2,
        justifyContent: 'space-between'
    }

}));

function CurrentTasks() {
    const classes = useStyles();
    const [ expanded, setExpanded ] = React.useState(false);
    const [ id, setId] = React.useState(null);

    // const handleExpandClick = () => {
    //     setExpanded(!expanded); 
    //     !boolean inverts the boolean (i.e. true => false, false => true)
    // }

    const tasks = [
        {id: 1, title: 'Get Super Fit', subtasks: ['Do cardio', 'Eat right', 'Don\'t succumb to temptation'], date: '12/05/20'},
        {id: 2, title: 'Go On Vacation', subtasks: ['Wait til COVID-19 stops', 'Plan out whole trip',  'Post useless shit on social media'], date: '21/06/20'},
        {id: 3, title: 'Visit Dying Parents', subtasks: ['Visit parents', 'Deal with horrifying grief', 'Don\'t visit for at least 5 years'], date: '10/06/20'}
    ];

    useEffect(() => {
        for(let i = 0; i < tasks.length; i++) {
            if(tasks[i].id === id) {
                setExpanded(!expanded);
            }
        }
    }, [tasks, id])

    return (
        <div className={classes.root}>
            <Grid container>
                {tasks.map((task, index) => (
                    <Grid item xs={12} sm={6}>
                        <Card variant="elevation" className={classes.card}>
                            <CardHeader avatar={
                                <Avatar src="/images/profiles/profile1.jpg"></Avatar>
                            }
                            title={task.title}
                            subheader={task.date}>
                            
                            </CardHeader>
                            <CardActions className={classes.cardActions}>
                                <IconButton onClick={() => setId(task.id)}>
                                    <ExpandMoreIcon />
                                </IconButton>
                                    <AvatarGroup max={3} spacing="small">
                                        <Avatar src="/images/profiles/profile1.jpg" />
                                        <Avatar src="/images/profiles/profile1.jpg" />
                                        <Avatar src="/images/profiles/profile1.jpg" />
                                        <Avatar src="/images/profiles/profile1.jpg" />
                                        <Avatar src="/images/profiles/profile1.jpg" />
                                    </AvatarGroup>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Tasks:</Typography>

                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>
                ))}


                {/* <Grid item xs={12}>
                    <Card variant="outlined">
                        <CardHeader 
                        avatar={
                            <Avatar>
                                Cu
                            </Avatar>  
                        }>
                        </CardHeader>
                        <CardContent>
                            Card #1
                        </CardContent>
                    </Card>
                </Grid> */}
            </Grid>
        </div>
    )
}

export default CurrentTasks;