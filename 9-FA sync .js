// synchronus way 

const { readFileSync, writeFileSync} =require('fs')
    
const first = readFileSync('./content/fisrt.txt','utf8')
const second = readFileSync('./content/test.txt','utf8')

console.log(first,second);

 writeFileSync('./content/results-sync.txt',
     `Here is the results : ${first},${second}`) 