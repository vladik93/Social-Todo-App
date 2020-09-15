import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TaskWrapper from "./TaskWrapper";

import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';

import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';

import LinearProgress from '@material-ui/core/LinearProgress';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles((theme) => ({
    counterText: {
        fontWeight: 'bold',
        color: '#a6a6a6'
    },
    cardActions: {

    },
    plusOne: {
        color: '#000',
    },
    minusOne: {
        color: '#000',
    },
    progressBar: {
        padding: '0.3rem',
        marginTop: '1.2rem',
        boxShadow: '1px 1px 1px gray',
        borderRadius: '0.5rem'
    }
    // cardOptions: {
    //     display: 'flex',
    //     alignSelf: 'center'
    // }
}))


function CounterTask(props) {
    const [ overallCount, setOverallCount ] = useState(props.overallCount);
    const [ doneCount, setDoneCount ] = useState(props.doneCount);
    const classes = useStyles();

    const onCountPlus = () => {
        if(doneCount < overallCount) {
            setDoneCount(doneCount + 1);
        } else {
            setDoneCount(doneCount);
        }
    }

    const onCountMinus = () => {
        if(doneCount <= 0) {
            setDoneCount(doneCount);
        } else {
            setDoneCount(doneCount - 1);
        }
    }

    const calcProgressPercentage = () => {
        let result = 100 * (doneCount / overallCount);
        return result.toFixed(0);
    }

    const onDeleteClick = (id) => {    
        props.onTaskDelete(id);
    }
 
    useEffect(() => {
        if(doneCount >= overallCount) {
            props.onTaskFinished(props.id, true)
        } else {
            props.onTaskFinished(props.id, false);
        }
    }, [doneCount])


    return (
        <div>
            <TaskWrapper>
                <CardHeader 
                    avatar={
                        <Avatar src="/images/profiles/profile1.jpg" />
                    }
                    title={new Date().toDateString()}
                    subheader="Counter Task"
                    action={
                        <div className={classes.cardActions}>
                            <IconButton edge="end" size="small" className={classes.plusOne} onClick={onCountPlus}>
                                <ArrowDropUpIcon />
                            </IconButton>
                            <Typography variant="h5" className={classes.counterText}>{doneCount}/{overallCount}</Typography>
                            <IconButton edge="end" size="small" className={classes.minusOne} onClick={onCountMinus}>
                                <ArrowDropDownIcon />
                            </IconButton>
                        </div>
                    }>
                </CardHeader>
                <CardContent>
                    <Typography variant="body2" style={{textDecoration: props.complete ? 'line-through' : 'none'}}>{props.content}</Typography>
                    <LinearProgress variant="determinate" value={calcProgressPercentage()} className={classes.progressBar}  color="primary" />
                </CardContent>
                <CardActions>
                    <IconButton onClick={onDeleteClick.bind(this, props.id)}>
                        <DeleteIcon />
                    </IconButton>
                    {/* <IconButton>
                        <EditIcon />
                    </IconButton> */}
                </CardActions>
                {/* <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <CardActions>
                            <IconButton>
                                <DeleteIcon />
                            </IconButton>
                            <IconButton>
                                <EditIcon />
                            </IconButton>
                        </CardActions>
                    </AccordionSummary>
                    <AccordionDetails>
                        
                    </AccordionDetails>
                </Accordion> */}
            </TaskWrapper>
        </div>
    )
}

export default CounterTask; 