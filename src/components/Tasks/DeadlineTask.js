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
    const classes = useStyles();
    const [currentDate, setCurrentDate ] = useState(new Date(Date.now()));

    useEffect(() => {
        setTimeout(() => {
            setCurrentDate(new Date(Date.now()).getTime());
        }, 1000)

        // clearTimeout(timeout);
    }, [currentDate]);

    const compareSeconds = () => {
        let deadline = new Date(props.deadline).getTime();
        if(currentDate >= deadline) {
            console.log('Time up')
        } else {
            return currentDate + ' /// ' + deadline;
        }

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
                        >    
                        </CardHeader>
                        <Accordion>
                            <AccordionSummary expandIcon={<CircularProgress variant="static" value={45} />} >
                                <Typography variant="body2">{props.content}</Typography>
                               
                            </AccordionSummary>
                            <AccordionDetails>
                                {compareSeconds()}
                            </AccordionDetails>
                        </Accordion>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default DeadlineTask;


