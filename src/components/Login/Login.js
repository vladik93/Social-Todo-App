import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import $ from 'jquery';
import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    button: {
        background: 'linear-gradient(90deg, #006666 30%, #33334d 90%)',
        color: '#fff'
    },
    aboutGrid: {
        marginTop: theme.spacing(4)
    },
    hr: {
        marginTop: theme.spacing(3)
    },
    
    titleContainer: {
        display: 'flex',
        textAlign: 'center',
        backgroundColor: '#878786',
        color: '#fff',
        // boxShadow: theme.shadows[19],
        textShadow: '1px 1px 1px #000',
        padding: theme.spacing(1),
    },
    register: {
        cursor: "pointer",
        fontWeight: "bold",
        fontSize: "20px"
    }
}));




function Login(props) {
    const classes = useStyles();
    const history = useHistory();

    useEffect(() => {
        props.plusFunc(false);

    });

    const loginClick = () => 
    {
        var username = $("#username").val();
        var password = $("#password").val();
        console.log("Clicked with " + username + ", and " + password);
        $.get(("http://localhost:6548?username=" + username + "&password=" + password) , (data) => 
        {
                
            if(data.logined)
            {
                console.log(data);
                let profile = data.res[0];
                alert("Logined: name: " + profile.name + " " + profile.lastname + ", age: " + profile.age);

            }
            else
                alert("No user");
            
        });
    };
    
    const registerClick = () =>
    {
        history.push("/register");
    }


    return (
        <div className={classes.root}>
            <form noValidate>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <TextField id="username" variant="outlined" margin="normal" placeholder="Email" fullWidth  />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField id="password" variant="outlined" margin="normal" placeholder="Password" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <Button onClick={loginClick} variant="contained" className={classes.button}>LOGIN</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Link onClick={registerClick} className={classes.register}>
                            Not Registered?
                        </Link>
                    </Grid>
                </Grid>
            </form>
            <hr className={classes.hr} />
            <Grid container spacing={0} className={classes.titleContainer}>
                <Grid item xs={12}>
                    <Typography variant="h3" component="h3">Welcome!</Typography>
                </Grid>
                <Grid item xs={12}>
                    <Typography>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus elementum velit a nibh pulvinar viverra. Integer tempor vel velit quis ornare. Nam pellentesque dolor at viverra blandit. Nulla posuere eget tortor nec laoreet.</Typography>
                </Grid>
            </Grid>
        </div>
    )
}


export default Login;