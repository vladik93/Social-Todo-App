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


function MultistepTask(props) {
    const classes = makeStyles();
    const [ expanded, setExpanded ] = React.useState(false);

    return (
        <div className={classes.root}>
            <Grid container>
                <Grid item xs={12} sm={6}>
                    <Card variant="elevation" className={classes.card}>
                        <CardHeader avatar={
                                <Avatar src="/images/profiles/profile1.jpg"></Avatar>
                            }
                            title={new Date(Date.now()).toDateString()}
                            subheader="Multistep Task"
                        >    
                        </CardHeader>

                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                
                            </AccordionSummary>
                            <AccordionDetails>
                                <List>
                                    {/* {props.subtasks.map((subtask) => ( */}
                                        <ListItem button>
                                            <ListItemIcon>
                                                <DoneIcon className={classes.doneIcon} />
                                            </ListItemIcon>
                                            <ListItemText primary={props.content}/>
                                        </ListItem>
                                    ))}
                                </List>
                            </AccordionDetails>
                            <AccordionActions>
                                <Button size="small">Delete</Button>
                            </AccordionActions>
                        </Accordion>
                    </Card>
                </Grid>
                {/* ))} */}
            </Grid>
        </div>
    )
}

export default MultistepTask;