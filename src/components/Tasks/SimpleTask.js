import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TaskHeader from './TaskHeader';

const useStyles = makeStyles((theme) => ({
    card: {
        marginBottom: theme.spacing(1)
    },
    cardActions: {
        justifyContent: 'space-between'
    },
    doneIcon: {
        fontSize: '2rem'
    }

}));

function SimpleTask(props) {
    const classes = useStyles();

    const onCardClick = (id) => {
        props.onTaskFinished(id);
        console.log(props.complete)
    }

    console.log(props.children);

    return (
        <div className={classes.root}>
            {/* <Grid container>
                <Grid item xs={12} sm={6}>
                    <Card variant="elevation" className={classes.card}>
                        <CardHeader avatar={
                            <Avatar src="/images/profiles/profile1.jpg"></Avatar>
                        }
                        title={new Date(Date.now()).toDateString()}
                        subheader="Simple Task"
                        onClick={onCardClick.bind(this, props.id)}
                        >    
                        </CardHeader>
                        <CardContent>
                            <Typography variant="body2" style={{textDecoration: props.complete ? 'line-through': 'none'}}>{props.content}</Typography>
                            <Typography variant="body2">{props.status}</Typography>
                        </CardContent>
                        <CardActions>
                            <IconButton>
                                <DeleteIcon />
                            </IconButton>
                            <IconButton>
                                <EditIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid> */}
        </div>
    )
}

export default SimpleTask;