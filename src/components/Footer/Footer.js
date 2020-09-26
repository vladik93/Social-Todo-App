import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AddIcon from '@material-ui/icons/Add'
import Fab from '@material-ui/core/Fab'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { Button, IconButton } from '@material-ui/core';

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
    },
    btns: {
        position: "static",
        height: "100%",
        width: "19%",
        padding: 0,
        color: "white"
    }
}))

function Footer(props) {
    const classes = useStyles();
    return (
        <div>
            <Toolbar />

            <AppBar position={props.position} style={{top: "auto", bottom: 0}} className={classes.appbar}>

                
                <Toolbar className={classes.toolbar}>
                <Button className={classes.btns}>
                    aria
                    
                </Button>
                <Button className={classes.btns}>
                    shit
                    
                </Button>
                
                { 
                (props.isPlus) ? 
                <div className={classes.btns}/> :
                <Button className={classes.btns}> Tasks</Button>
                }
                
                {
                    (props.isPlus) ?
                     
                    (
                    <Fab color="secondary" aria-label="add" className={classes.fabButton}>
                        <AddIcon />
                    </Fab>) 
                    : null

                }
                <Button className={classes.btns}>
                    aria
                    
                </Button>
                <Button className={classes.btns}>
                    shit
                    
                </Button>
                


                </Toolbar>
            </AppBar>
        </div>
    )
}





export default Footer;