// Include prompt module.
const prompt = require('prompt');
const LCDScreen = require('../src/LCDScreen');
const screen = new LCDScreen

// This json object is used to configure what data will be retrieved from command line.
const prompt_attributes = [
  {
    // The fist input text is assigned to username variable.
    name: 'number',
  },
]

// Start the prompt to read user input.
prompt.start();

// Prompt and get user input then display those data in console.
prompt.get(prompt_attributes, function (err, result) {
  if (err) {
    console.log(err);
    return 1;
  } else {
    console.log('Command-line received data:');

    // Get user input from result object.
    let number = result.number;

    // Display user input in console log.
    screen.displayGrid(number);
  }
});