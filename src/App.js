// import Task from "./scripts/Task.js";
import './App.css';

import React, { useState, useEffect} from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';

import SimpleTask from './components/Tasks/SimpleTask';
import DeadlineTask from './components/Tasks/DeadlineTask';
import CounterTask from './components/Tasks/CounterTask';
import MultistepTask from './components/Tasks/MultistepTask';
import AddTask from './components/Tasks/AddTask';

import Container from '@material-ui/core/Container';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';
import { DesktopWindowsRounded } from '@material-ui/icons';
import Friends from './components/Friends/Friends';
import TasksHolder from './components/Tasks/TasksHolder';
import $ from "jquery";
import Register from './components/Register/Register';



class FriendClass 
{  //Pseudo class that will become useless once we have Server & Database 

    constructor(friendID, fullName, ImageURL, commonFriends)
    {
        this.friendID = friendID;
        this.fullName = fullName;
        this.ImageURL = ImageURL;
        this.commonFriends = commonFriends;
        
    }
}


const useStyles = makeStyles((theme) => ({
    offset: theme.mixins.toolbar,
    container: {
      minHeight: '450px'
    },
    appBar: {
      
    }
}));
var previusLocation;





function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const getRandomName = () => 
  {
      //Two array that I copied from the internet :)) 
      let firstName =  [ "Adam", "Alex", "Aaron", "Ben", "Carl", "Dan", "David", "Edward", "Fred", "Frank", "George", "Hal", "Hank", "Ike", "John", "Jack", "Joe", "Larry", "Monte", "Matthew", "Mark", "Nathan", "Otto", "Paul", "Peter", "Roger", "Roger", "Steve", "Thomas", "Tim", "Ty", "Victor", "Walter"];   
      let lastName = [ "Anderson", "Ashwoon", "Aikin", "Bateman", "Bongard", "Bowers", "Boyd", "Cannon", "Cast", "Deitz", "Dewalt", "Ebner", "Frick", "Hancock", "Haworth", "Hesch", "Hoffman", "Kassing", "Knutson", "Lawless", "Lawicki", "Mccord", "McCormack", "Miller", "Myers", "Nugent", "Ortiz", "Orwig", "Ory", "Paiser", "Pak", "Pettigrew", "Quinn", "Quizoz", "Ramachandran", "Resnick", "Sagar", "Schickowski", "Schiebel", "Sellon", "Severson", "Shaffer", "Solberg", "Soloman", "Sonderling", "Soukup", "Soulis", "Stahl", "Sweeney", "Tandy", "Trebil", "Trusela", "Trussel", "Turco", "Uddin", "Uflan", "Ulrich", "Upson", "Vader", "Vail", "Valente", "Van Zandt", "Vanderpoel", "Ventotla", "Vogal", "Wagle", "Wagner", "Wakefield", "Weinstein", "Weiss", "Woo", "Yang", "Yates", "Yocum", "Zeaser", "Zeller", "Ziegler", "Bauer", "Baxster", "Casal", "Cataldi", "Caswell", "Celedon", "Chambers", "Chapman", "Christensen", "Darnell", "Davidson", "Davis", "DeLorenzo", "Dinkins", "Doran", "Dugelman", "Dugan", "Duffman", "Eastman", "Ferro", "Ferry", "Fletcher", "Fietzer", "Hylan", "Hydinger", "Illingsworth", "Ingram", "Irwin", "Jagtap", "Jenson", "Johnson", "Johnsen", "Jones", "Jurgenson", "Kalleg", "Kaskel", "Keller", "Leisinger", "LePage", "Lewis", "Linde", "Lulloff", "Maki", "Martin", "McGinnis", "Mills", "Moody", "Moore", "Napier", "Nelson", "Norquist", "Nuttle", "Olson", "Ostrander", "Reamer", "Reardon", "Reyes", "Rice", "Ripka", "Roberts", "Rogers", "Root", "Sandstrom", "Sawyer", "Schlicht", "Schmitt", "Schwager", "Schutz", "Schuster", "Tapia", "Thompson", "Tiernan", "Tisler" ];

      let name = firstName[getRandomInt(firstName.length-1)];
      let lName = lastName[getRandomInt(lastName.length-1)];
      return name + " " + lName;
  }


var friendBase = [];

for(let a = 0; a < 10; a++)
  friendBase.push(new FriendClass(a, getRandomName(), "https://sun9-55.userapi.com/QM742luqQ2U7zaIOZNuKjS58ImfltwhaPqRPng/M9zq2f3MX4U.jpg", getRandomInt(100)));

function App() { 

  
  
  

  const [plus, setPlus ] = useState();

  const check = () =>
  {
    
    var currentLocation = window.location.pathname;


    if(currentLocation != previusLocation)
    {
        onLocationChange(currentLocation);
    }
    


    previusLocation = currentLocation;
  }

  const onLocationChange = (loc) => {
    console.log("Location is: " + loc);
    if(loc != "/")
    {
      setPlus(true);
    }
    else
    {
      setPlus(false);
    }
    console.log("Location changed.");
  };


  
  const createDate = (day, month, year,) => {
    //Month starts from 0 (Jan = 0, Dec = 11)
    return new Date(year, (month-1), day);
  };
  const createDateTime = (day, month, year, hour, minute, second) => {
      return new Date(year, (month-1), day, hour, minute, second);
  }

  const initialState =  [
    {id: 1, type: 2, content: 'Finish homework on time', startDate: createDateTime(7, 9, 2020, 20, 22, 0) , deadline: createDateTime(7, 9, 2020, 21, 49, 5) , complete: false, timeup: false },
    {id: 2, type: 1, content: 'Clean up the apartment', complete: false},
    {id: 3, type: 3, content: 'Do Squats', overallCount: 9, doneCount: 3, complete: false},
    {id: 4, type: 3, content: 'Get people to sing petition', overallCount: 100, doneCount: 15, complete: false},
    {id: 5, type: 4, content: 'Finish daily schedule', complete: false, steps: [
      {id: 1, task: 'Pay electricity bill', complete: false}, 
      {id: 2, task: 'Feed dog', complete: false}, 
      {id: 3, task: 'Visit mom', complete: false}
    ]}
  ]

  const classes = useStyles();
  const [tasks, setTask ] = useState(initialState);
  

  const onTaskFinished = (id, bool) => {
    setTask(tasks.map((task) => {
      if(task.id === id) {
        return { ...task, complete: bool}
      } else {
        return task;
      }
    }))
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

  const onTaskStepToggle = (id, stepId) => {
    setTask(tasks.map((task) => {
      if(task.id === id) {
        return { ...task, steps: task.steps.map((step) => {
          if(step.id === stepId) {
            return { ...step, complete: !step.complete};
          } else {
            return step;
          }
        })}
      } else {
        return task;
      }
    }))
  };

  const onTaskDelete = (id_param) => {
    setTask(tasks.filter((x) => x.id !== id_param)
    .map((task) => {
      return {...task}; // spread operator maybe not needed here
    }))
  }

  const addTaskToState = (type, content_param) => {
    setTask([...tasks, {id: tasks.length + 1, type: 1, content: content_param, complete: false}]);
  }

  

  

  

    
  

  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* <div className={classes.offset} /> */}
        <Container maxWidth="sm" className={classes.container}>
          <Switch>
            <Route exact path="/login">
              <Login plusFunc={setPlus} />
            </Route>
            <Route exact path="/">
              <Login plusFunc={setPlus} />
            </Route>
            <Route exact path="/my_tasks">
              <TasksHolder plusFunc={setPlus}>
                {tasks.map((task) => {
                  switch(task.type) {
                    case 1: return <SimpleTask 
                      id={task.id} 
                      content={task.content} 
                      complete={task.complete} 
                      onTaskFinished={onTaskFinished}
                      onTaskDelete={onTaskDelete} 
                    />
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
                      onTaskDelete={onTaskDelete}
                    />
                    case 3: return <CounterTask 
                      id={task.id} 
                      content={task.content} 
                      overallCount={task.overallCount}
                      doneCount={task.doneCount}
                      complete={task.complete}
                      onTaskFinished={onTaskFinished}
                      onTaskDelete={onTaskDelete} 
                    />
                    case 4: return <MultistepTask 
                      id={task.id}
                      content={task.content}
                      steps={task.steps}
                      complete={task.complete}
                      onTaskStepToggle={onTaskStepToggle}
                      onTaskFinished={onTaskFinished}
                      onTaskDelete={onTaskDelete}
                    />
                  }
                })}
              </TasksHolder>

            </Route>
            <Route exact path="/add_task">
              <AddTask addTaskToState={addTaskToState} />
            </Route>
            <Route exact path="/logout">
              <Login />
            </Route>
            <Route exact path="/friends">
                <Friends friendBase={friendBase} friendAmount={10}/>
            </Route>
            <Route exact path="/register">
                <Register/>
            </Route>
          </Switch>
        </Container>
        <Footer pos="fixed" isPlus={plus} />
      </div>
    </Router>
    
  );
}

export default App;
