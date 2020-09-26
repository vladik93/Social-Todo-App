import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import { getThemeProps } from '@material-ui/styles';


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
    }
}));




function Login(props) {
    const classes = useStyles();

    useEffect(() => {
        props.plusFunc(false);

    });
    return (
        <div className={classes.root}>
            <form noValidate>
                <Grid container spacing={0}>
                    <Grid item xs={12}>
                        <TextField variant="outlined" margin="normal" placeholder="Email" fullWidth  />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField variant="outlined" margin="normal" placeholder="Password" fullWidth />
                    </Grid>
                    <Grid item xs={6}>
                        <Button variant="contained" className={classes.button}>LOGIN</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Link>
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