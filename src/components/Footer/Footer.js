import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import AddIcon from '@material-ui/icons/Add'
import Fab from '@material-ui/core/Fab'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import { Button, Container, IconButton, Typography } from '@material-ui/core';

import {Person, Chat} from '@material-ui/icons';
import FooterButton from './FooterButton';


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
        position: "absolute",
        height: "100%",
        width: "20%",
        padding: 0,
        lineHeight: "375%",
        color: "white",
        textTransform: "none", 
        float: "none"
    },
    
    icon: {
        margin: "-30px",

    },
    
}));

function Footer(props) {
    const classes = useStyles();
    return (
        <div>
            <Toolbar />

            <AppBar position={props.position} style={{top: "auto", bottom: 0}} className={classes.appbar}>

                
                <Toolbar className={classes.toolbar}>
                    <FooterButton
                        text="Friends"
                        icon = {<Person className={classes.icon} />}
                        num={1}
                    />
                    {/* <Button className={classes.btns} id="btn1">
                        <Container  id="cont" >
                            
                            <Typography>
                                hey
                            </Typography>
                        </Container>
                    </Button> */}
                    <Button className={classes.btns} id="btn2" >
                        {/* Messages */}
                        <Chat/>
                            
                    </Button>
                    
                    { 
                        (props.isPlus) ? null 
                        :   <Button className={classes.btns} id="btn3"> Tasks</Button> 
                        
                        
                    }
                    
                    {
                        (props.isPlus) ?
                        
                        (
                        <Fab color="secondary" aria-label="add" className={classes.fabButton}>
                            <AddIcon />
                        </Fab>) 
                        : null

                    }
                    <Button className={classes.btns} id="btn4">
                        Settings
                        
                    </Button>
                    <Button className={classes.btns} id="btn5">
                        Profile
                        
                    </Button>
                


                </Toolbar>
            </AppBar>
        </div>
    )
}





export default Footer;