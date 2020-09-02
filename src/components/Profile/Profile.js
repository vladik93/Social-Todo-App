import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    }
}));

function Profile() {
    const classes = useStyles();
    return (
        <div className={"profilePic"}>
            
        </div>
    )
}


export default Profile;