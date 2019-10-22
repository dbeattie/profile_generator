const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// What's your name? Nicknames are also acceptable :)
// What's an activity you like doing?
// What do you listen to while doing that?
// Which meal is your favourite (eg: dinner, brunch, etc.)
// What's your favourite thing to eat for that meal?
// Which sport is your absolute favourite?
// What is your superpower? In a few words, tell us what you are amazing at!
rl.question('What\'s your name? Nicknames are also acceptable :)\n', (name) => {
  // TODO: Log the answer in a database 
  console.log(`Thank you for your valuable feedback: ${name}`);
 
  rl.question('What\'s an activity you like doing?', (activity) => {
    // TODO: Log the answer in a database
    console.log(`Thank you for your valuable feedback: ${activity}`);
    rl.question('What do you listen to while doing that?', (music) => {
        // TODO: Log the answer in a database
        console.log(`Thank you for your valuable feedback: ${music}`);
        rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (faveMeal) => {
            // TODO: Log the answer in a database
            console.log(`Thank you for your valuable feedback: ${faveMeal}`);
            
            rl.question('What\'s your favourite thing to eat for that meal?', (faveFood) => {
                // TODO: Log the answer in a database
                console.log(`Thank you for your valuable feedback: ${faveFood}`);
                rl.question('Which sport is your absolute favourite?', (sport) => {
                    // TODO: Log the answer in a database
                    console.log(`Thank you for your valuable feedback: ${sport}`);
                    rl.question('What is your superpower? In a few words, tell us what you are amazing at!', (superpower) => {
                        // TODO: Log the answer in a database
                        console.log(`Thank you for your valuable feedback: ${superpower}`);
    
                        console.log(`${name} loves listening to ${music} while ${activity}, devouring ${faveFood} for ${faveMeal}, prefers ${sport} over any other sport, and is amazing at ${superpower}.`)
                        rl.close();
                    }); // nested question 6
                }); // nested question 5
            }); // nested question 4
        }); //nested question 3
    }); // nested question 2
  }); //nested question 1
}); // closing of the first question 