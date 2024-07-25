const execSync = require('child_process').execSync;

console.log("Hello, World!");

const result = execSync('bash', ['-c', `npm install -g tldr`], {stdio: 'inherit'});

console.log(result);

console.log("worked");
