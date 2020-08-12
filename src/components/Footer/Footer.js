import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles((theme) => ({
    appbar: {
        // minHeight: '100vh'
    },
    toolbar: {
        background: 'linear-gradient(90deg, #006666 30%, #33334d 90%)',
        // height: '100vh'
    }
}))

function Footer() {
    const classes = useStyles();
    return (
        <div>
            <Toolbar />
            <AppBar position="static" className={classes.appbar}>
                <Toolbar className={classes.toolbar}>

                </Toolbar>
            </AppBar>
        </div>
    )
}





export default Footer;