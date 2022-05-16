let http = require("http");

let requestHandler = (req,res)=>{
    console.log(req.url);
    res.end("HELLO WORLD");
}

let server = http.createServer(requestHandler)
server.listen(3000)