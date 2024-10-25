//Java script is a syncronous ,blocking ,single-threaded language
//To make async programming possible ,we need the help of libuv
//The event loop is what allows Node.js to perform non-blocking I/O operations

//Example 

const {readFile} = require('fs')

console.log('started the first activity')

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




