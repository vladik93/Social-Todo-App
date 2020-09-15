import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TaskWrapper from './TaskWrapper';

import CardHeader from '@material-ui/core/CardHeader';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({

}))

function AddTask(props) {
    const classes = useStyles();
    const [ taskType, setTaskType ] = useState(1);
    const [ activeStep, setActiveStep ] = useState(0);
    const maxSteps = 4;

    const fetchNextLabel = () => {
        switch(activeStep) {
            case 0: return 'Counter Task';
            case 1: return 'Deadline Task';
            case 2: return 'Multistep Task';
        }
    }

    const fetchBackLabel = () => {
        switch(activeStep) {
            case 0: return 'Simple Task';
            case 1: return 'Simple Task';
        }
    }

    return (
        <div className={classes.root}>
            <MobileStepper
                steps={maxSteps}
                position="static"
                variant="dots"
                activeStep={activeStep}
                nextButton={
                    <Button 
                        size="small" 
                        onClick={() => setActiveStep(activeStep + 1)}
                        disabled={activeStep === maxSteps - 1}
                        
                    >
                    {fetchNextLabel()}
                    </Button>
                }
                backButton={
                    <Button 
                        size="small" 
                        onClick={() => setActiveStep(activeStep - 1)}
                        disabled={activeStep === 0}
                    >
                    {fetchBackLabel()}
                    </Button>
                }
            
            
            
            
            >
            </MobileStepper>
        </div>
                
    )
}



export default AddTask;