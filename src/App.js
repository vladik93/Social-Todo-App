// import Task from "./scripts/Task.js";
import './App.css';

import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';

import {CounterTask, MultistepTask, DeadlineTask, SimpleTask}  from './components/Tasks/Tasks';
import AddTask from './components/Tasks/AddTask';

import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
    container: {
      minHeight: '450px'
    }
}));


function App() { 

  const createDate = (day, month, year,) => {
    //Month starts from 0 (Jan = 0, Dec = 11)
    return new Date(year, (month-1), day);
  };
  const createDateTime = (day, month, year, hour, minute, second) => {
      return new Date(year, (month-1), day, hour, minute, second);
  }

  console.log(createDateTime(5, 2, 2001, 7, 20, 47));
  console.log(createDate(20, 8, 2001));


  const initialState =  [
    {id: 1, type: 2, content: 'Save Mom from Exploding', startDate: createDateTime(7, 9, 2020, 13, 1, 0) , deadline: createDateTime(7, 9, 2020, 13, 7, 0) , complete: false, timeup: false },
    {id: 2, type: 1, content: 'Save Mom from Drowning', complete: false},
    {id: 3, type: 2, content: 'Save Mom from Birthing Me', startDate: createDateTime(5, 9, 2020, 20, 5, 0) , deadline: createDateTime(5, 9, 2020, 21, 21, 0) , complete: false, timeup: false}
  ]

  const classes = useStyles();
  const [tasks, setTask ] = useState(initialState);
  

  const onTaskFinished = (id) => {
    // setTask([...tasks, ...tasks.map((task) => {
      
    // })])
  }


  const onTaskTimeup = (id) => {
    setTask(tasks.map((task) => {
      if(task.id === id) {
        return { ...task, timeup: true}
      } else {
        return task;
      } 
    }))
  }

  
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* <div className={classes.offset} /> */}
        <Container maxWidth="sm" className={classes.container}>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route exact path="/tasks">
              {tasks.map((task) => {
                switch(task.type) {
                  // case 1: return <SimpleTask id={task.id} content={task.content} complete={task.complete} onTaskFinished={onTaskFinished} />
                  case 1: return <CounterTask></CounterTask>
                // break;
                  case 2: return <DeadlineTask 
                  id={task.id} 
                  content={task.content}
                  startDate={task.startDate} 
                  deadline={task.deadline} 
                  complete={task.complete} 
                  status={task.status} 
                  timeup={task.timeup}
                  onTaskFinished={onTaskFinished}  
                  onTaskTimeup={onTaskTimeup}
                  />
                // break;
                }
              })}
            </Route>
            <Route exact path="/add_task">
              <AddTask />
            </Route>
            <Route exact path="/logout">
              <Login />
            </Route>
          </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
