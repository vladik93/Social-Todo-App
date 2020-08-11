import './App.css';
import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Container from '@material-ui/core/Container';

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
      <Container maxWidth="sm">
        <Login />
      </Container>
      <div className={classes.offset} />
      <Footer />
    </div>
  );
}

export default App;
