const {readFile,writeFile} = require('fs')
const { reject } = require('lodash')
const { resolve } = require('path')

const func = (path)=>{
    return new Promise((resolve, reject)=>{
        readFile(path,'utf8',(err,data)=>{
            if(err){
                reject(err)
            }
            else{
                resolve(data)
            }
        })
    })
}

// func('./test/file.txt').then((data)=>{
//     console.log(data)
// })

const a = async()=>{
    try{
        const da = await func('./test/file.txt')
        console.log(da)
    }
    catch(err){
        console.log(err)
    }
}
a()