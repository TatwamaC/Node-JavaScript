let http = require("http")

function handlerReq(req,res){
    var body = "<html><body><h1>what is this?</h1></body></html>";
    var content_length = body.length;
    res.writeHead(200, {
            'Content-Length': content_length,
            'Content-Type': 'text\html'
    })
    res.end(body);
} 

let server = http.createServer(handlerReq);
server.listen(7171,"localhost");