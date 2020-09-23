import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Card, CardActionArea, CardHeader, Container, Typography } from '@material-ui/core';
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
        
    },
    avatar: { 
        width: theme.spacing(12),
        height: theme.spacing(12)
    }
}));

function Friend(props){
    const classes = useStyles();
    return (
        <div>
            
            <Card className={classes.card}>
                <CardActionArea>
                    <CardHeader
                    avatar={ <Avatar src={props.src} className={classes.avatar} /> } 
                    title={props.name}
                    subheader="header"
                    />
                 </CardActionArea>
            
                


            </Card>
        </div>
    )
}

export default Friend;