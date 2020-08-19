import './App.css';
import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import CurrentTasks from './components/Tasks/CurrentTasks';
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
  const classes = useStyles();
  
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
              <CurrentTasks />
            </Route>
            <Route exact path="/add_task">
              <AddTask />
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
