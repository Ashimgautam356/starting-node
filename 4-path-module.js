const path  = require('path');
// console.log(path.sep);

const filepath = path.join('/4-path-module-test','sub-folder','test.txt')
console.log(filepath)

const base = path.basename(filepath)
console.log(base)

const absolute = path.resolve(__dirname,'4-path-module-test','sub-folder','test.txt');
console.log(absolute)