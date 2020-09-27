import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from "react-router-dom";
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
    }

}));

const Buttons = {
    Friends: 1,
    Message: 2,
    Tasks: 3,
    Settings: 4, 
    Profile: 5
};




function FooterButton(props)
{
    const classes = useStyles();
    const history = useHistory();
    
    const btnClick = (btnNum) =>
    {

        switch(btnNum)
        {
            
            case Buttons.Friends:
                history.push("friends");
                break;
            case Buttons.Message:
                history.push("messages");
                break;
            case Buttons.Tasks:
                history.push("tasks");
                break;
            case Buttons.Settings: 
                history.push("settings");
                break;
            case Buttons.Profile:
                history.push("profile");
                break;

        }

    }


    return ( 
        /*onClick={btnClick(props.num)}*/
        <Button onClick={() => btnClick(props.num)}  className={classes.btns} id={"btn" + props.num}>
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