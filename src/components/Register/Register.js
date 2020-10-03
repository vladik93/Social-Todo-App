import { Button, Card, Container, FormControl, FormHelperText, Grid, Input, InputLabel, makeStyles, TextField } from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import $ from 'jquery';



const useStyles = makeStyles((theme) => ({

    field: {
        width: "calc(100%-"+ theme.spacing(2) +")"
    },
    gridContainer: {
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(1)
    }
    
}));

function letterEnglish(letter)
{
    let code = letter.charCodeAt(0);
    if(code >= 'a'.charCodeAt(0) && code <= 'z'.charCodeAt(0))
        return true;
    if(code >= 'A'.charCodeAt(0) && code <= 'Z'.charCodeAt(0))
        return true;
    if(code >= '0'.charCodeAt(0) && code <= '9'.charCodeAt(0))
        return true;

    return false;
}

function isEnglish(name)
{
    for(let i = 0; i < name.length; i++)
    {
        if(!letterEnglish(name.charAt(i)))
            return false;
    }
    return true;
}



function Register(props)
{

    const [usernameErr, setusernameErr] = useState(false);

    const registerSubmit = () => 
    {
        console.log("Register submit button");
        if(allValidation())
        {
            const ser = $("#form").serialize();
            console.log("Serialization: " + ser);
            // $.get("http://localhost:6548/?" + ser, (data) => {
            //     console.log("data");
            // });
        }
        
    }

    const emailValidation = () => {

        return true;

    }
    
    const nameValidation = async (args) => {
        let field = $("#nameinput");
        let name = field.val();
        if(name.length < 3)
        {
            setusernameErr("The username should be at least 3 letters long");
            field.trigger("focus");
            return false
        }
        if(name.includes(" ") || !isEnglish(name))
        {
            setusernameErr("Please use only English letters and numbers");
            field.trigger("focus");
            return false
        }
        if(name.length > 15)
        {
            setusernameErr("The username is too long");
            field.trigger("focus");
            return false;
        }

        
        setusernameErr(false);
        return true;
    }

    const passwordValidation = () => {
        return true;

    };

    const allValidation = () => {
        let flag = true;
        if(!nameValidation())
            flag = false;
            
        if(!emailValidation())
            flag = false;
        if(!passwordValidation())
            flag = false;
        
        return flag;
    }

    const classes = useStyles();
    return(
        <Card>
            <form id="form" >
                <Container className={classes.gridContainer}>
                    <Grid  container spacing={2}>
                        
                        <Grid item xs={12} >       
    
                            <TextField
                                name="username"
                                className={classes.field}
                                variant="outlined"
                                id="nameinput"
                                placeholder="Username"
                                onChange={nameValidation}
                                helperText={usernameErr}
                                error={usernameErr}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField className={classes.field} name="password" id="password" variant="outlined" margin="normal" placeholder="Password" fullWidth required />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField className={classes.field} name="email" id="email" variant="outlined" margin="normal" placeholder="E-mail" fullWidth required />
                        </Grid>
                        <Grid  item xs={6} >
                            <TextField className={classes.field} name="name" id="name" variant="outlined" margin="normal" placeholder="Personal Name" fullWidth />
                        </Grid>
                        <Grid  item xs={6}>
                            <TextField className={classes.field} name="lastname"id="lastname" variant="outlined" margin="normal" placeholder="Last Name" fullWidth  />
                        </Grid>
                        <Grid  item xs={2}>
                            <Button onClick={registerSubmit}  variant="contained" color="primary" className={classes.button}> Register </Button>
                        </Grid>

                    </Grid>
                </Container>
            </form>
        </Card>

    );
}


export default Register;
