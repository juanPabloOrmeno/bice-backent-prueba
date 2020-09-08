import Server from "./classes/server";
import bodyParser from 'body-parser';



import cors from 'cors';
import productoRouter from "./routes/valores.Routes";

const server = new Server();

//cors
server.app.use( cors({ origin: true, credentials: true }));

//body parse
server.app.use( bodyParser.urlencoded({ extended: true }));
server.app.use( bodyParser.json());



//rutas
server.app.use( '/valores', productoRouter);



//levanta espress
server.start();