const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const person = {
  name: '',
  activity: '',
  music: '',
  meal: '',
  food: '',
  sport: '',
  superpower: '',
};

rl.question(`What's your name? Nicknames are also acceptable :) `, (answer) => {
  person.name = answer;
  rl.question(`What's an activity you like doing? `, (answer) => {
    person.activity = answer;
    rl.question(`What do you listen to while doing that? `, (answer) => {
      person.music = answer;
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.) `, (answer) => {
        person.meal = answer;
        rl.question(`What's your favourite thing to eat for that meal? `, (answer) => {
          person.food = answer;
          rl.question(`Which sport is your absolute favourite? `, (answer) => {
            person.sport = answer;
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at! `, (answer) => {
              person.superpower = answer;
              console.log();
              console.log(`${person.name} loves listening to ${person.music} while ${person.activity}, devouring ${person.food} for ${person.meal}, prefers ${person.sport} over any other sport, and is amazing at ${person.superpower} at inopportune times.`);
              rl.close();
            });
          });
        });
      });
    });
  });
});