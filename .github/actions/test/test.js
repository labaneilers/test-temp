const execSync = require('child_process').execSync;

console.log("Hello, World!");

const result = execSync('bash', ['-c', `echo what is up`]);

console.log(result);

console.log("worked");
