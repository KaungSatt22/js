let fs = require("fs");

function text() {
    fs.readFile("test1.ts",'utf-8', (error,data) => {
        if(error){
            console.log(error);
            return
        }
        console.log(data);
    })
}
text();