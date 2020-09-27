import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Paper, Typography, Card, TextField, Container} from '@material-ui/core';
import { Height } from '@material-ui/icons';
import Friend from './Friend';
import { positions } from '@material-ui/system';
import $ from 'jquery'
import { Autocomplete } from '@material-ui/lab';



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
    },
    noResult: {
        textAlign: "center"
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

    const stringFormation = (str) => 
    {
        var formatted;
        formatted = str.toLowerCase();
        formatted = formatted.replaceAll(" ", "");

        return formatted;
    }

    const matching = (str1, str2) =>
    {
        str1 = stringFormation(str1);
        str2 = stringFormation(str2);

        
        
        if(str2.includes(str1))
            return true;
        if(str1.includes(str2))
            return true;
    }

    const changed = (change) => 
    {
        const fBase = props.friendBase;
        let val = change.target.value;
        val = val.toLowerCase();
        searchedFriends = [];
        for(let a = 0; a < 10; a++)
        {
            
            if(val == "" || val==null || matching(fBase[a].fullName, val))
                searchedFriends.push( <Friend key={a} src={fBase[a].ImageURL} header={fBase[a].commonFriends + " common friends"} name={fBase[a].fullName} /> );
            
            
        }
        if(searchedFriends.length == 0)
        { 
            searchedFriends.push( <Typography variant="h3" className={classes.noResult}> No results.</Typography>);
        }
        setFriends(searchedFriends);
    }

    
    

   

    const classes = useStyles();

    useEffect(() => 
    {
        var fbase = props.friendBase;
        // friends = [];
        if(friends.length != 10)
        {
            for(let a = 0; a < 10; a++)
            {
                friends.push( <Friend key={a} src={fbase[a].ImageURL} header={ fbase[a].commonFriends + " common friends"} name={fbase[a].fullName} /> );
            }
            setFriends(friends);
        }
        else
        {
            if(document.getElementById("search").value != "")
                setFriends(searchedFriends);
            else 
                setFriends(friends);
            return;
        }
            
        // console.log("Is temp the same ? " + temp==friends);
        // if(temp != friends)
        // {
        //     // 
        //     friends = temp;
        //     console.log("Hey");
        // }
            
        // 

    });
    

    
    
  

    


    return (
        <div className="root">
            <Typography variant="h3">
                Friends ({+ props.friendAmount }) : 
            </Typography>
            <Card className={classes.holder}>
   
                <TextField id="search" onChange={changed} className={classes.search}  label="Search" type="search" />

                <Container className={classes.friends}>
                    {friendArray}
                </Container>
                
     
            </Card>
        </div>
        
    );
}

export default Friends;