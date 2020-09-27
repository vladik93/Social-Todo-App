import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Paper, Typography, Card, TextField, Container} from '@material-ui/core';
import { Height } from '@material-ui/icons';
import Friend from './Friend';
import { positions } from '@material-ui/system';
import $ from 'jquery'



var friendBase = [];
var friends = [];
var searchedFriends = [];


class FriendClass 
{  //Pseudo class that will become useless once we have Server & Database 

    constructor(friendID, fullName, ImageURL)
    {
        this.friendID = friendID;
        this.fullName = fullName;
        this.ImageURL = ImageURL;
        
    }
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    holder: {
        backgroundColor: "rgb(245,250,250)",
        marginBottom: theme.spacing(3)
    },
    search: {

        marginLeft: theme.spacing(3)
    },
    friends: { 
        marginTop: theme.spacing(2)
    }

}));

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

    var init = false;

function Friends(props){

    const [friendArray, setFriends] = useState();

    const changed = (change) => 
    {
        
        let val = change.target.value;
        val = val.toLowerCase();
        console.log(val);
        friends = [];
        for(let a = 0; a < 10; a++)
        {
            
            if(val == "" || val==null || friendBase[a].fullName.toLowerCase().includes(val))
                friends.push( <Friend key={a} src={friendBase[a].ImageURL} header={getRandomInt(100) + " common friends"} name={friendBase[a].fullName} /> );
        }
        setFriends(friends);
    }

    
    
    

   

    const classes = useStyles();

    useEffect(() => 
    {
        for(let a = 0; a < 10; a++)
        {
            friendBase.push(new FriendClass(a, getRandomName(), "https://sun6-14.userapi.com/7a7_Zwd42_g0aqUAI_QlnftjEHHVA5IR289znQ/eRJGn-p8Dng.jpg"))
            friends.push( <Friend key={a} src={friendBase[a].ImageURL} header={getRandomInt(100) + " common friends"} name={friendBase[a].fullName} /> );

        }
        setFriends(friends);

    });
    

    
    
    

    


    return (
        <div className="root">
            <Typography variant="h3">
                Friends ({+ props.friendAmount }) : 
            </Typography>
            <Card className={classes.holder}>
   
                <TextField onChange={changed} className={classes.search}  label="Search" type="search" />

                <Container className={classes.friends}>
                    {friendArray}
                </Container>
                
     
            </Card>
        </div>
        
    );
}

export default Friends;