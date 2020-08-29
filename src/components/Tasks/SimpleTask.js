import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';

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
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    card: {
        margin: theme.spacing(1)
    },
    cardActions: {
        justifyContent: 'space-between'
    },
    doneIcon: {
        fontSize: '2rem'
    }

}));

function SimpleTask(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <Card variant="elevation" className={classes.card}>
                        <CardHeader avatar={
                            <Avatar src="/images/profiles/profile1.jpg"></Avatar>
                        }
                        title={new Date(Date.now()).toDateString()}
                        subheader="Simple Task"
                        >    
                        </CardHeader>
                        <CardContent>
                            <Typography variant="body2">
                                {props.content}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default SimpleTask;