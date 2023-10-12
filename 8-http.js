const http = require('http')

const server = http.createServer((req, res)=>{
    if(req.url === '/'){
    res.end('welcome to our home page')
    }
    if(req.url === '/about'){
        res.end('this is about page')
    }
    res.end(`
        <h1>Oops!</h1>
        <p> page can't found </p>
        <a href="/"> back home</a>
    `)
    })

server.listen(5000,() => {
    console.log('Server is listening on port 5000');
})