const https = require("https");

function geturl(url) {
    let request = https.get(url);
    request.on('response' , (response) => {
        
        let data = "";
        response.setEncoding('utf-8');
        response.on('data' , (chunk) => {
            data += chunk;
        })
        response.on('end',() => {
            console.log('Data' , JSON.parse(data));
        })
    })
}
let url = "https://jsonplaceholder.typicode.com/todos/1"
geturl(url);