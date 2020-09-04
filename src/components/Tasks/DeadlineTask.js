import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

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
    let initState = new Date().getTime();
    let setTime = new Date(props.deadline).getTime();
                    
    const classes = useStyles();
    const [currentDate, setCurrentDate ] = useState(initState);
    const [deadline, setDeadline ] = useState(setTime)

    const compareTime = () => {
       if(currentDate > deadline) {
           props.onTaskTimeup(props.id);
       } else {
           console.log((deadline - currentDate));
       }

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
                            onClick={onCardClick.bind(this, props.id)}
                        >   
                        </CardHeader>
                        <CardContent>
                            <Typography variant="body2" style={{textDecoration: props.complete ? 'line-through': 'none'}}>{props.content}</Typography>
                            <Typography variant="body2">&nbsp;{props.status}</Typography>
                        </CardContent>
                        <Accordion>
                            <AccordionSummary expandIcon={<CircularProgress variant="static" value={45} />} >
                                {props.timeup ? 'Time\'s Up!' : 'In Progress'}
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


