import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Material-Ui Components
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';

const drawerWidth = 220;


const useStyles = makeStyles((theme) => ({
    drawerPaper: {
        width: drawerWidth,
        background: 'linear-gradient(90deg, #ffffff 30%, #f2f2f2 90%)'
    }
}));

function DrawerComponent(props) {
    const { window } = props;
    const classes = useStyles();
    const container = window !== undefined ? () => window().document.body : undefined;
    return (
        <div className={classes.drawer}>
           <Hidden smUp>
                <Drawer variant="temporary" 
                open={props.mobileOpen} 
                ModalProps={{keepMounted: true}} 
                onClose={props.handleDrawerToggle}
                container={container}
                classes={{paper: classes.drawerPaper}}
                >
                   <ul>
                       <li>Options</li>
                       <li>Home</li>
                   </ul>
                </Drawer>
           </Hidden>
        </div>
    )
}


export default DrawerComponent;