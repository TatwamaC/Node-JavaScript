var http = require('http')
var fs = require('fs')
function process_request(req,res){
    if(req.method == 'GET' && req.url =='/'){
        fs.readFile('loginpost.html',function(err,data){
            res.writeHead(200,{'Content-Type' : 'text/html'});
            res.write(data);
            res.end();
        });
    }else if(req.method == 'POST'){
        var body = "";
        req.on("data",function(data){
            body += data;
            res.writeHead(200,{'Content-Type' : 'text/html'});
            var arr = body.split("&");
            res.write("Welcome"+arr);
            res.end();
                })
    }
}
var server = http.createServer(process_request)
server.listen(3000);
console.log("listening on local host 3000");