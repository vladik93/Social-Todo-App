import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TaskWrapper from './TaskWrapper';

import SimpleForm from './NewTaskForms/SimpleForm';
import CounterForm from './NewTaskForms/CounterForm';
import DeadlineForm from './NewTaskForms/DeadlineForm';
import MultistepForm from './NewTaskForms/MultistepForm';

import CardHeader from '@material-ui/core/CardHeader';
import MobileStepper from '@material-ui/core/MobileStepper';
import StepContent from '@material-ui/core/StepContent';
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
            case 0: return 'Counter';
            case 1: return 'Deadline';
            case 2: return 'Multistep';
            default: return 'Simple'
        }
    }

    const fetchBackLabel = () => {
        switch(activeStep) {
            case 1: return 'Simple';
            case 2: return 'Counter';
            case 3: return 'Deadline';
            default: return 'Simple';
        }
    }

    const fetchTaskType = () => {
        switch(activeStep) {
            case 0: return <SimpleForm />
            case 1: return <CounterForm />
            case 2: return <DeadlineForm />
            case 3: return <MultistepForm />
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

            {fetchTaskType()}
        </div>
                
    )
}



export default AddTask;