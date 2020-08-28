import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import IconButton from '@material-ui/core/IconButton';
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

const useStyles = makeStyles((theme) => ({
    card: {
        margin: theme.spacing(1)
    },
    cardActions: {
        // flexGrow: 2,
        justifyContent: 'space-between'
    },
    doneIcon: {
        fontSize: '2rem'
    }

}));

function CurrentTasks(props) {
    const classes = useStyles();
    const [ expanded, setExpanded ] = React.useState(false);
    
    
    const handleExpandClick = () => {
        // setExpanded(!expanded); // !boolean inverts the boolean (i.e. true => false, false => true)
    }


    return (
        <div className={classes.root}>
            <Grid container>
                {props.tasks.map((task) => (
                    <Grid item xs={12} sm={6}>
                        <Card variant="elevation" className={classes.card}>
                            <CardHeader avatar={
                                <Avatar src="/images/profiles/profile1.jpg"></Avatar>
                            }
                            title={task.title}
                            subheader={task.date}>
                            
                            </CardHeader>
                            {/* <CardActions className={classes.cardActions}> */}
                                {/* <IconButton onClick={handleExpandClick}>
                                    <ExpandMoreIcon />
                                </IconButton> */}
                                    
                            {/* </CardActions> */}
                            <Accordion>
                                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                    <AvatarGroup max={3} spacing="small">
                                        <Avatar src="/images/profiles/profile1.jpg" />
                                        <Avatar src="/images/profiles/profile1.jpg" />
                                        <Avatar src="/images/profiles/profile1.jpg" />
                                        <Avatar src="/images/profiles/profile1.jpg" />
                                        <Avatar src="/images/profiles/profile1.jpg" />
                                    </AvatarGroup>
                                </AccordionSummary>
                                <AccordionDetails>
                                    <List>
                                       {task.subtasks.map((subtask) => (
                                           <ListItem button>
                                                <ListItemIcon>
                                                    <DoneIcon className={classes.doneIcon} />
                                                </ListItemIcon>
                                                <ListItemText primary={subtask.content}/>
                                           </ListItem>
                                       ))}
                                    </List>
                                </AccordionDetails>
                                <AccordionActions>
                                    <Button size="small">Delete</Button>
                                </AccordionActions>
                            </Accordion>
                            {/* <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Tasks:</Typography>

                                </CardContent>
                            </Collapse> */}
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default CurrentTasks;