import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import './FooterStyle.css'

import {Button, Container, Typography} from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
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


function FooterButton(props)
{

    const classes = useStyles();
    return ( 

        <Button className={classes.btns} id={"btn" + props.num}>
            <Container  id="cont" >
                    {props.icon}
                <Typography>
                    {props.text}
                </Typography>
            </Container>
        </Button>


    );
}

export default FooterButton;