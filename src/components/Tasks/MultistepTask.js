import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TaskWrapper from './TaskWrapper';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';

import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
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
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';



const useStyles = makeStyles((theme) => ({
    card: {
        marginBottom: theme.spacing(1)
    }
}));

function MultistepTask(props) {
    const classes = useStyles();

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
                                
                    </AccordionDetails>
                </Accordion>
            </TaskWrapper>
        </div>
    )
}

export default MultistepTask;