const readline = require('readline');

const rl = readline.createInterface({ 
  input: process.stdin,
  output: process.stdout
});

const answers = {};

rl.question('What is your name? Nicknames are also acceptable', (answer) => {
  answers['name'] = answer;  
  rl.question('What is an activity you like doing? ', (answer) => {
    answers['activity'] =  answer;
    rl.question('What do you listen to while doing that? ', (answer) => {
      answers['music'] =  answer;
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)? ', (answer) => {
        answers['favMealtime'] =  answer;
        rl.question('What\'s your favourite thing to eat for that meal? ', (answer) => {
          answers['food'] =  answer;
          rl.question('Which sport is your absolute favourite? ', (answer) => {
            answers['sport'] =  answer;
            rl.question('What is your superpower? In a few words, tell us what you are amazing at! ', (answer) => {
              answers['superpower'] =  answer;
              
              console.log(`${answers['name']} loves to listen to ${answers['music']} while ${answers['activity']}, devouring ${answers['food']} during ${answers['favMealtime']}, prefers ${answers['sport']} over any other sport, and is amazing at ${answers['superpower']}.`);
              rl.close();
            });
          });
        });
      });
    });
  });
  // rl.close();
});

