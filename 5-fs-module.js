const {readFileSync,writeFileSync} = require('fs');

const first = readFileSync('./4-path-module-test/first.txt','utf8')

const second = readFileSync('./4-path-module-test/second.txt','utf8')

writeFileSync(
    './4-path-module-test/writing-with-fs.txt',
    `here is teh result: ${first}, ${second}`,
    {flag:'a'}
    );
