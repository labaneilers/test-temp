const { execSync } = require('node:child_process');

console.log("Hello, World!");

const result = execSync('npm install -g tldr', { stdio: 'inherit', encoding: 'utf-8' });

console.log(result);

console.log("worked");
