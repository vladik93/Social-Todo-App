import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

// Material-Ui Components
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AssignmentIcon from '@material-ui/icons/Assignment';
import GroupIcon from '@material-ui/icons/Group';
import PersonIcon from '@material-ui/icons/Person';
import MessageIcon from '@material-ui/icons/Message';
import SettingsIcon from '@material-ui/icons/Settings';
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';

const drawerWidth = 200;


const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        background: 'linear-gradient(90deg, #ffffff 30%, #f2f2f2 90%)',
        padding: theme.spacing(1)
    },
    normalIcon: {
        color: '#006666',
        fontSize: 30
    },
    favoredIcon: {
        color: '#ffbb33',
        fontSize: 30
    },
    title: {
        marginLeft: theme.spacing(1)
    }
}));

function DrawerComponent(props) {
    const { window } = props;
    const classes = useStyles();
    const container = window !== undefined ? () => window().document.body : undefined;

    const drawer = (
        <div>
            <div className={classes.toolbar}>
            <Typography variant="h4" className={classes.title}>Panel</Typography>
            <Divider />
            <List>
                {['Tasks', 'Finished Tasks', 'Starred Tasks'].map((text, index) => (
                    <ListItem button>
                        <ListItemIcon>{index === 2 ? <AssignmentIcon className={classes.favoredIcon} /> 
                        : <AssignmentIcon className={classes.normalIcon} /> }</ListItemIcon>
                        <ListItemText primary={text} color="primary" className={classes.listItemText}/>
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['Following', 'Friends'].map((text, index) => (
                    <ListItem button>
                        <ListItemIcon>
                            <GroupIcon className={classes.normalIcon} /> 
                        </ListItemIcon>
                        <ListItemText primary={text} color="primary" className={classes.listItemText} />
                    </ListItem>
                ))}
                <ListItem button>
                    <ListItemIcon>
                        <GroupIcon style={{color: '#1a1a1a'}} />
                    </ListItemIcon>
                    <ListItemText primary="Blacklist" />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <PersonIcon className={classes.normalIcon} />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <MessageIcon style={{color: '#b3b3b3', fontSize: 30}} />
                    </ListItemIcon>
                    <ListItemText primary="Messages" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <SettingsIcon className={classes.normalIcon}/>
                    </ListItemIcon>
                    <ListItemText primary="Messages" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <HelpOutlineIcon className={classes.normalIcon && classes.icon}/>
                    </ListItemIcon>
                    <ListItemText primary="About" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <MeetingRoomIcon style={{color: '#b3b3b3', fontSize: 30}}/>
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItem>

            </List>

            </div>
        </div>
    )


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
                  {drawer}
                </Drawer>
           </Hidden>
        </div>
    )
}


export default DrawerComponent;