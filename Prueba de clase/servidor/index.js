const Server = require("socket.io").Server;

const io = new Server(3000, {
    cors: {
        origin: '*'
    }
});

let newData = () => {
    return {
        value: 0
    }
}

let newVote = () => {
    return {
        value: 1,
        voto: n
    }
}

io.on("connection", (socket) => {

    socket.emit('new', newData());

});