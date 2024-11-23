//Java script is a syncronous ,blocking ,single-threaded language
//To make async programming possible ,we need the help of libuv
//The event loop is what allows Node.js to perform non-blocking I/O operations
//In event listener, we excute our immediate  code and the excute the callback

//Example 

const {readFile} = require('fs')

console.log('started the first activity series')

//checking the file path 

readFile('./content/test.txt','utf8', (err,result) =>{
    if (err){

        console.log(err)
        return
    }
    console.log (result)
    console.log('Completed the first task')

})

console.log('starting the next task')

//EXAMPLE 2

console.log("Learning beggined")
console.time()
 
for(let i=0; i<100000; i++){
    // const h3 = document.querySelector('h3')
    //h3.textContent = `hey everyone is amaised of wycliffe`


 }
 console.timeEnd()
 console.log('Next task')

//Example 3

console.log('First taskii')
setTimeout(()=>{
    console.log('second taskii')

},1)
console.log('next taskiii')

//Example four
 setInterval(()=>{
    console .log (`timmer timed`)


 },1)
 console.log (`i wil be excuted first`)



