class Sockets {
  constructor(io) {
    this.io = io;
    this.socketEvents();
  }

  socketEvents() {
    //on conecta el socket
    this.io.on('connection', (socket) => {
      //escuchar (recibir /enviar) envento: mensaje-to-server
      socket.on('mensaje-to-server', (data) => {
        console.log(data.texto);
        this.io.emit('mensaje-from-server', data);
      });
    });
  }
}

module.exports = Sockets;
