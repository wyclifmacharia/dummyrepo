const http  = require('http')

const server = http.createServer((req,res)=>{
if (req.url === '/'){
    res.end("welcome to our home page ")
}
 if (req.url ==='/about'){
    res.end("This our short story")

 }
res.end (`
    <h1>Opps</h1>
    <p>We cant find the page you are trying to acess </p>

    <a href="/"> back home </a>
    
    `)

})

server.listen(5000)
