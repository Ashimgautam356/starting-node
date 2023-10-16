// this is equal to 
// const { error } = require('console')
// const {readFile}= require('fs')
// const util = require('util')
// const readFilePromise = util.promisify(readFile)

// this one
const {readFile} = require('fs').promises

const getText = async ()=>{
    try{
        const first = await readFile('./4-path-module-test/first.txt','utf8')
        console.log(first)
    }
    catch(errror){
        console.log(errror)
    }
} 
getText()