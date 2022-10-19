const http = require("http");
const host = 'localhost';
const puerto = 8000;
const manejadorPeticiones = (req, res) => {
    res.writeHead(200);
    res.end("Mi primer servidor");
};
const servidor = http.createServer(manejadorPeticiones);
servidor.listen(puerto, host, () => {
    console.log(`Servidor corriendo en http://${host}:${puerto}`);
});