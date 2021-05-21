const express = require('express');
const cors = require('cors');



class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios';


        //Middleware: funciones que agregaran funciones al levantar el servidor
        this.middlewares();
        //Rutas de mi aplicación
        this.routes();
    }

    middlewares() {

        //CORS
        this.app.use(cors());

        //Lectura y parseo del body
        this.app.use( express.json() );

        //Directoriopublico
        this.app.use( express.static('public') );
    }

    routes() {

        this.app.use(this.usuariosPath, require('../routes/user'));

    }
    
    listen() {
        this.app.listen( this.port, () =>{
            console.log('Servidor corriendo en puerto', this.port);
        } );
    }


}


module.exports = Server;