import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Card, Container, Typography } from '@material-ui/core';
import { InsertLinkRounded } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    card: {
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(1)
        
    },
    text: {
        
    }
}));

function Friend(props){
    const classes = useStyles();
    return (
        <div>
            
            <Card className={classes.card}>
            <Typography className={classes.text}>
                    {props.name}
                </Typography>
                <Avatar src={props.src}/>
                


            </Card>
        </div>
    )
}

export default Friend;