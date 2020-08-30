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


// let task = new Task("Fuckoff", "You are shit");

const useStyles = makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
    container: {
      minHeight: '450px'
    }
}));


function App() {
  const classes = useStyles();
  const [tasks, setTask ] = useState();
  
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
              <SimpleTask  content="Kill a faggot"/>
              <MultistepTask title="Do Shit" content={[{id: 1, content: 'Yeah'}, {id: 2, content: 'Fuck'}, {id: 3, content: 'No Man'}]} />
              <DeadlineTask content="Save Mom from Exploding" deadline={new Date(Date.now()).getTime()/1000} />
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
