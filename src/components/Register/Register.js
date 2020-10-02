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



function Register(props)
{

    const [nameError, setNameError] = useState(false);

    const registerSubmit = () => 
    {
        console.log("Register submit button");
        if(allValidation())
        {
            // const ser = $("#form").serialize();
            // $.get("http://localhost:6548/?" + ser, (data) => {
            //     console.log("data");
            // });
        }
        
    }

    const emailValidation = () => {

        return false;

    }
    
    const nameValidation = (args) => {
        let field = $("#nameinput");
        let name = field.val();
        if(name.length < 5)
        {
            setNameError("The name should be at least 5 letters long");
            field.trigger("focus");
            return false
        }
        else if(name.length > 15)
        {
            setNameError("The username is too long");
            field.focus();
            return false;
            
        }

        setNameError(false);
        return true;
    }

    const passwordValidation = () => {
        return false;

    };

    const allValidation = () => {
        let flag = true;
        if(!nameValidation())
            flag = false;
            
        if(!emailValidation())
            flag = false;
        if(!passwordValidation())
            flag = false;
        
        return false;
    }

    const classes = useStyles();
    return(
        <Card>
            <form id="form" >
                <Container className={classes.gridContainer}>
                    <Grid  container spacing={2}>
                        
                        <Grid item xs={12} >       
    
                            <TextField
                                className={classes.field}
                                variant="outlined"
                                id="nameinput"
                                placeholder="Username"
                                onChange={nameValidation}
                                helperText={nameError}
                                error={nameError}
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
