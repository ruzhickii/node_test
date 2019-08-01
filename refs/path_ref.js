const path = require('path');

// Paths

console.log('Name of file: ', path.basename(__filename));
console.log('Path of file: ', path.dirname(__filename));
console.log('Name of extantion: ', path.extname(__filename));

console.log('Paths and name of file like object: ', path.parse(__filename));

console.log('Generate path of file: ', path.join(__dirname, 'test', 'second.html'));
console.log('Generate correct path of file', path.resolve(__dirname, './test', '/second.html'));