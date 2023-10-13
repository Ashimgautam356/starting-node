const {readFile}= require('fs')

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

getText('./4-path-module-test/first.txt').then(result=>{
    console.log(result)
})

 