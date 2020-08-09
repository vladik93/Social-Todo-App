import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    
}));


function Login() {
    const classes = useStyles();
    return (
        <div>
            <Typography variant="h3" style={{display: 'flex', textAlign: 'center'}}>Login</Typography>
        </div>
    )
}


export default Login;