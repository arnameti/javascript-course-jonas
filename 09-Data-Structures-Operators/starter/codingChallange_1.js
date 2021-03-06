'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// // 1 - Destructering Arrays
// const [players1, players2] = game.players;
// console.log(players1);
// console.log(players2);

// // 2
// const [gk, ...fieldPlayers] = game.players[0];
// // or
// // const [gk, ...fieldPlayers] = players1;
// console.log(gk);
// console.log(fieldPlayers);

// // 3 - spread Operator
// const allPlayers = [...game.players[0], ...game.players[1]];
// // or
// // const allPlayers = [...players1, ...players2];
// console.log(allPlayers);

// // 4 - spread Operator
// const players1Final = ['Thiago', 'Coutinho', 'Perisic', ...game.players[0]];
// console.log(players1Final);

// // 5 - nested destructering
// const {odds: {team1, x: draw, team2}} = game;

// // 6 - use the spread Operator
// const printGoals = function(...players) {
//   console.log(`${players.length} goals were scored`);
// };
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
// printGoals('Davies', 'Muller');
// printGoals(...game.scored);

// // 7 - use a logical operator
// team1 > team2 && console.log('Team 1 is more likely to win');
// team2 > team1 && console.log('Team 2 is more likely to win');

// 1
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

// 2
const [gk, ...fieldPlayers] = game.players[0];
console.log(gk);
console.log(fieldPlayers);

// 3 - spread Operator
const allPlayers = [...game.players[0], ...game.players[1]];
console.log(allPlayers);

// 4 - spread Operator
const players1Final = [...game.players[0], 'Thiago', 'Couthinho', 'Perisic'];
console.log(players1Final);

// 5 - nested destructering
const {
  odds: { team1, x: draw, team2 },
} = game;

console.log(team1, draw, team2);

//6

const printGoals = function (...players) {
  console.log(`${players.length} goals were scored`);
};

printGoals('a', 'b', 'c', 'd');

//7 - use a logical operator

team1 > team2 && console.log('Team 1 is more likely to win');
team2 > team1 && console.log('Team 2 is more likely to win');
