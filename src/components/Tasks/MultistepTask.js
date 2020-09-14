import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TaskWrapper from './TaskWrapper';

import CardHeader from '@material-ui/core/CardHeader';

import CardContent from '@material-ui/core/CardContent';

import Avatar from '@material-ui/core/Avatar';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AssignmentIcon from '@material-ui/icons/Assignment';
import EditIcon from '@material-ui/icons/Edit';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
    card: {
        marginBottom: theme.spacing(1)
    }
}));

function MultistepTask(props) {
    const classes = useStyles();


    const onTaskStepClick = (id, step) => {
        props.onTaskStepToggle(id, step);
    }


    const checkAllStepsComplete = () => {
        let result = props.steps.every(x => x.complete);

        if(result) {
            props.onTaskFinished(props.id, true);
        } else {
            props.onTaskFinished(props.id, false);
        }
    }

    const onDeleteClick = (id) => (e) => {
        e.stopPropagation();
        props.onTaskDelete(id);

    }

    useEffect(() => {
        checkAllStepsComplete();
        console.log(props);
    }, [props.steps])

    return (
        <div className={classes.root}>
            <TaskWrapper>
                <CardHeader avatar={
                        <Avatar src="/images/profiles/profile1.jpg"></Avatar>
                    }
                    title={new Date(Date.now()).toDateString()}
                    subheader="Multistep Task"
                >    
                </CardHeader>
                <CardContent>
                    <Typography variant="body2" style={{textDecoration: props.complete ? 'line-through' : 'none'}}>{props.content}</Typography>
                </CardContent>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <IconButton onClick={onDeleteClick(props.id)}>
                            <DeleteIcon />
                        </IconButton>
                        {/* <IconButton onClick={(e) => e.stopPropagation()}>
                            <EditIcon />
                        </IconButton> */}
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            {props.steps.map((step) => (
                                <ListItem button onClick={onTaskStepClick.bind(this, props.id, step.id)}>
                                    <ListItemIcon>
                                        <AssignmentIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={step.task} style={{textDecoration: step.complete ? 'line-through' : 'none'}} />
                                    {/* <IconButton edge="end" onClick={(e) => e.stopPropagation()}>
                                        <DeleteIcon />
                                    </IconButton>
                                    <IconButton edge="end" onClick={(e) => e.stopPropagation()}> 
                                            <EditIcon />
                                    </IconButton> */}
                                </ListItem>
                            ))}
                        </List>
                    </AccordionDetails>
                </Accordion>
            </TaskWrapper>
        </div>
    )
}

export default MultistepTask;