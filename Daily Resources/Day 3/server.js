var http = require('http')
var fs = require('fs')



http.createServer( function (req, res) {

    fs.readFile('sample.html', (err,data) => {    
        res.write(data)
        res.end()   
      })
    
    
}).listen(7000)

