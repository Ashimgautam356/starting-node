const {readFile}= require('fs')
const { result } = require('lodash')

const getText = (path)=>{
    return new Promise((resolve,reject)=>{
        readFile(path, 'utf8', (err,data)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(data)
            }
        })
    })
} 
// this is for async await
const start = async()=>{
    try{
        
        const first = await getText('./4-path-module-test/first.txt');
        console.log(first)
    }
    catch(err){
        console.log(err)
    }
}
start()



// this own is for promise
// getText('./4-path-module-test/first.txt')
// .then(result=>{console.log(result)})
// .catch((result=>{console.log(result )}))

 