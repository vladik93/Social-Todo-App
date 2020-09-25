import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Paper, Typography, Card, TextField, Container} from '@material-ui/core';
import { Height } from '@material-ui/icons';
import Friend from './Friend';
import { positions } from '@material-ui/system';




class FriendClass 
{  //Pseudo class that will become useless once we have Server & Database 

    constructor(friendID, fullName, ImageURL)
    {
        this.friendID = friendID;
        this.fullName = fullName;
        this.ImageURL = ImageURL;
        
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    holder: {
        backgroundColor: "rgb(245,250,250)"
    },
    search: {

        marginLeft: theme.spacing(3)
    },
    friends: { 
        marginTop: theme.spacing(2)
    }

}));



function Friends(props){

    const changed = (change) => {
        console.log(change.target.value)
    }

    const classes = useStyles();

    const friendBase = [];
    const friends = [];
    for(let a = 0; a < 10; a++)
    {
        friendBase.push(new FriendClass(a, "Danek Terosh#" + a, "https://sun6-14.userapi.com/7a7_Zwd42_g0aqUAI_QlnftjEHHVA5IR289znQ/eRJGn-p8Dng.jpg"))
        friends.push( <Friend key={a} src={friendBase[a].ImageURL} name={friendBase[a].fullName} /> );
    }
    
    console.log(friendBase);

    


    return (
        <div className="root">
            <Typography variant="h3">
                Friends ({+ props.friendAmount }) : 
            </Typography>
            <Card className={classes.holder}>
   
                <TextField onChange={changed} className={classes.search}  label="Search" type="search" />

                <Container className={classes.friends}>
                    {friends}
                </Container>
                
     
            </Card>
        </div>
        
    );
}

export default Friends;