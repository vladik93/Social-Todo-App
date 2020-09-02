// import Task from "./scripts/Task.js";
import './App.css';

import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import SimpleTask from './components/Tasks/SimpleTask';
import DeadlineTask from './components/Tasks/DeadlineTask';
import MultistepTask from './components/Tasks/MultistepTask';
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
    return new Date(year, (month+1), day);
  };
  const createDateTime = (day, month, year, hour, minute, second) => {
      return new Date(year, month, day, hour, minute, second);
  }

  
  const initialState =  [
    {id: 1, type: 2, content: 'Save Mom from Exploding', deadline: createDateTime(8, 31, 2020, 21, 59, 0), complete: false },
    {id: 2, type: 1, content: 'Save Mom from Drowning', complete: false}
  ]

  const classes = useStyles();
  const [tasks, setTask ] = useState(initialState);
  

  const onTaskFinished = (id) => {
    setTask([...tasks, ...tasks.filter((x) => x.id === id).map((task) => task.complete = !task.complete)])
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

                  case 1: 
                      return <SimpleTask id={task.id} content={task.content} complete={task.complete} onTaskFinished={onTaskFinished} />

                  case 2: 
                      return <DeadlineTask id={task.id} content={task.content} complete={task.complete} status={task.status} onTaskFinished={onTaskFinished} />
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
