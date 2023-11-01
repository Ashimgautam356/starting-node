const EventEmitter = require('events');

const customEmitter = new EventEmitter()

customEmitter.on('response',(name,id)=>{
    console.log(`data received of user ${name} with id=${id}`)
})
customEmitter.on('response',()=>{
    console.log(`data received some other logic here `)
})

//1.  we can have many functio as we want based on our requirments 
// orders matters on first and emmit second.  

customEmitter.emit('response','ashim', 22)