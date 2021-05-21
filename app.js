require('dotenv').config(); //requiere usualmente van arriba de terceros

const Server = require('./models/server');

const server = new Server();


server.listen();
 

 
