import { WebSocketServer,WebSocket} from "ws";

const wss=new WebSocketServer({port:8080});


let allSockets:WebSocket[]=[];
wss.on("connection",(socket)=>{
    allSockets.push(socket);
    console.log("User connected");
    socket.on("message",(message)=>{
        console.log("Message received:"+message.toString())
        allSockets.forEach(s=>{
            s.send(message.toString()+": sent from server");
        },1000);
    })
    socket.on("Disconnect",()=>{
        allSockets=allSockets.filter(x=>x!=socket);
    })
})



