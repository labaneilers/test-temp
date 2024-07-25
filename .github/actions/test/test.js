const execSync = require('child_process').execSync;

console.log("Hello, World!");

execSync('bash', ['-c', `npm install -g tldr`], {stdio: 'inherit'});

console.log("worked");
