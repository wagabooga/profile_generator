const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable :)`, (answer0) => {
  rl.question(`What's an activity you like doing?`, (answer1) => {
    rl.question(`What do you listen to while doing that?`, (answer2) => {
      rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)`, (answer3) => {
        rl.question(`What's your favourite thing to eat for that meal?`, (answer4) => {
          rl.question(`Which sport is your absolute favourite?`, (answer5) => {
            rl.question(`What is your superpower? In a few words, tell us what you are amazing at!`, (answer6) => {
              console.log(`My name is${answer0}!,I like to ${answer1},I listen to ${answer2}while i am ${answer1},My faviroute meal is${answer3},My favioroute dish for ${answer3}is ${answer4},My absolute faviroute sport is${answer5}, and Lastly my superpower is ${answer6}`);
              // we close inside the middle here because we want to close after our final question has been answered
              rl.close();
            });
          });
        });
      });
    });
  });
});



