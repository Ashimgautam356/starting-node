const {readFile,writeFile} = require('fs');


readFile('./4-path-module-test/first.txt','utf8',(err,firstresult)=>{
    if(err){
        console.log(err)
        return
    }
    const first = firstresult; 
    readFile('./4-path-module-test/second.txt','utf8',(err,secondresult)=>{
        if(err){
            console.log(err)
            return
        }
        const second = secondresult;
        writeFile(
            './4-path-module-test/result-async.txt',
            `here is the result: ${first} , ${second}`
        ,(err,res)=>{
            if(err){
                console.log(err)
                return;
            }
            console.log(res)
        })
    })
    
})