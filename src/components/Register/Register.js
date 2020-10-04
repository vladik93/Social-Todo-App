import { Button, Card, Container, FormControl, FormHelperText, Grid, Input, InputLabel, Link, makeStyles, TextField, Typography } from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import $ from 'jquery';



const useStyles = makeStyles((theme) => ({

    field: {
        width: "calc(100%-"+ theme.spacing(2) +")"
    },
    gridContainer: {
        marginBottom: theme.spacing(1),
        marginTop: theme.spacing(1)
    }, 
    title: {
        marginBottom: theme.spacing(2)
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
    const [passwordError, setPasswordErr] = useState(false);
    const [emError, setEMError] = useState(false);

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

    const emailValidation = async () => {

        let field = $("#mailinput");
        let mail = field.val();
        console.log("validation of " + mail)

        $.get("http://localhost:6548/validation?mail=" + mail, (data) =>
        {
            console.log("Data is: " + data);

            if(data.exists)
            {
                console.log("Email exists");
                setEMError(<div><Typography>This email is already taken <Link> Forgotten password ?</Link></Typography></div>  );
                field.trigger("focus");
                return false;
            }
            else
            {
                console.log("Username doesn't exist");
                setEMError(false);
                return true;
                
            }
            
        });

        setEMError(false);

    }
    
    const nameValidation = async () => {
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

        $.get("http://localhost:6548/validation?user=" + name, (data) =>
        {
            console.log("Data is: " + data);

            if(data.exists)
            {
                console.log("Username exists");
                setusernameErr("This username is taken");
                field.trigger("focus");
                return false;
            }
            else
            {
                console.log("Username doesn't exist");
                setusernameErr(false);
                return true;
                
            }
            
        });

        setusernameErr(false);
        // return true;
    }

    const passwordValidation = () => {

        var field = $("#passinput");
        var pass = field.val();
        console.log("Password is:" + pass)
        if(pass.length < 5)
        {
            setPasswordErr("Password should be at least 5 characters long");
            field.trigger("focus");
            return false;
        }
        if(pass.length > 20)
        {
            setPasswordErr("Password should be no more than 20 characters long");
            field.trigger("focus");
            return false;
        }
        else if(!(pass.match(/[0-9]/) && (pass.match(/[a-z]/) && (pass.match(/[A-Z]/)))))
        {
            setPasswordErr("Password should contain at least one number, a letter and a capital letter");
            field.trigger("focus");
            return false;
        }
        
        setPasswordErr(false);
        return true;

    };

    const allValidation = () => {
        let flag = true;
        if(!nameValidation())
            return false;
        if(!passwordValidation())
            return false;
            
        if(!emailValidation())
            flag = false;
        
        
        return flag;
    }

    const classes = useStyles();
    return(
        <Card>
            
            <form id="form" >
                <Container className={classes.gridContainer}>
                    <Typography className={classes.title} variant="h4">
                        Registration
                    </Typography>
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
                                required
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} >
                            <TextField
                                    name="password"
                                    className={classes.field}
                                    variant="outlined"
                                    id="passinput"
                                    placeholder="Password"
                                    onChange={passwordValidation}
                                    helperText={passwordError}
                                    error={passwordError}
                                    required
                                    fullWidth
                                />
                        </Grid>
                        <Grid item xs={12} >
                        <TextField
                                    name="email"
                                    className={classes.field}
                                    variant="outlined"
                                    id="mailinput"
                                    placeholder="E-mail"
                                    onChange={emailValidation}
                                    helperText={emError}
                                    error={emError}
                                    required
                                    fullWidth
                                />
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
