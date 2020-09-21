import DeadlineTask from "./DeadlineTask";
import TaskHeader from "./TaskHeader";
import CounterTask from "./CounterTask";
import MultistepTask from "./MultistepTask";


function CounterTask(props) {
    const [ overallCount, setOverallCount ] = useState(props.overallCount);
    const [ doneCount, setDoneCount ] = useState(props.doneCount);
    const classes = useStyles();

    const onCountPlus = () => {
        if(doneCount < overallCount) {
            setDoneCount(doneCount + 1);
        } else {
            setDoneCount(doneCount);
        }
    }

    const onCountMinus = () => {
        if(doneCount <= 0) {
            setDoneCount(doneCount);
        } else {
            setDoneCount(doneCount - 1);
        }
    }

    const calcProgressPercentage = () => {
        let result = 100 * (doneCount / overallCount);
        return result.toFixed(0);
    }

    const onDeleteClick = (id) => {    
        props.onTaskDelete(id);
    }
 
    useEffect(() => {
        if(doneCount >= overallCount) {
            props.onTaskFinished(props.id, true)
        } else {
            props.onTaskFinished(props.id, false);
        }
    }, [doneCount])


    return (
        <div>
            <TaskWrapper>
                <CardHeader 
                    avatar={
                        <Avatar src="/images/profiles/profile1.jpg" />
                    }
                    title={new Date().toDateString()}
                    subheader="Counter Task"
                    action={
                        <div className={classes.cardActions}>
                            <IconButton edge="end" size="small" className={classes.plusOne} onClick={onCountPlus}>
                                <ArrowDropUpIcon />
                            </IconButton>
                            <Typography variant="h5" className={classes.counterText}>{doneCount}/{overallCount}</Typography>
                            <IconButton edge="end" size="small" className={classes.minusOne} onClick={onCountMinus}>
                                <ArrowDropDownIcon />
                            </IconButton>
                        </div>
                    }>
                </CardHeader>
                <CardContent>
                    <Typography variant="body2" style={{textDecoration: props.complete ? 'line-through' : 'none'}}>{props.content}</Typography>
                    <LinearProgress variant="determinate" value={calcProgressPercentage()} className={classes.progressBar}  color="primary" />
                </CardContent>
                <CardActions>
                    <IconButton onClick={onDeleteClick.bind(this, props.id)}>
                        <DeleteIcon />
                    </IconButton>
                    {/* <IconButton>
                        <EditIcon />
                    </IconButton> */}
                </CardActions>
                {/* <Accordion>
                    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                        <CardActions>
                            <IconButton>
                                <DeleteIcon />
                            </IconButton>
                            <IconButton>
                                <EditIcon />
                            </IconButton>
                        </CardActions>
                    </AccordionSummary>
                    <AccordionDetails>
                        
                    </AccordionDetails>
                </Accordion> */}
            </TaskWrapper>
        </div>
    )
}









export {
    DeadlineTask,
    TaskHeader,
    CounterTask,
    MultistepTask
}