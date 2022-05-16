const net = require("net")
let server = net.createServer();
let Connection = (con)=>{
    con.on("data",(data)=>{
        console.log("Data",data.toString());
        let responseStatus = "HTTP/1.1 200 Ok\r\n";
        let responseBody = "<h1>Hello from Server </h1>";
        responseStatus += "Content-Type:text/html\r\n";
        responseStatus += `Content-length:${responseBody.length}\r\n\r\n`;
        con.write(responseStatus);
        con.write(responseBody);
    })
}
server.on('connection',Connection)
server.listen(9000,()=>console.log('server started'))