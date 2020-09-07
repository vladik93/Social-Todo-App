import React, {useState, useEffect} from 'react';


import TaskHeader from "./TaskHeader.js"
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Box from '@material-ui/core/box';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

import CircularProgress from '@material-ui/core/CircularProgress';

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
            return "Completed";
        }
        return result.toFixed(1);
    }
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentDate(new Date().getTime());
        }, 1000);
        return () => clearTimeout(timer);
    }, [currentDate]);

    useEffect(() => {
        compareTime();
    }, [currentDate])


    const onCardClick = (id) => {
        props.onTaskFinished(id);
    }

    return (
        
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <Card variant="elevation" className={classes.card}>
                        <CardHeader 
                            avatar={
                                <Avatar src="/images/profiles/profile1.jpg"></Avatar>
                            }
                            title="Date Here..."
                            subheader="Deadline Task"
                            action={
                                <Box position="relative" display="inline-flex">
                                    <CircularProgress variant="static" thickness={7.0} size={50} value={calcPercentageLeft()}></CircularProgress>
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
                            onClick={onCardClick.bind(this, props.id)}
                        >   
                        </CardHeader>
                        <CardContent>
                            <Typography variant="body2" style={{textDecoration: props.complete ? 'line-through': 'none'}}>{props.content}</Typography>
                        </CardContent>
                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <IconButton>
                                    <DeleteIcon />
                                </IconButton>
                            </AccordionSummary>
                            <AccordionDetails>

                            </AccordionDetails>
                        </Accordion>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default DeadlineTask;


