import './Navbar.css';
import React, {useEffect, useState} from 'react';
import { withRouter } from 'react-router-dom';
import DrawerComponent from '../Drawer/Drawer';

// Material-Ui Components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
import AccountCircle from '@material-ui/icons/AccountCircle';

// Material-Ui Styles
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    title: {
        flexGrow: 1,
    },
    toolbar: {
        background: 'linear-gradient(90deg, #006666 30%, #33334d 90%)',
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    menuButton: {
        marginRight: theme.spacing(0)
    }
}));

function Navbar({history}) {
    const classes = useStyles();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    }

    useEffect(() => history.listen(() => {
        setMobileOpen(false);
    }), [])

    // ALSO WORKS
    // ===========================================
    // useEffect(() => history.listen(() => {
    //     setMobileOpen(); 
    // }), [])
    // ==========================================

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar className={classes.toolbar}>
                    <IconButton color="inherit" className={classes.menuButton} onClick={handleDrawerToggle}>
                        <MenuIcon />
                    </IconButton>

                    <Typography style={{ cursor: 'pointer' }} onClick={() => {history.push('/');}} variant="h6" className={classes.title}>
                        
                        SOCIAL TODO
                       
                    </Typography>
                    
                    
                    <IconButton color="inherit">
                        <AccountCircle />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Toolbar />
            <DrawerComponent mobileOpen={mobileOpen} setMobileOpen={setMobileOpen} handleDrawerToggle={handleDrawerToggle} />
        </div>
    )
}

export default withRouter(Navbar);