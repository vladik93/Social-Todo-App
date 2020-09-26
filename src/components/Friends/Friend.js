import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Card, CardActionArea, CardHeader, Container, Typography, Link } from '@material-ui/core';
import { InsertLinkRounded } from '@material-ui/icons';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    card: {
        marginTop: theme.spacing(2),
        marginRight: theme.spacing(1),
        marginLeft: theme.spacing(1)
    },
    text: {
        
    },
    avatar: { 
        width: theme.spacing(9),
        height: theme.spacing(9)
    },
    name: {
        fontSize: "2rem"
    }
}));

function Friend(props){
    const classes = useStyles();
    return (
        <div>
            
            <Card variant="outlined" className={classes.card}>
                <CardActionArea>
                    <CardHeader
                    avatar={ <Avatar src={props.src} className={classes.avatar} /> } 
                    title={
                    <Link 
                    className={classes.name}>
                        <Typography variant="h6" noWrap={true}> 
                            {props.name} 
                        </Typography>    
                    </Link>}
                    subheader={props.header}
                    />
                 </CardActionArea>
            
                


            </Card>
        </div>
    )
}

export default Friend;