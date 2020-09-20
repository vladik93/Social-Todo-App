import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AddIcon from '@material-ui/icons/Add'
import Fab from '@material-ui/core/Fab'

const useStyles = makeStyles((theme) => ({
    appbar: {
        // minHeight: '100vh'
    },
    toolbar: {
        background: 'linear-gradient(90deg, #006666 30%, #33334d 90%)',
        // height: '100vh'
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    }
}))

function Footer(props) {
    const classes = useStyles();
    return (
        <div>
            <Toolbar />

            <AppBar position={props.position} style={{top: "auto", bottom: 0}} className={classes.appbar}>
                <Toolbar className={classes.toolbar}>
                <Fab color="secondary" aria-label="add" className={classes.fabButton}>
                    <AddIcon />
                </Fab>

                </Toolbar>
            </AppBar>
        </div>
    )
}





export default Footer;