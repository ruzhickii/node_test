const os = require('os');

// Operation System

// Platform
console.log(`Operation System is: ${os.platform()}`);

// Architecture
console.log(`Architecture is: ${os.arch()}`);

// Process info
console.log( os.cpus());

// Free memory
console.log(`Free memory: ${os.freemem()}`);

// All memory
console.log(`Total memory: ${os.totalmem()}`);

// Root directory
console.log(`Root directory is: ${os.homedir()}`);

// How long is system working
console.log(`System works: ${os.uptime()}`);