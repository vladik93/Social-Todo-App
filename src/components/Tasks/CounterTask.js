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

    useEffect(() => {
        // onCounterStateChange();
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
                    <Typography variant="body2">{props.content}</Typography>
                </CardContent>
                <Accordion>
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
                </Accordion>
            </TaskWrapper>
        </div>
    )
}

export default CounterTask; 