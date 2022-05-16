const event = require('events')
const emmit = new event.EventEmitter();
emmit.on("Someevent",(event)=>{
    console.log(event)
})
emmit.emit('Someevent',{
    data : "HELLO WORLD"
})