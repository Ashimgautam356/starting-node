// const list = ['item1', 'item2']; 
// const obj = {
//     prop1: 'value1',
//     prop2: 'value2',
// }

// module.exports = list; 
// console.log(module.exports)
// module.exports  = obj;
// console.log(module.exports)


//alternate way of wirting the code 
module.exports.list = ['item1', 'item2']; 
const obj = {
    prop1: 'value1',
    prop2: 'value2',
}

console.log(module.exports)
module.exports.somevalue  = obj;
console.log(module.exports)