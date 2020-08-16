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
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccordionActions from '@material-ui/core/AccordionActions';
import DoneIcon from '@material-ui/icons/Done';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    card: {
        margin: theme.spacing(1)
    },
    cardActions: {
        // flexGrow: 2,
        justifyContent: 'space-between'
    },
    doneIcon: {
        fontSize: '2rem'
    }

}));

function CurrentTasks() {
    const classes = useStyles();
    const [ expanded, setExpanded ] = React.useState(false);

    
    const tasks = [
        {id: 1, title: 'Get Super Fit', subtasks: 
            [
                {id: 1, content: 'Do cardio', complete: false}, 
                {id: 2, content: 'Eat right', complete: false}, 
                {id: 3, content: 'Don\'t succumb to temptation', complete: false}
            ], 
        date: '12/05/20', complete: false},
        {id: 2, title: 'Go On Vacation', subtasks: 
            [
                {id: 1, content: 'Wait til COVID-19 stops', complete: false}, 
                {id: 2, content: 'Plan out whole trip', complete: false}, 
                {id: 3, content: 'Post useless shit on social media', complete: false}
            ],
        date: '21/06/20', complete: false},
        {id: 3, title: 'Visit Dying Parents', subtasks: 
            [
             {id: 1, content: 'Visit parents', complete: false}, 
             {id: 2, content: 'Deal with horrifying grief', complete: false},
             {id: 3, content: 'Don\'t visit for at least 5 years', complete: false}
            ],
        date: '10/06/20', complete: false}
    ];
    
    
    const handleExpandClick = () => {
        // setExpanded(!expanded); // !boolean inverts the boolean (i.e. true => false, false => true)
    }

    const onSubtaskClick = (task, subtask) => {
        tasks.filter((value) => {
            if(value.id !== task) {
                return value;
            }
        })
    }


    return (
        <div className={classes.root}>
            <Grid container>
                {tasks.map((task) => (
                    <Grid item xs={12} sm={6}>
                        <Card variant="elevation" className={classes.card}>
                            <CardHeader avatar={
                                <Avatar src="/images/profiles/profile1.jpg"></Avatar>
                            }
                            title={task.title}
                            subheader={task.date}>
                            
                            </CardHeader>
                            {/* <CardActions className={classes.cardActions}> */}
                                {/* <IconButton onClick={handleExpandClick}>
                                    <ExpandMoreIcon />
                                </IconButton> */}
                                    
                            {/* </CardActions> */}
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <AvatarGroup max={3} spacing="small">
                                        <Avatar src="/images/profiles/profile1.jpg" />
                                        <Avatar src="/images/profiles/profile1.jpg" />
                                        <Avatar src="/images/profiles/profile1.jpg" />
                                        <Avatar src="/images/profiles/profile1.jpg" />
                                        <Avatar src="/images/profiles/profile1.jpg" />
                                    </AvatarGroup>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List>
                                       {task.subtasks.map((subtask) => (
                                           <ListItem button onClick={onSubtaskClick.bind(this, task.id, subtask.id)}>
                                                <ListItemIcon>
                                                    <DoneIcon className={classes.doneIcon} />
                                                </ListItemIcon>
                                                <ListItemText primary={subtask.content}/>
                                           </ListItem>
                                       ))}
                                    </List>
                                </AccordionDetails>
                                <AccordionActions>
                                    <Button size="small">Delete</Button>
                                </AccordionActions>
                            </Accordion>
                            {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Tasks:</Typography>

                                </CardContent>
                            </Collapse> */}
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default CurrentTasks;