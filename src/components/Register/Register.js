import { Button, Card, Container, Grid, makeStyles, TextField } from '@material-ui/core';
import React, {useEffect, useState} from 'react';
import $ from 'jquery';



const useStyles = makeStyles((theme) => ({

    field: {
        width: "calc(100%-"+ theme.spacing(2) +")"
    },
    gridContainer: {
        margin: theme.spacing(0),
        marginBottom: theme.spacing(1)
    }
    
}));



function Register(props)
{

    const registerSubmit = () => {
        const ser = $("#form").serialize();
        $.get("http://localhost:6548/?" + ser, (data) => {
            console.log("data");
        });
    }

    const classes = useStyles();
    return(
        <Card>
            <form id="form"  >
                <Container className={classes.gridContainer}>
                    <Grid  container spacing={2}>
                        
                        <Grid item xs={12} >
                            <TextField className={classes.field} name="username" id="username" variant="outlined" margin="normal" placeholder="Email" fullWidth required  />
                        </Grid>
                        <Grid item xs={12} sm={5} md={5} lg={5}>
                            <TextField className={classes.field} name="password" id="password" variant="outlined" margin="normal" placeholder="Password" fullWidth required />
                        </Grid>
                        <Grid  item xs={6} >
                            <TextField className={classes.field} name="name" id="name" variant="outlined" margin="normal" placeholder="Personal Name" fullWidth />
                        </Grid>
                        <Grid  item xs={6}>
                            <TextField className={classes.field} name="lastname"id="lastname" variant="outlined" margin="normal" placeholder="Last Name" fullWidth  />
                        </Grid>
                        <Grid  item xs={2}>
                            <Button onClick={registerSubmit} type="submit" variant="contained" color="primary" className={classes.button}> Register </Button>
                        </Grid>

                    </Grid>
                </Container>
            </form>
        </Card>

    );
}


export default Register;
