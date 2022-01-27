var http = require('http')
var fs = require('fs')



http.createServer( function (req, res) {
    if(req.url==='/')
    {
    fs.readFile('sample.html', (err,data) => {    
        res.write(data)
        res.end()   

      })
    }
    else if(req.url==='/login')
        {
            res.writeHead(200,{'Content-type':'text/html'})
            res.write('<h1>Login Page</h1>')
            res.end()
        }
    else{
        res.write('Error')
        res.end()
    }

}).listen(5000,()=> console.log("Server Started"))