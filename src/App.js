import Task from "./scripts/Task.js";
import './App.css';

import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import CurrentTasks from './components/Tasks/CurrentTasks';
import AddTask from './components/Tasks/AddTask';

import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';


// let task = new Task("Fuckoff", "You are shit");

const useStyles = makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
    container: {
      minHeight: '450px'
    }
}));


function App() {
  const classes = useStyles();

  const initTasks = [
    {id: 1, title: 'Get Super Fit', subtasks: 
        [
            {id: 1, content: 'Do cardio', complete: false}, 
            {id: 2, content: 'Eat right', complete: false}, 
            {id: 3, content: 'Don\'t succumb to temptation', complete: false}
        ], 
    date: '12/05/20', complete: false}, 
];
  const [tasks, setTask ] = useState(initTasks);
  
  const taskSubmit = (task) => {
    setTask([...tasks, { id: 2, title: null, }]);
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
              <CurrentTasks tasks={tasks} />
            </Route>
            <Route exact path="/add_task">
              <AddTask taskSubmit={taskSubmit} />
            </Route>
            <Route exact path="/logout">
              <Login />
            </Route>
          </Switch>
        </Container>
        {/* <div className={classes.offset} /> */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
