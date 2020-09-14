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
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
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
                    <Typography variant="body2">{props.content}</Typography>
                </CardContent>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <IconButton onClick={(e) => e.stopPropagation()}>
                            <DeleteIcon />
                        </IconButton>
                        <IconButton onClick={(e) => e.stopPropagation()}>
                            <EditIcon />
                        </IconButton>
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            {props.steps.map((step) => (
                                <ListItem button onClick={onTaskStepClick.bind(this, props.id, step.id)}>
                                    <ListItemText primary={step.task} style={{textDecoration: step.complete ? 'line-through' : 'none'}} />
                                    <IconButton edge="end">
                                        <DeleteIcon />
                                    </IconButton>
                                    <IconButton edge="end">
                                            <EditIcon />
                                    </IconButton>
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