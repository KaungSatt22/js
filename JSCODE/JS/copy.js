const fs = require("fs")
function read(source,dest,callback){
    fs.readFile(source,(err,buffer)=>{
        if(err){
            callback(err)
        }
        else{
            fs.writeFile(dest,buffer,callback)
        }
    })
}
read('test.txt','copy.txt',(e)=>console.log('callback e is ',e))