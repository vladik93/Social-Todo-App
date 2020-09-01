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
                    
    const classes = useStyles();
    const [currentDate, setCurrentDate ] = useState(initState);

    useEffect(() => {
        setTimeout(() => {
            setCurrentDate(currentDate + 1);
        }, 1000)
    }, [currentDate]);

    const compareTime = () => {
        let deadline = new Date(props.deadline).getTime();
        if(currentDate <= deadline) {
            console.log('Time up')
        } else {
            return currentDate + ' /// ' + deadline;
        }

    }

    const onCardClick = (id) => {
        props.onTaskFinished(id);
    }

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <Card variant="elevation" className={classes.card}>
                        <CardHeader avatar={
                            <Avatar src="/images/profiles/profile1.jpg"></Avatar>
                        }
                        title="Date Here..."
                        subheader="Deadline Task"
                        onClick={onCardClick.bind(this, props.id)}
                        >    
                        </CardHeader>
                        <Accordion>
                            <AccordionSummary expandIcon={<CircularProgress variant="static" value={45} />} >
                                <Typography variant="body2" style={{textDecoration: props.complete ? 'line-through': 'none'}}>{props.content}</Typography>
                                <Typography variant="body2">&nbsp;{props.status}</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                {compareTime()}
                            </AccordionDetails>
                        </Accordion>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default DeadlineTask;


