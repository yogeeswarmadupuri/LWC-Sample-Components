console.log('Testing my src file');
console.log('live loading of commands');
/* 
We're building a Cricket app !

Suppose we get data from a web service about a certain game (below). 
In this challenge we're gonna work with the data. So here are your tasks:

1. Create one player array for each team (variables 'players1' and 'players2')
2. The first player in any player array is the wicketkeeper and the others are field players. 
For India (team 1) create one variable ('Ind') with the wicketkeeper name, 
and one array ('fieldPlayers') with all the remaining 10 field players
3. Create an array 'allPlayers' containing all players of both teams (22 players)
4. During the game, India (team 1) used 3 substitute players. So create a new array ('players1Final') 
containing all the original team1 players plus 'Sandeep', 'John' and 'Sunil'
5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
6. The team with the lower odd is more likely to win. 
Print to the console which team is more likely to win, 
WITHOUT using an if/else statement or the ternary operator.
7. Loop over the game.Century array and print each player name to the 
console, along with the Century number (Example: "Century 1: Kohli")
8. Use a loop to calculate the average odd and log it to the console 

GOOD LUCK 😀
*/
const game = {
    team1: "India",
    team2: "Australia",
    players: [
      [
        "Dhoni",
        "Sharma",
        "Kohli",
        "Rahul",
        "Jadeja",
        "Pandey",
        "Ashwin",
        "Chahal",
        "Khan",
        "Bhumra",
        "Shami",
      ],
      [
        "Wade",
        "Cummins",
        "Green",
        "Maxwell",
        "Finch",
        "Hazelwood",
        "Marsh",
        "Stoinis",
        "Richardson",
        "Starc",
        "Warner",
      ],
    ],
    Century: ["Kohli", "Sharma", "Warner", "Maxwell"],
    odds: {
      team1: 1.33,
      x: 3.25,
      team2: 6.5,
    },
  };

//1. Create one player array for each team (variables 'players1' and 'players2')
let [players1,players2] = game.players;
console.log('Player1 Data '+players1);
console.log('Player2 Data '+players2);

/*2. The first player in any player array is the wicketkeeper and the others are field players. 
For India (team 1) create one variable ('Ind') with the wicketkeeper name, 
and one array ('fieldPlayers') with all the remaining 10 field players*/
let [ind,...fieldPlayers] = players1;
console.log(ind);
console.log('remaninng players ===> '+fieldPlayers);

//3. Create an array 'allPlayers' containing all players of both teams (22 players)
let allPlayers = [...players1,...players2];
console.log('All Players '+allPlayers);


/*4. During the game, India (team 1) used 3 substitute players. So create a new array ('players1Final') 
containing all the original team1 players plus 'Sandeep', 'John' and 'Sunil'*/
let substitutePlayers = ['Sandeep','John','Sunil'];
let players1Final = [...players1,...substitutePlayers];
console.log('players1Final'+players1Final);


//5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

let {team1,x:draw,team2} = game.odds;
console.log('team1 ' + team1);
console.log('draw ' + draw);
console.log('team2 ' + team2);

/*6. The team with the lower odd is more likely to win. 
Print to the console which team is more likely to win, 
WITHOUT using an if/else statement or the ternary operator.*/

team1 < team2 && console.log('Team1 will win the match');

/*7. Loop over the game.Century array and print each player name to the 
console, along with the Century number (Example: "Century 1: Kohli")*/

for(let [index,playerName] of game.Century.entries()){
    console.log(`Century ${index+1}: ${playerName}`);
}

//8. Use a loop to calculate the average odd and log it to the console
let sum = 0;
let counter = Object.entries(game.odds).length;
console.log('counter Value '+counter);
for(let [key,value] of Object.entries(game.odds)){
    sum += value;
}
console.log('counter '+counter);
console.log('sum '+sum);
console.log('Average '+Math.round((sum/counter)));
