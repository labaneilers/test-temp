const execSync = require('child_process').execSync;

console.log("Hello, World!");

const result = execSync('bash', ['-c', `npm install -g tldr`]);

console.log(result);

console.log("worked");
