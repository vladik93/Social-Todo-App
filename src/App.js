import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Login/Login';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    offset: theme.mixins.toolbar
}));


function App() {
  const classes = useStyles();
  
  return (
    <div className="App">
      <Navbar />
      <div className={classes.offset} />
      <Login />
    </div>
  );
}

export default App;
