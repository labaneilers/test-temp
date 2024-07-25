const { execSync } = require('node:child_process').execSync;

console.log("Hello, World!");

const result = execSync('bash', ['-c', `echo what is up`], { stdio: 'inherit', encoding: 'utf-8' });

console.log(result);

console.log("worked");
