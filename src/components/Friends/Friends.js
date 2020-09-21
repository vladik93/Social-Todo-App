import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Paper } from '@material-ui/core';
import { Height } from '@material-ui/icons';
import Friend from './Friend';




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
        width: "90%",
        height: "90%"
    },

}));



function Friends(props){


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
            <Paper elevation={3} className="holder">
                {friends}
            </Paper>
        </div>
        
    );
}

export default Friends;