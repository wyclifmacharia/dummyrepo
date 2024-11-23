const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('Home page');
  } else if (req.url === '/about') {
    // blocking code 
    for (let i = 0; i < 1000; i++) {
      for (let j = 0; j < 1000; j++) {
        console.log(`${i} ${j}`);
      }
    }
    res.end('About page');
  } else {
    res.statusCode = 404;
    res.end('Error page');
  }
});

const port = 5000;

server.listen(port, () => {
  console.log(`Server listening on port ${port}...`)
});

//ANOTHER METHODE 
 
const{readFile} = require('fs')

 const getText = (path)=>{
  return new Promise((resolve, reject) => {
    readFile(path,'utf8',(err,data)=>{
      if(err){

      reject(err)
      }else{

        resolve(data)
      }

    })
    
  })
}

const start = async ()=>{
  try{

    const test  = await getText('./content/fisrt.txt')
    console.log(test)
  }catch(err)
  {
console.log(error)

  }

}
start()

// ANOTHER ASYNC METHOD USING THE UTIL MODULE

const { readFile, writeFile } = require('fs');
const util = require('util');

const readFilePromise = util.promisify(readFile);
const writeFilePromise = util.promisify(writeFile);

const starti = async () => {
  try {
    const first = await readFilePromise('./content/fisrt.txt', 'utf8');
    const test = await readFilePromise('./content/test.txt', 'utf8');

    await writeFilePromise(
      './content/result-async.txt',
      `THIS IS AWESOME LEARNING: ${first} ${test}`
    );

    console.log(first, test);
  } catch (error) {
    console.log(error);
  }
};

start();

