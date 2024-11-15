const nzcli = require('./index.js');
const process = require('process');
const parameters = {};	// global variable
const cli = new nzcli(parameters, process);
console.log(parameters);
console.log('or');
console.log(cli.parameters);

