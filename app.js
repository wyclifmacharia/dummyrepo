//EVENTS 

const EventEmitter = require('events')

const customEmitter = new EventEmitter() //instance of the class 

customEmitter.on('response',(name,id)=>{

console.log(`data received  ${name} with id:${id}`)


})
customEmitter.on('response',()=>{

  console.log(`i can have as many methods as i want`)
  
  
  })
  customEmitter.on('response',()=>{
 
    console.log(`response`)
    
    
    })

customEmitter.emit('response','wycliffe',34)