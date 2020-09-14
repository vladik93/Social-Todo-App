import React, {useState, useEffect} from 'react';


import TaskWrapper from "./TaskWrapper";
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/box';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import TimelapseIcon from '@material-ui/icons/Timelapse';
import ScheduleIcon from '@material-ui/icons/Schedule';
import IconButton from '@material-ui/core/IconButton';

import CircularProgress from '@material-ui/core/CircularProgress';

import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    // card: {
    //     marginBottom: theme.spacing(1)
    // },
    // cardActions: {
    //     justifyContent: 'space-between'
    // },
    // doneIcon: {
    //     fontSize: '2rem'
    // }
}));


function DeadlineTask(props) {
    let initCurrentDate = new Date().getTime();
    let initStartDate = new Date(props.startDate).getTime();
    let initDeadline = new Date(props.deadline).getTime();
                    
    const classes = useStyles();
    const [ currentDate, setCurrentDate ] = useState(initCurrentDate);
    const [ startDate, setStartDate ] = useState(initStartDate);
    const [deadline, setDeadline ] = useState(initDeadline)

    const compareTime = () => {
       if(currentDate > deadline) {
           props.onTaskTimeup(props.id);
       } else {
        //    console.log((deadline - currentDate));
       }
    }

    const calcPercentageLeft = () => {
        let result = 100 * ((currentDate - startDate) / (deadline - startDate));
        if(result > 100) {
            return "Time Up";
        }
        return result.toFixed(1);
    }
    
    useEffect(() => {
        if(!props.timeup) {
            const timer = setTimeout(() => {
                setCurrentDate(new Date().getTime());
            }, 1000);
            return () => clearTimeout(timer);
        } else {
            return;
        }
    }, [currentDate]);

    useEffect(() => {
        compareTime();
    }, [currentDate])


    const onCardClick = (id) => {
        props.onTaskFinished(id, true);
    }

    return (
        
        <div className={classes.root}>
            <TaskWrapper>
                <CardHeader 
                    avatar={
                        <Avatar src="/images/profiles/profile1.jpg"></Avatar>
                    }
                    title="Date Here..."
                    subheader="Deadline Task"
                    action={
                        <Box position="relative" display="inline-flex">
                            <CircularProgress variant="static" thickness={6.0} size={60} value={calcPercentageLeft()}></CircularProgress>
                                <Box 
                                    top={0}
                                    left={0}
                                    bottom={0}
                                    right={0}
                                    position="absolute"
                                    display="flex"
                                    alignItems="center"
                                    justifyContent="center"
                                >
                                <Typography variant="caption" style={{fontSize: '10px'}}>{calcPercentageLeft()}</Typography>
                            </Box>
                        </Box>
                    } 
                    onClick={onCardClick.bind(this, props.id)} >   
                </CardHeader>
                <CardContent>
                    <Typography variant="body2" style={{textDecoration: props.complete ? 'line-through': 'none'}}>{props.content}</Typography>
                </CardContent>
                <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <IconButton>
                            <DeleteIcon />
                        </IconButton>
                        {/* <IconButton>
                            <EditIcon />
                        </IconButton> */}
                    </AccordionSummary>
                    <AccordionDetails>
                        <List>
                            <ListItem>
                                <ListItemIcon>
                                    <ScheduleIcon />
                                </ListItemIcon>
                                <ListItemText primary={new Date(startDate).toLocaleString()} secondary="Start" />
                            </ListItem>
                            <ListItem>
                                <ListItemIcon>
                                    <TimelapseIcon />
                                </ListItemIcon>
                                <ListItemText primary={new Date(deadline).toLocaleString()} secondary="Deadline" />
                            </ListItem>
                            { !props.timeup ?
                                <ListItem>
                                    <ListItemIcon>
                                        <TimelapseIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={new Date(currentDate).toLocaleString()} secondary="Current Date" />
                                </ListItem> 
                            : null }   
                        </List>
                    </AccordionDetails>
                </Accordion>
            </TaskWrapper>
        </div>
    )
}

export default DeadlineTask;


