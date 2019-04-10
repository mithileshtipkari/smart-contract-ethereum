const path = require('path');
const fs = require('fs');
const solc = require('solc');


const inboxPath = path.resolve(__dirname, 'contracts', 'inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

const compiled = solc.compile(source, 1); //1 - no. of contracts that we are trying to compile

// console.log(compiled['contracts'][':Inbox']); //for troubleshooting

module.exports = compiled.contracts[':Inbox'];
